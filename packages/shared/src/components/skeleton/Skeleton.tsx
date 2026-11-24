import type { CSSProperties } from "react";
// Style
import "./Skeleton.css";
// Utils
import { cx } from "@biaslayar/lib";

type SkeletonProps = {
  width?: string;
  height?: string;
  className?: string;
};

export function Skeleton({
  width = "100%",
  height = "1rem",
  className,
}: SkeletonProps) {
  const style: CSSProperties = { width, height };
  return (
    <span
      className={cx("skeleton", className)}
      style={style}
      aria-hidden="true"
    />
  );
}
