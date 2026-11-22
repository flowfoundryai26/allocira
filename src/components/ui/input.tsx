import * as React from "react";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-xl border border-white/15 bg-[#0b1424] px-4 text-base text-white outline-none placeholder:text-slate-400 focus:border-[#4f8cff] focus:ring-2 focus:ring-[#4f8cff]/30 disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
