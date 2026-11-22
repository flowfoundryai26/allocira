"use client";
import * as Primitive from "@radix-ui/react-tabs";
import * as React from "react";
import { cn } from "@/lib/utils";
export const Tabs = Primitive.Root;
export function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.List>) {
  return (
    <Primitive.List
      className={cn(
        "flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-[#0e1727] p-1",
        className,
      )}
      {...props}
    />
  );
}
export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Trigger
      className={cn(
        "min-h-10 shrink-0 rounded-lg px-4 text-sm font-medium text-slate-300 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#4f8cff] data-[state=active]:bg-[#213756] data-[state=active]:text-white",
        className,
      )}
      {...props}
    />
  );
}
export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content className={cn("outline-none", className)} {...props} />
  );
}
