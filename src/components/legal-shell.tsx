import Link from "next/link";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="container-shell max-w-[900px] py-20 sm:py-28">
        <Link href="/" className="text-sm font-medium text-[#a9c9ff] underline">
          Back to Allocira
        </Link>
        <h1 className="section-title mt-8">{title}</h1>
        <p className="mt-4 text-sm text-slate-400">Last updated: {updated}</p>
        <div className="mt-12 space-y-9 text-base leading-8 text-slate-300 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_a]:text-[#a9c9ff] [&_a]:underline">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
