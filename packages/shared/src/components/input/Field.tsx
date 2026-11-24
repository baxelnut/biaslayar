import { useId } from "react";
import type { ReactNode } from "react";
import "./Field.css";

export type FieldControlProps = {
  id: string;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
};

type FieldProps = {
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: (control: FieldControlProps) => ReactNode;
};

export function FieldError({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <p className="field__error" id={id} role="alert">
      {children}
    </p>
  );
}

export function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: FieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const describedBy = error
    ? `${fieldId}-error`
    : hint
      ? `${fieldId}-hint`
      : undefined;

  return (
    <div className="field">
      <label className="field__label" htmlFor={fieldId}>
        {label}
        {required && (
          <span className="field__required" aria-hidden="true">
            {" *"}
          </span>
        )}
      </label>
      {children({
        id: fieldId,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })}
      {hint && !error && (
        <p className="field__hint" id={`${fieldId}-hint`}>
          {hint}
        </p>
      )}
      {error && <FieldError id={`${fieldId}-error`}>{error}</FieldError>}
    </div>
  );
}
