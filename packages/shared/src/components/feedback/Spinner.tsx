// Style
import "./Spinner.css";
// Utils
import { cx } from "@biaslayar/lib";

type SpinnerProps = {
  size?: "sm" | "md";
  label?: string;
  className?: string;
};

export function Spinner({
  size = "md",
  label = "Memuat...",
  className,
}: SpinnerProps) {
  return (
    <span
      className={cx("spinner", size === "sm" && "sm", className)}
      role="status"
      aria-label={label}
    />
  );
}
