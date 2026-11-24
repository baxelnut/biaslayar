import type { TextareaHTMLAttributes } from "react";
// Style
import "./TextAreaField.css";
// Components
import { Field } from "./Field";
// Utils
import { cx } from "@biaslayar/lib";

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function TextAreaField({
  label,
  hint,
  error,
  id,
  required,
  className,
  ...rest
}: TextAreaFieldProps) {
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      {(control) => (
        <textarea
          className={cx("input", "textarea", className)}
          required={required}
          {...control}
          {...rest}
        />
      )}
    </Field>
  );
}
