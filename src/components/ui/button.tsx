import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72a4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19] disabled:pointer-events-none disabled:opacity-50 active:scale-[.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#376dd8] px-5 py-3 text-white shadow-[0_8px_32px_rgba(79,140,255,.28)] hover:bg-[#4076dd]",
        outline:
          "border border-white/20 bg-white/[.035] px-5 py-3 text-white hover:border-white/40 hover:bg-white/[.08]",
        ghost: "px-3 py-2 text-slate-200 hover:bg-white/[.07] hover:text-white",
      },
      size: {
        default: "min-h-11",
        sm: "min-h-9",
        lg: "min-h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
