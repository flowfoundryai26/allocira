"use client";
import * as React from "react";
import * as Primitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion = Primitive.Root;
export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Item>) {
  return (
    <Primitive.Item
      className={cn("border-b border-white/10", className)}
      {...props}
    />
  );
}
export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header>
      <Primitive.Trigger
        className={cn(
          "group flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold text-white outline-none focus-visible:text-[#9bc0ff]",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className="size-5 shrink-0 text-[#72a4ff] transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content
      className="overflow-hidden text-slate-300 data-[state=closed]:animate-[collapse_.22s_ease-out] data-[state=open]:animate-[expand_.22s_ease-out]"
      {...props}
    >
      <div className={cn("pb-5 leading-7", className)}>{children}</div>
    </Primitive.Content>
  );
}
