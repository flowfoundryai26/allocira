import * as React from "react";
import { cn } from "@/lib/utils";
export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full resize-y rounded-xl border border-white/15 bg-[#0b1424] px-4 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-[#4f8cff] focus:ring-2 focus:ring-[#4f8cff]/30 disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
