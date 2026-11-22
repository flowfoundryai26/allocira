import test from "node:test";
import assert from "node:assert/strict";
import { waitlistSchema, feedbackSchema } from "../src/lib/validation.ts";

const base = {
  fullName: "  Sample Partner ",
  email: "  PARTNER@EXAMPLE.TEST ",
  professionalRole: "LLP Partner",
  privacyConsent: true,
};

test("normalises contact details and accepts omitted optional fields", () => {
  const result = waitlistSchema.parse(base);
  assert.equal(result.email, "partner@example.test");
  assert.equal(result.fullName, "Sample Partner");
  assert.equal(result.organisationName, "");
});

test("both forms require affirmative consent", () => {
  for (const consent of [undefined, null, false, "true"]) {
    assert.equal(
      waitlistSchema.safeParse({ ...base, privacyConsent: consent }).success,
      false,
    );
    assert.equal(
      feedbackSchema.safeParse({
        ...base,
        message: "A sample feedback message.",
        privacyConsent: consent,
      }).success,
      false,
    );
  }
});

test("rejects unknown options and malformed addresses", () => {
  for (const change of [
    { firmSize: "1000" },
    { professionalRole: "" },
    { primaryChallenge: "Unlisted option" },
    { email: "invalid" },
    { organisationName: "x".repeat(161) },
  ]) {
    assert.equal(
      waitlistSchema.safeParse({ ...base, ...change }).success,
      false,
    );
  }
});

test("feedback is distinct from a subscription", () => {
  const result = feedbackSchema.parse({
    ...base,
    message: "Please consider matter-level expenses.",
  });
  assert.equal(result.professionalRole, undefined);
  assert.equal(result.email, "partner@example.test");
  assert.equal(
    feedbackSchema.safeParse({ ...base, message: "" }).success,
    false,
  );
});
