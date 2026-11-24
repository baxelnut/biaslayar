import type { ReactNode } from "react";
// Style
import "./Alert.css";
// Utils
import { cx, type Tone } from "@biaslayar/lib";

type AlertProps = {
  tone?: Tone;
  title?: string;
  className?: string;
  children?: ReactNode;
};

export function Alert({
  tone = "info",
  title,
  className,
  children,
}: AlertProps) {
  return (
    <div
      className={cx("alert", `tone-${tone}`, className)}
      role={tone === "danger" ? "alert" : "status"}
    >
      {title && <p className="alert__title">{title}</p>}
      {children && <div className="alert__body">{children}</div>}
    </div>
  );
}
