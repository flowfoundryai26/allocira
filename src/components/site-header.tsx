"use client";
import { Brand } from "./brand";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["The Problem", "#problem"],
  ["Features", "#features"],
  ["How It Works", "#how-it-works"],
  ["Who It's For", "#who-its-for"],
  ["FAQs", "#faqs"],
  ["Contact", "#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f19]/90 backdrop-blur-xl">
      <nav
        className="container-shell flex h-[72px] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        <a
          href="/#home"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Allocira home"
        >
          <Brand />
        </a>
        <div className="hidden items-center gap-4 xl:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              className="whitespace-nowrap text-[13px] font-medium text-slate-300 transition-colors hover:text-white"
              href={"/" + href}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="hidden shrink-0 xl:block">
          <Button asChild size="sm">
            <a href="/#waitlist">Join Early Access</a>
          </Button>
        </div>
        <button
          ref={toggle}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-lg border border-white/15 p-2 text-white xl:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          className="container-shell grid max-h-[calc(100dvh-72px)] overflow-y-auto gap-1 border-t border-white/10 py-4 xl:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              className="rounded-lg px-3 py-2.5 text-slate-200 hover:bg-white/[.06]"
              href={"/" + href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button asChild className="mt-2">
            <a href="/#waitlist" onClick={() => setOpen(false)}>
              Join Early Access
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
