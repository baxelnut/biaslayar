import type { ReactNode } from "react";
// Style
import "./Container.css";
// Utils
import { cx } from "@biaslayar/lib";

type ContainerProps = {
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
};

export function Container({
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <div className={cx("container", size !== "default" && size, className)}>
      {children}
    </div>
  );
}
