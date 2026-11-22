import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
async function listen(server) {
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  return server.address().port;
}

// Isolated PostgREST responses exercise the shipped Next handlers without a live project.
test(
  "production submission routes preserve consent, isolation and failure semantics",
  { timeout: 120000 },
  async (t) => {
    const rows = { waitlist_subscribers: [], product_feedback: [] };
    const limits = new Map();
    let unavailable = false;
    const database = createServer(async (req, res) => {
      res.setHeader("Content-Type", "application/json");
      if (unavailable) {
        res.writeHead(503);
        res.end('{"message":"Unavailable"}');
        return;
      }
      let body = "";
      for await (const chunk of req) body += chunk;
      const data = JSON.parse(body);
      if (req.url.startsWith("/rest/v1/rpc/check_submission_rate_limit")) {
        assert.match(data.p_key, /^[a-f0-9]{64}$/);
        const count = (limits.get(data.p_key) || 0) + 1;
        limits.set(data.p_key, count);
        res.end(JSON.stringify(count <= data.p_limit));
        return;
      }
      const table = new URL(req.url, "http://localhost").pathname
        .split("/")
        .pop();
      if (!Object.hasOwn(rows, table)) {
        res.writeHead(404);
        res.end("{}");
        return;
      }
      if (
        table === "waitlist_subscribers" &&
        rows[table].some((row) => row.email === data.email)
      ) {
        res.writeHead(409);
        res.end('{"code":"23505","message":"duplicate email"}');
        return;
      }
      rows[table].push(data);
      res.writeHead(201);
      res.end();
    });
    const dbPort = await listen(database);
    t.after(() => database.close());
    const probe = createServer();
    const appPort = await listen(probe);
    await new Promise((resolve) => probe.close(resolve));
    const origin = "http://127.0.0.1:" + appPort;
    const app = spawn(
      process.execPath,
      [
        require.resolve("next/dist/bin/next"),
        "start",
        "-H",
        "127.0.0.1",
        "-p",
        String(appPort),
      ],
      {
        stdio: "ignore",
        windowsHide: true,
        env: {
          ...process.env,
          NEXT_PUBLIC_SITE_URL: origin,
          SUPABASE_URL: "http://127.0.0.1:" + dbPort,
          SUPABASE_SECRET_KEY: "local-test-only",
          RATE_LIMIT_SECRET: "isolated-test-fixture-secret-for-rate-limits",
        },
      },
    );
    t.after(() => app.kill());
    for (let tries = 0; ; tries++) {
      if (app.exitCode !== null)
        throw new Error(
          "Build the production app before running the API test.",
        );
      try {
        if ((await fetch(origin + "/robots.txt")).ok) break;
      } catch {}
      if (tries >= 100) throw new Error("Local app did not become ready.");
      await delay(250);
    }
    const post = (route, values, headers = {}) =>
      fetch(origin + "/api/" + route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: origin,
          ...headers,
        },
        body: JSON.stringify(values),
      });
    const signup = {
      fullName: " Example Partner ",
      email: " EXAMPLE@EXAMPLE.TEST ",
      professionalRole: "LLP Partner",
      privacyConsent: true,
    };
    assert.equal(
      (await post("waitlist", { ...signup, privacyConsent: false })).status,
      400,
    );
    assert.equal(
      (await post("waitlist", { ...signup, website: "filled" })).status,
      400,
    );
    assert.equal(
      (await post("waitlist", signup, { Origin: "https://unrelated.example" }))
        .status,
      403,
    );
    assert.equal((await post("waitlist", signup)).status, 201);
    const saved = rows.waitlist_subscribers[0];
    assert.equal(saved.email, "example@example.test");
    assert.equal(saved.privacy_consent, true);
    assert.ok(Date.parse(saved.consent_timestamp));
    assert.ok(saved.privacy_notice_version);
    assert.equal(
      (await post("waitlist", { ...signup, email: "example@example.test" }))
        .status,
      409,
    );
    assert.equal(
      (
        await post("feedback", {
          ...signup,
          message: "Consider a matter-level expense report.",
        })
      ).status,
      201,
    );
    assert.equal(rows.product_feedback.length, 1);
    assert.equal(rows.waitlist_subscribers.length, 1);
    for (let i = 0; i < 3; i++)
      assert.equal((await post("waitlist", signup)).status, 409);
    assert.equal((await post("waitlist", signup)).status, 429);
    unavailable = true;
    assert.equal(
      (
        await post("feedback", {
          ...signup,
          message: "Another synthetic feedback message.",
        })
      ).status,
      503,
    );
    assert.equal((await fetch(origin + "/api/waitlist")).status, 405);
  },
);
