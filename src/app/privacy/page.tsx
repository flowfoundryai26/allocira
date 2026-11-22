import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
export const metadata: Metadata = { title: "Privacy Notice | Allocira" };
export default function Privacy() {
  return (
    <LegalShell title="Privacy Notice" updated="22 November 2026">
      <section>
        <h2>Who handles your information</h2>
        <p>
          FlowFoundry AI Solutions operates Allocira. Contact{" "}
          <a href="mailto:info@flowfoundryai.in">info@flowfoundryai.in</a> with
          privacy questions or requests.
        </p>
      </section>
      <section>
        <h2>What we collect</h2>
        <p>
          The waitlist collects your name, email, professional role, consent
          choice and, if provided, organisation, firm size and primary
          challenge. The feedback form separately collects your name, email,
          message and consent choice. We record consent timestamps. Hosting and
          security systems may process request information such as IP address to
          prevent abuse. Do not submit client files or confidential financial
          records.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          We use waitlist data to understand demand, send concept updates,
          invite prototype feedback and consider future pilots. We use feedback
          to research needs and reply where appropriate. Each form requires its
          own consent. Feedback does not add you to the waitlist.
        </p>
      </section>
      <section>
        <h2>Providers and access</h2>
        <p>
          Supabase stores submissions; Vercel may host the site and process
          requests. Authorised FlowFoundry personnel can access records. We do
          not sell them or make subscriber data public. Processing locations
          depend on provider configuration; contact us for deployment details.
        </p>
      </section>
      <section>
        <h2>Retention</h2>
        <p>
          We keep submissions while research and early access are active, review
          the need for them at least annually, and remove data when no longer
          needed. You may request deletion at any time. Limited records may be
          retained where required by law or to document a request.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          To access, correct or delete your information, withdraw consent, or
          raise a concern, email{" "}
          <a href="mailto:info@flowfoundryai.in?subject=Allocira%20privacy%20request">
            info@flowfoundryai.in
          </a>{" "}
          from the address you used, with “Allocira privacy request” in the
          subject. We may verify your identity before changing records.
        </p>
      </section>
      <section>
        <h2>Security and updates</h2>
        <p>
          Forms use server-side validation, spam controls and restricted
          database access. No online service is completely secure. We may update
          this notice as the concept evolves; the date above identifies the
          current version.
        </p>
      </section>
    </LegalShell>
  );
}
