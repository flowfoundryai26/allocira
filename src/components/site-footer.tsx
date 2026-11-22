import Link from "next/link";
import { Brand } from "./brand";

const product = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Features", "/#features"],
  ["How It Works", "/#how-it-works"],
  ["Join Waitlist", "/#waitlist"],
];
const company = [
  ["About FlowFoundry", "https://flowfoundryai.in/"],
  ["Contact", "/#contact"],
  ["Company Website", "https://flowfoundryai.in/"],
];
const legal = [
  ["Privacy Notice", "/privacy"],
  ["Terms of Use", "/terms"],
  ["Disclaimer", "/#disclaimer"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080c15] pt-20">
      <div className="container-shell grid gap-12 pb-16 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Brand />
          </div>
          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
            Making partner financial workflows clearer.
          </p>
        </div>
        {[
          ["Product", product],
          ["Company", company],
          ["Legal", legal],
        ].map(([title, items]) => (
          <div key={title as string}>
            <h2 className="mb-5 text-sm font-semibold text-white">
              {title as string}
            </h2>
            <ul className="space-y-3">
              {(items as string[][]).map(([label, href]) => (
                <li key={label}>
                  <Link
                    className="text-sm text-slate-400 hover:text-white"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-xs leading-6 text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© 2026 FlowFoundry AI Solutions. All rights reserved.</span>
          <span id="disclaimer">
            Allocira is a proposed software product. It does not provide
            accounting, tax or legal advice.
          </span>
        </div>
      </div>
    </footer>
  );
}
