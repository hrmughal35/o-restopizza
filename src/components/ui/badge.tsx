import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "dark" | "outline";
}

export function Badge({
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-secondary text-dark",
        variant === "dark" && "bg-dark text-white",
        variant === "outline" && "border-2 border-primary text-primary bg-transparent",
        className
      )}
      {...props}
    />
  );
}
