import type { ButtonHTMLAttributes } from "react";
// Style
import "./Button.css";
// Components
import { Spinner } from "@biaslayar/components";
// Utils
import { cx } from "@biaslayar/lib";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonClassOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  className?: string;
};

export function buttonClass({
  variant = "primary",
  size = "md",
  block,
  className,
}: ButtonClassOptions = {}) {
  return cx("btn", variant, size !== "md" && size, block && "block", className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonClassOptions & {
    loading?: boolean;
  };

export function Button({
  variant,
  size,
  block,
  className,
  loading,
  disabled,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClass({ variant, size, block, className })}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <Spinner size="sm" />}
      {children}
    </button>
  );
}
