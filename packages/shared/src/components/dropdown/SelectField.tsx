import type { SelectHTMLAttributes } from "react";
// Style
import "./SelectField.css";
// Components
import { Field } from "@biaslayar/components";
// Utils
import { cx } from "@biaslayar/lib";

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  hint?: string;
  error?: string;
  options: ReadonlyArray<string | { value: string; label: string }>;
  placeholder?: string;
};

export function SelectField({
  label,
  hint,
  error,
  id,
  required,
  className,
  options,
  placeholder,
  ...rest
}: SelectFieldProps) {
  const defaults =
    placeholder && rest.value === undefined && rest.defaultValue === undefined
      ? { defaultValue: "" }
      : {};

  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      {(control) => (
        <select
          className={cx("input", "select", className)}
          required={required}
          {...control}
          {...defaults}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => {
            const item =
              typeof option === "string"
                ? { value: option, label: option }
                : option;
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      )}
    </Field>
  );
}
