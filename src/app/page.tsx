import { FeatureExample } from "@/components/feature-example";
import { StatementExample } from "@/components/statement-example";
import { Hero } from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  CheckCheck,
  ClipboardCheck,
  Clock3,
  FileClock,
  FileSpreadsheet,
  Landmark,
  Layers3,
  LockKeyhole,
  Mail,
  ReceiptText,
  Scale,
  Settings2,
  ShieldCheck,
  Split,
  UsersRound,
  WalletCards,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { DashboardPreview } from "@/components/dashboard-preview";
import { WaitlistForm } from "@/components/waitlist-form";
import { FeedbackForm } from "@/components/feedback-form";

const officeImage = "/images/office.jpg";
const collaborationImage = "/images/discussion.jpg";
const financeImage = "/images/finance.jpg";

const challenges = [
  {
    icon: Layers3,
    title: "Fragmented Records",
    body: "Billable hours, collections and expenses may sit across spreadsheets, messages and accounting tools.",
  },
  {
    icon: Split,
    title: "Different Sharing Agreements",
    body: "Remuneration and profit-sharing methods can differ from one LLP agreement to another.",
  },
  {
    icon: Calculator,
    title: "Manual Calculations",
    body: "Month-end allocation and payout reconciliation may require repetitive manual work.",
  },
  {
    icon: BookOpenCheck,
    title: "Limited Transparency",
    body: "Partners may need a clearer record of how proposed distributions were calculated.",
  },
  {
    icon: ClipboardCheck,
    title: "Approval & Reconciliation",
    body: "Firms need dependable review before payouts and accounting entries are finalised.",
  },
];

const features = [
  {
    icon: Clock3,
    title: "Billable Hours Tracking",
    body: "Record billable and non-billable work by matter and lawyer, then review time-based reports.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Partner Revenue Allocation",
    body: "Explore configurable allocation of collected revenue, origination credits and work contributions.",
  },
  {
    icon: ReceiptText,
    title: "Expense Management",
    body: "Record overheads and expenses attributable to particular matters or partners.",
  },
  {
    icon: Settings2,
    title: "Custom Profit-Sharing Rules",
    body: "Model calculations around an LLP's agreement and approved accounting policies.",
  },
  {
    icon: WalletCards,
    title: "Partner Payout Management",
    body: "Prepare draft distributions, adjustments and statements for authorised approval.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    body: "Prepare partner statements, collection summaries, expense breakdowns and downloadable reports.",
  },
  {
    icon: FileClock,
    title: "Audit Trails & Approvals",
    body: "Trace inputs, rule changes, approvals and the history of proposed payouts.",
  },
  {
    icon: FileSpreadsheet,
    title: "Accounting Integrations",
    body: "Explore connections to existing accounting tools, spreadsheets and practice systems.",
  },
];

const steps = [
  {
    icon: Settings2,
    title: "Configure Your Firm",
    body: "Set up partners and approved financial arrangements.",
  },
  {
    icon: ReceiptText,
    title: "Record Financial Activity",
    body: "Capture hours, invoices, payments and expenses.",
  },
  {
    icon: Calculator,
    title: "Apply Allocation Rules",
    body: "Calculate draft amounts using your firm's configured rules.",
  },
  {
    icon: CheckCheck,
    title: "Review & Approve",
    body: "Authorised partners or finance staff review the calculations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Generate Reports",
    body: "Prepare statements for reconciliation and accountant review.",
  },
];

const faqs = [
  [
    "What is Allocira?",
    "A proposed financial workflow platform for tracking and managing partner-level earnings, expenses and payouts in law firm LLPs.",
  ],
  [
    "Is Allocira available today?",
    "Not yet. It is in the research and validation stage.",
  ],
  [
    "Is joining the waitlist free?",
    "Yes. Joining is free and does not require a purchase.",
  ],
  [
    "Will it replace my accountant?",
    "No. The proposed platform is intended to simplify recordkeeping, calculations and reviews. Qualified professionals remain responsible for accounting, tax and compliance decisions.",
  ],
  [
    "Can different LLPs use different profit-sharing models?",
    "Supporting firm-specific, configurable arrangements is a core part of the proposed concept.",
  ],
  [
    "Is my firm's financial information safe?",
    "The public waitlist collects registration and feedback details, not confidential client files or firm financial records. Any future financial platform will require a separate security and data protection design.",
  ],
  [
    "When will Allocira launch?",
    "No public launch date has been announced.",
  ],
  [
    "How can I provide feedback?",
    "Join the waitlist or contact the FlowFoundry team using the form below.",
  ],
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />

        <section id="about" className="section-pad">
          <div className="container-shell grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <div className="relative aspect-[1.25] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={officeImage}
                  alt="Contemporary meeting room in a professional office, used as illustrative stock photography"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="image-overlay absolute inset-0" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#0d1727]/75 p-5 backdrop-blur-lg">
                  <div className="flex items-start gap-3">
                    <Scale size={22} className="shrink-0 text-[#7aabff]" />
                    <p className="text-sm leading-6 text-slate-100">
                      Designed around the financial arrangements that make each
                      LLP distinct.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow mb-4">About Allocira</p>
              <h2 className="section-title max-w-xl">
                Built for the Financial Realities of Modern Law Firms
              </h2>
              <p className="section-copy mt-7">
                Different LLPs may use different compensation structures,
                expense-sharing arrangements and payout processes. Allocira
                is being explored to make those workflows clearer without
                requiring firms to change their entire accounting ecosystem.
              </p>
              <div className="mt-9 border-t border-white/15 pt-7">
                <div className="flex items-center gap-3 text-[#8bb5ff]">
                  <BriefcaseBusiness size={21} />
                  <h3 className="text-base font-semibold text-white">
                    About the Team
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Allocira is an initiative by FlowFoundry AI Solutions, an
                  AI automation and custom software development company focused
                  on solving practical business problems.
                </p>
                <Link
                  href="https://flowfoundryai.in/"
                  className="mt-4 inline-block text-sm font-semibold text-[#9bc0ff] underline"
                >
                  Visit FlowFoundry AI Solutions
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="problem"
          className="section-pad border-y border-white/[.07] bg-[#0e1421]"
        >
          <div className="container-shell">
            <Reveal>
              <h2 className="section-title max-w-[820px]">
                Managing Partner Finances Shouldn&apos;t Be This Complicated.
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                These are the workflow challenges we&apos;re investigating with
                legal professionals. Every firm&apos;s situation is different.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map(({ icon: Icon, title, body }, index) => (
                <Reveal
                  key={title}
                  delay={index * 0.04}
                  className={`panel-soft group rounded-2xl p-7 transition-colors hover:border-[#4f8cff]/40 hover:bg-[#1a2940] ${index === 4 ? "lg:col-span-2" : ""}`}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="text-[#7aabff]"
                  />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                    {body}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-2">
              <div className="bg-[#182130] p-7 sm:p-10">
                <p className="text-sm font-semibold text-slate-400">
                  Today, for some firms
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  A fragmented month-end
                </h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Hours spreadsheet",
                    "Invoice records",
                    "Expense ledger",
                    "Payout emails",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#101827] p-4 text-sm text-slate-300"
                    >
                      <FileSpreadsheet size={17} className="text-slate-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#193759] to-[#101d33] p-7 sm:p-10">
                <p className="text-sm font-semibold text-[#95bdff]">
                  The proposed direction
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  One reviewable financial view
                </h3>
                <div className="mt-8 rounded-xl border border-[#81acff]/25 bg-[#0c1728]/70 p-5">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-[#4f8cff]/20">
                      <Landmark size={16} className="text-[#91bcff]" />
                    </span>
                    <span className="text-sm font-semibold">
                      Draft partner statement
                    </span>
                    <span className="ml-auto rounded-md bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200">
                      Concept
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-5 text-sm">
                    <span className="text-slate-400">Collected revenue</span>
                    <span className="text-right">₹18.4L</span>
                    <span className="text-slate-400">Expense allocation</span>
                    <span className="text-right">₹4.6L</span>
                    <span className="text-slate-400">Approval</span>
                    <span className="text-right text-amber-200">
                      Awaiting review
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="section-pad">
          <div className="container-shell">
            <Reveal>
              <h2 className="section-title max-w-[720px]">
                One Platform. Flexible Financial Workflows.
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                Eight capabilities under consideration for a platform shaped
                around each firm&apos;s approved financial arrangements.
              </p>
            </Reveal>
            <div className="mt-12 grid items-start gap-3 md:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, body }, index) => (
                <Reveal
                  key={title}
                  delay={(index % 4) * 0.04}
                  className={`panel-soft group min-h-[245px] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4f8cff]/45 hover:bg-[#1b2a42]`}
                >
                  <span className="flex size-11 items-center justify-center rounded-xl border border-[#77a8ff]/20 bg-[#4f8cff]/10 text-[#8dbaff]">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.13em] text-[#7eb3ff]">
                    Planned capability
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                    {body}
                  </p>
                  <FeatureExample index={index} />
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#4f8cff]/20 bg-[#14233a] p-5 text-sm leading-7 text-slate-200">
              <ShieldCheck className="mt-1 shrink-0 text-[#82afff]" size={20} />
              <p>
                Financial clarity requires more than a time sheet. Invoiced
                fees, collected revenue, partner remuneration, expense
                allocations, profit-sharing entitlements and actual payouts may
                differ. The proposed workflow keeps these figures distinct for
                review.
              </p>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="section-pad border-y border-white/[.07] bg-[#0e1421]"
        >
          <div className="container-shell">
            <Reveal>
              <h2 className="section-title max-w-[780px]">
                From Complex Records to Clear Partner Statements
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                A proposed workflow that gives partners a traceable path from
                activity to reviewable statements.
              </p>
            </Reveal>
            <div className="relative mt-14 grid gap-4 md:grid-cols-5">
              <div
                className="absolute left-[9%] right-[9%] top-6 hidden h-px bg-gradient-to-r from-[#4f8cff]/15 via-[#4f8cff]/70 to-[#4f8cff]/15 md:block"
                aria-hidden="true"
              />
              {steps.map(({ icon: Icon, title, body }, index) => (
                <Reveal key={title} delay={index * 0.07} className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-[#77a8ff]/30 bg-[#182e4b] text-[#8dbaff]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                  <div className="mt-6 text-xs font-medium text-[#79a9f8]">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold leading-6">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {body}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-14">
              <StatementExample />
            </Reveal>
          </div>
        </section>

        <section id="who-its-for" className="section-pad">
          <div className="container-shell">
            <Reveal>
              <h2 className="section-title">Who We&apos;re Building With</h2>
              <p className="section-copy mt-5 max-w-2xl">
                We&apos;re inviting perspectives from the people who own, review
                and prepare partner finance information.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Small Law Firm LLPs",
                  body: "For firms seeking a clearer way to manage partner-level finances.",
                  image: "/images/partners.jpg",
                  alt: "Professionals meeting around a presentation table",
                },
                {
                  title: "Managing Partners",
                  body: "For partners responsible for reviewing earnings allocations and distributions.",
                  image: collaborationImage,
                  alt: "Illustrative stock photo of professionals collaborating in an office",
                },
                {
                  title: "Finance & Administrative Teams",
                  body: "For staff preparing financial reports and reconciling partner payouts.",
                  image: financeImage,
                  alt: "Illustrative financial documents on a desk",
                },
              ].map(({ title, body, image, alt }, index) => (
                <Reveal
                  key={title}
                  delay={index * 0.06}
                  className="group relative min-h-[380px] overflow-hidden rounded-2xl border border-white/10"
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="image-overlay absolute inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-200">
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Images are illustrative stock photography and do not depict
              Allocira customers.
            </p>
          </div>
        </section>

        <section
          id="preview"
          className="section-pad border-y border-white/[.07] bg-[#0e1421]"
        >
          <div className="container-shell">
            <Reveal>
              <h2 className="section-title max-w-[770px]">
                See What Partner Finance Management Could Look Like
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                Explore fictional sample views of the proposed product. The
                dashboard below is an interactive concept, not a working finance
                application.
              </p>
            </Reveal>
            <Reveal className="mt-11">
              <DashboardPreview />
            </Reveal>
          </div>
        </section>

        <section id="waitlist" className="section-pad hero-glow">
          <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <div className="sticky top-28">
                <p className="eyebrow mb-5">Early access</p>
                <h2 className="section-title">
                  Help Shape the Future of Partner Finance Management
                </h2>
                <p className="section-copy mt-6">
                  We&apos;re exploring Allocira with legal professionals.
                  Join the early-access waitlist to receive product updates,
                  opportunities to review prototypes and invitations to future
                  pilot testing.
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-7 text-sm text-slate-300">
                  <LockKeyhole size={19} className="text-[#7aabff]" />
                  We only ask for contact details and optional feedback.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="panel rounded-2xl p-6 sm:p-9">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Join the early-access list
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Fields marked * are required.
                </p>
              </div>
              <WaitlistForm />
            </Reveal>
          </div>
        </section>

        <section
          id="faqs"
          className="section-pad border-y border-white/[.07] bg-[#0e1421]"
        >
          <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-copy mt-5">
                Clear answers about where the concept stands today.
              </p>
            </Reveal>
            <Reveal>
              <Accordion
                type="single"
                collapsible
                className="border-t border-white/10"
              >
                {faqs.map(([question, answer], index) => (
                  <AccordionItem key={question} value={`faq-${index}`}>
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <h2 className="section-title">
                Have Feedback? We&apos;d Like to Hear It.
              </h2>
              <p className="section-copy mt-6">
                Managing partners, accountants and legal operations
                professionals: tell us how your firm handles partner finance
                today and what would make the process clearer.
              </p>
              <div className="mt-9 space-y-4">
                <a
                  href="mailto:info@flowfoundryai.in"
                  className="flex items-center gap-3 text-[#a9c9ff] hover:text-white"
                >
                  <Mail size={20} />
                  info@flowfoundryai.in
                </a>
                <a
                  href="https://flowfoundryai.in/"
                  className="flex items-center gap-3 text-[#a9c9ff] hover:text-white"
                >
                  <BriefcaseBusiness size={20} />
                  flowfoundryai.in
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="panel rounded-2xl p-6 sm:p-9">
              <h3 className="mb-6 text-2xl font-semibold tracking-tight">
                Share your perspective
              </h3>
              <FeedbackForm />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
