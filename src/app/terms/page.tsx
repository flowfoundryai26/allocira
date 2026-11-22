import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
export const metadata: Metadata = { title: "Terms of Use | Allocira" };
export default function Terms() {
  return (
    <LegalShell title="Terms of Use" updated="22 November 2026">
      <section>
        <h2>About this website</h2>
        <p>
          Allocira is an early-stage concept by FlowFoundry AI Solutions.
          This site describes ideas and invites feedback. It does not provide
          access to a live financial application. No launch date or future
          feature is guaranteed.
        </p>
      </section>
      <section>
        <h2>Illustrative content</h2>
        <p>
          Dashboard views, financial figures, names and workflows here are
          fictional examples. They are for illustration only and must not be
          used for financial, legal or business decisions.
        </p>
      </section>
      <section>
        <h2>No professional advice</h2>
        <p>
          This site and the proposed product do not provide accounting, tax or
          legal advice. Consult qualified professionals about your LLP
          agreement, accounting treatment, tax obligations and compliance
          requirements.
        </p>
      </section>
      <section>
        <h2>Use of forms</h2>
        <p>
          Provide accurate contact details. Do not submit confidential client
          information, sensitive firm financial records, unlawful material or
          content you are not authorised to share. Joining the waitlist is free
          and creates no purchase obligation or right to future access.
        </p>
      </section>
      <section>
        <h2>Content and contact</h2>
        <p>
          FlowFoundry AI Solutions owns or licenses site content, excluding
          credited third-party imagery. You may view and share links to this
          site for ordinary evaluation. Contact{" "}
          <a href="mailto:info@flowfoundryai.in">info@flowfoundryai.in</a> with
          questions. See the <a href="/privacy">Privacy Notice</a> for personal
          data handling.
        </p>
      </section>
    </LegalShell>
  );
}
