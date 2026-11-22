import { ChevronDown } from "lucide-react";

const examples = [
  {
    title: "Matter time entry",
    rows: [
      ["Matter", "Meridian lease"],
      ["Billable time", "2 h 30 min"],
      ["Non-billable review", "30 min"],
    ],
  },
  {
    title: "Collection allocation",
    rows: [
      ["Fees collected", "₹1,00,000"],
      ["Origination credit", "20%"],
      ["Work contribution", "80%"],
    ],
  },
  {
    title: "Expense record",
    rows: [
      ["Category", "Matter expense"],
      ["Disbursement", "₹3,200"],
      ["Review status", "Pending"],
    ],
  },
  {
    title: "Agreement schedule",
    rows: [
      ["A. Rao", "38%"],
      ["M. Shah", "34%"],
      ["N. Mehta", "28%"],
    ],
  },
  {
    title: "A. Rao · Draft statement",
    rows: [
      ["Draft entitlement", "₹4,18,000"],
      ["Adjustment", "₹0"],
      ["Approval", "Awaiting review"],
    ],
  },
  {
    title: "Statement export",
    rows: [
      ["Reporting period", "June 2026"],
      ["Statement", "Partner earnings"],
      ["Proposed format", "CSV"],
    ],
  },
  {
    title: "Review history",
    rows: [
      ["10:15", "Draft prepared"],
      ["11:30", "Inputs checked"],
      ["12:05", "Review requested"],
    ],
  },
  {
    title: "Proposed invoice import",
    rows: [
      ["Data source", "Firm spreadsheet"],
      ["Match on", "Invoice reference"],
      ["Next step", "Review mapping"],
    ],
  },
];

export function FeatureExample({ index }: { index: number }) {
  const sample = examples[index];
  return (
    <details className="group/sample mt-5 border-t border-white/10 pt-3">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm text-[#a6c8ff]">
        View sample
        <ChevronDown
          size={16}
          className="transition-transform group-open/sample:rotate-180"
        />
      </summary>
      <div className="mt-3 rounded-lg border border-white/10 bg-[#101a2b] p-3">
        <p className="mb-3 text-xs font-semibold text-white">{sample.title}</p>
        <dl className="space-y-2 text-xs">
          {sample.rows.map(([key, value]) => (
            <div key={key} className="flex justify-between gap-2">
              <dt className="text-slate-400">{key}</dt>
              <dd className="text-right text-slate-200">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </details>
  );
}
