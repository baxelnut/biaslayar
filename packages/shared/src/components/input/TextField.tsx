import type { InputHTMLAttributes } from "react";
// Style
import "./TextField.css";
// Components
import { Field } from "./Field";
// Utils
import { cx } from "@biaslayar/lib";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function TextField({
  label,
  hint,
  error,
  id,
  required,
  className,
  ...rest
}: TextFieldProps) {
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      {(control) => (
        <input
          className={cx("input", className)}
          required={required}
          {...control}
          {...rest}
        />
      )}
    </Field>
  );
}
