import type { ReactNode } from "react";
// Style
import "./Kicker.css";
// Utils
import { cx } from "@biaslayar/lib";

type KickerProps = {
  className?: string;
  children: ReactNode;
};

export function Kicker({ className, children }: KickerProps) {
  return (
    <p className={cx("kicker", className)}>
      <span className="kicker__slashes" aria-hidden="true">
        {"// "}
      </span>
      {children}
    </p>
  );
}
