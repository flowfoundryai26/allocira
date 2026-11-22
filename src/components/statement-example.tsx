import { FileText, GitBranch, Wallet } from "lucide-react";

const stages = [
  {
    icon: Wallet,
    title: "Period balances",
    rows: [
      ["Collections", "₹18.4L"],
      ["Allocated expenses", "−₹4.6L"],
      ["Retained by the firm", "−₹2.8L"],
    ],
  },
  {
    icon: GitBranch,
    title: "Agreement schedule",
    rows: [
      ["Draft distribution pool", "₹11.0L"],
      ["A. Rao’s share", "38%"],
      ["Proposed adjustment", "₹0"],
    ],
  },
  {
    icon: FileText,
    title: "A. Rao’s draft statement",
    rows: [
      ["Draft entitlement", "₹4,18,000"],
      ["Review status", "Awaiting approval"],
      ["Payment recorded", "₹0"],
    ],
  },
];
export function StatementExample() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#354965] bg-[#121d2d]">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-6 py-4">
        <strong className="text-sm font-semibold">
          June partner statement
        </strong>
        <span className="text-xs text-[#a7bcda]">
          Concept preview · Fictional figures
        </span>
      </figcaption>
      <div className="grid gap-px bg-[#2b3a50] md:grid-cols-3">
        {stages.map(({ icon: Icon, title, rows }) => (
          <div className="bg-[#152135] p-5 sm:p-6" key={title}>
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Icon size={17} className="text-[#8bb7ff]" />
              {title}
            </h3>
            <dl className="mt-5 space-y-3 text-sm">
              {rows.map(([name, value]) => (
                <div
                  key={name}
                  className="flex flex-wrap justify-between gap-2"
                >
                  <dt className="text-slate-400">{name}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </figure>
  );
}
