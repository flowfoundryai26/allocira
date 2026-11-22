"use client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  Clock3,
  FileBarChart2,
  LockKeyhole,
  WalletCards,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
const hours = [242, 296, 275, 350, 384, 428];
const partners = [
  { name: "A. Rao", share: "38%", amount: "₹4,18,000", color: "#4f8cff" },
  { name: "M. Shah", share: "34%", amount: "₹3,74,000", color: "#22d3ee" },
  { name: "N. Mehta", share: "28%", amount: "₹3,08,000", color: "#7993bd" },
];

function ConceptTag() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#77a8ff]/30 bg-[#254576]/35 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#a9c9ff]">
      Concept Preview — Not a Live Product
    </span>
  );
}
function Stat({
  label,
  value,
  icon: Icon,
  meta,
}: {
  label: string;
  value: string;
  icon: typeof WalletCards;
  meta?: string;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[.08] bg-[#17243a] p-4">
      <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
        <span>{label}</span>
        <Icon size={16} className="text-[#7aabff]" />
      </div>
      <p className="mt-4 truncate text-xl font-semibold tracking-tight text-white md:text-2xl">
        {value}
      </p>
      {meta && <p className="mt-1 text-xs text-slate-400">{meta}</p>}
    </div>
  );
}
function Bars() {
  return (
    <div
      role="img"
      aria-label="Monthly billable hours: 242, 296, 275, 350, 384 and 428, January through June."
      className="flex h-[148px] items-end gap-3 border-b border-white/10 pb-1 sm:gap-5"
    >
      {hours.map((height, index) => (
        <div
          key={months[index]}
          className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2"
        >
          <div
            className="chart-bar w-full rounded-t-md"
            style={{ height: `${height / 5}%` }}
          />
          <span className="text-center font-mono text-[10px] text-slate-500">
            {months[index]}
          </span>
        </div>
      ))}
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat
          label="Collected revenue"
          value="₹18.4L"
          icon={CircleDollarSign}
          meta="Fictional sample period"
        />
        <Stat
          label="Billable hours"
          value="428 h"
          icon={Clock3}
          meta="Across 19 matters"
        />
        <Stat
          label="Firm expenses"
          value="₹4.6L"
          icon={FileBarChart2}
          meta="Draft allocation"
        />
        <Stat
          label="Draft payouts"
          value="₹11.0L"
          icon={WalletCards}
          meta="Pending review"
        />
      </div>
      <div className="grid gap-3 lg:grid-cols-[1.45fr_1fr]">
        <div className="rounded-xl border border-white/[.08] bg-[#121e31] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold">Billable hours</h4>
              <p className="mt-1 text-xs text-slate-400">
                Sample six-month trend
              </p>
            </div>
            <span className="flex items-center gap-1 text-xs text-[#68dbe9]">
              <ArrowUpRight size={14} /> Illustrative
            </span>
          </div>
          <Bars />
        </div>
        <div className="rounded-xl border border-white/[.08] bg-[#121e31] p-5">
          <h4 className="text-sm font-semibold">Partner allocation</h4>
          <p className="mt-1 text-xs text-slate-400">
            Draft distribution, subject to approval
          </p>
          <div className="mt-7 flex h-2 overflow-hidden rounded-full">
            {partners.map((p) => (
              <span
                key={p.name}
                style={{ width: p.share, background: p.color }}
              />
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2 text-slate-300">
                  <i
                    className="size-2 rounded-full"
                    style={{ background: p.color }}
                  />
                  {p.name}
                </span>
                <span className="font-medium">{p.share}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Allocation() {
  return (
    <div className="grid gap-3 lg:grid-cols-[1.25fr_.75fr]">
      <div className="rounded-xl border border-white/[.08] bg-[#121e31] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-semibold">Draft partner allocation</h4>
            <p className="mt-1 text-xs text-slate-400">
              Illustrative collected-revenue model
            </p>
          </div>
          <span className="rounded-md bg-amber-400/10 px-2 py-1 text-xs text-amber-200">
            Review needed
          </span>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[380px] text-left text-sm">
            <thead className="border-b border-white/10 text-xs text-slate-400">
              <tr>
                <th className="pb-3 font-medium">Partner</th>
                <th className="pb-3 font-medium">Share</th>
                <th className="pb-3 text-right font-medium">Draft amount</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((p) => (
                <tr key={p.name} className="border-b border-white/[.06]">
                  <td className="py-4">{p.name}</td>
                  <td className="py-4 text-slate-300">{p.share}</td>
                  <td className="py-4 text-right font-semibold">{p.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-xl border border-white/[.08] bg-[#121e31] p-5">
        <h4 className="font-semibold">Calculation context</h4>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Collected fees, approved remuneration, allocated expenses and
          profit-sharing entitlements can each affect the final distribution.
        </p>
        <div className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
          Billed hours alone do not determine distributable profit or actual
          payouts.
        </div>
      </div>
    </div>
  );
}

function Expenses() {
  const rows = [
    ["Office & operations", "₹2,10,000", "Shared overhead"],
    ["Matter expenses", "₹1,34,000", "Matter-linked"],
    ["Professional services", "₹1,16,000", "Shared overhead"],
  ];
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      <div className="lg:col-span-2 rounded-xl border border-white/[.08] bg-[#121e31] p-5">
        <h4 className="font-semibold">Expense summary</h4>
        <p className="mt-1 text-xs text-slate-400">
          Illustrative month-end entries
        </p>
        <div className="mt-5 space-y-3">
          {rows.map(([name, amount, type]) => (
            <div
              key={name}
              className="flex items-center justify-between gap-3 border-b border-white/[.06] pb-3 text-sm"
            >
              <span>
                <strong className="block font-medium">{name}</strong>
                <small className="text-slate-400">{type}</small>
              </span>
              <strong>{amount}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/[.08] bg-[#121e31] p-5">
        <h4 className="font-semibold">Collection snapshot</h4>
        <p className="mt-1 text-xs text-slate-400">Invoice and receipt view</p>
        <div className="mt-8 text-3xl font-semibold">₹18.4L</div>
        <p className="mt-1 text-sm text-slate-400">Collected revenue</p>
        <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-[#88e3ed]">
          <ArrowDownRight size={16} /> Reconciliation still required
        </div>
      </div>
    </div>
  );
}

function Approval() {
  const items = [
    ["A. Rao", "₹4,18,000", "Reviewed"],
    ["M. Shah", "₹3,74,000", "Awaiting review"],
    ["N. Mehta", "₹3,08,000", "Awaiting review"],
  ];
  return (
    <div className="grid gap-3 lg:grid-cols-[1.3fr_.7fr]">
      <div className="rounded-xl border border-white/[.08] bg-[#121e31] p-5">
        <h4 className="font-semibold">Payout review queue</h4>
        <p className="mt-1 text-xs text-slate-400">
          Illustrative approval workflow
        </p>
        <div className="mt-5 space-y-2">
          {items.map(([name, amount, status]) => (
            <div
              key={name}
              className="flex items-center justify-between gap-3 rounded-lg border border-white/[.07] bg-white/[.025] p-3 text-sm"
            >
              <span className="font-medium">{name}</span>
              <span className="font-semibold">{amount}</span>
              <span
                className={
                  status === "Reviewed" ? "text-[#75e0d0]" : "text-amber-200"
                }
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/[.08] bg-[#121e31] p-5">
        <div className="flex size-10 items-center justify-center rounded-lg bg-[#4f8cff]/15 text-[#91bbff]">
          <LockKeyhole size={20} />
        </div>
        <h4 className="mt-5 font-semibold">Controlled sign-off</h4>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          The proposed flow records inputs, adjustments and authorised approvals
          before statements are finalised.
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
          <Check size={14} className="text-[#75e0d0]" /> Example status only
        </div>
      </div>
    </div>
  );
}

export function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="panel overflow-hidden rounded-2xl p-3 shadow-[0_40px_110px_rgba(0,0,0,.5)] sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-2 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-[#4f8cff] text-[#061323]">
            <FileBarChart2 size={17} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight">
              Allocira{" "}
              <span className="font-normal text-slate-400">/ Finance</span>
            </p>
            <p className="text-[11px] text-slate-400">
              Fictional firm · Sample data
            </p>
          </div>
        </div>
        <ConceptTag />
      </div>
      {compact ? (
        <div className="pt-4">
          <Overview />
        </div>
      ) : (
        <Tabs defaultValue="overview" className="pt-4">
          <TabsList className="mb-4 w-full justify-start">
            <TabsTrigger value="overview">Financial Overview</TabsTrigger>
            <TabsTrigger value="allocation">Partner Allocation</TabsTrigger>
            <TabsTrigger value="expenses">Expenses & Collections</TabsTrigger>
            <TabsTrigger value="approval">Payout Approval</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Overview />
          </TabsContent>
          <TabsContent value="allocation">
            <Allocation />
          </TabsContent>
          <TabsContent value="expenses">
            <Expenses />
          </TabsContent>
          <TabsContent value="approval">
            <Approval />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
