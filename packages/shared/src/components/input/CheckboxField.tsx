import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
// Style
import "./CheckboxField.css";
// Components
import { FieldError } from "./Field";
// Utils
import { cx } from "@biaslayar/lib";

type CheckboxFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: ReactNode;
  error?: string;
};

export function CheckboxField({
  label,
  error,
  id,
  className,
  ...rest
}: CheckboxFieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;

  return (
    <div className="field">
      <div className="check">
        <input
          id={fieldId}
          type="checkbox"
          className={cx("check__input", className)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          {...rest}
        />
        <label className="check__label" htmlFor={fieldId}>
          {label}
        </label>
      </div>
      {error && <FieldError id={`${fieldId}-error`}>{error}</FieldError>}
    </div>
  );
}
