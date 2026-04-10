import * as React from 'react';
import { cn } from '@/lib/utils';

export type CheckboxFieldProps = {
  id: string;
  label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'>;

export function CheckboxField({
  id,
  label,
  className,
  ...rest
}: CheckboxFieldProps) {
  return (
    <div className="flex items-center space-x-3 px-1">
      <div className="relative flex items-center">
        <input
          id={id}
          type="checkbox"
          className={cn(
            'w-5 h-5 rounded bg-surface-container-highest border-outline-variant/30 text-primary focus:ring-primary focus:ring-offset-surface-dim transition-all cursor-pointer',
            className,
          )}
          {...rest}
        />
      </div>
      <label
        className="text-sm text-on-surface-variant select-none cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
