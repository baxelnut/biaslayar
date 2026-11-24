import type { ReactNode } from "react";
// Style
import "./Badge.css";
// Utils
import { cx, type Tone } from "@biaslayar/lib";

type BadgeProps = {
  tone?: Tone;
  outline?: boolean;
  className?: string;
  children: ReactNode;
};

export function Badge({
  tone = "neutral",
  outline,
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cx("badge", `tone-${tone}`, outline && "outline", className)}
    >
      {children}
    </span>
  );
}
