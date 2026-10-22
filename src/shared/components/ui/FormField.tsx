import type { ReactNode } from 'react';
import { getErrorId } from './formFieldIds.ts';
import { LABEL_CLASSES } from './formStyles.ts';

type FormFieldProps = {
  label: string;
  fieldId: string;
  error?: string;
  children: ReactNode;
};

export default function FormField({
  label,
  fieldId,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className={LABEL_CLASSES}>
        {label}
      </label>
      {children}
      {error && (
        <p
          id={getErrorId(fieldId)}
          className="text-sm font-semibold text-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
}
