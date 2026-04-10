import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextFieldProps = {
  id: string;
  label: string;
  /** Renders beside the label (e.g. “Forgot password?”). */
  labelAction?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightSlot?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  id,
  label,
  labelAction,
  leftIcon,
  rightSlot,
  className,
  ...inputProps
}: TextFieldProps) {
  return (
    <div className="space-y-2">
      {labelAction ? (
        <div className="flex justify-between items-center px-1">
          <label
            className="block text-xs font-medium uppercase tracking-widest text-on-surface-variant"
            htmlFor={id}
          >
            {label}
          </label>
          {labelAction}
        </div>
      ) : (
        <label
          className="block text-xs font-medium uppercase tracking-widest text-on-surface-variant ml-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative group">
        {leftIcon ? (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        ) : null}
        <input
          id={id}
          className={cn(
            'w-full bg-surface-container-highest border-0 rounded-lg py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-secondary/50 transition-all outline-none',
            leftIcon ? 'pl-12 pr-4' : 'px-4',
            rightSlot ? 'pr-12' : null,
            className,
          )}
          {...inputProps}
        />
        {rightSlot ? (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            {rightSlot}
          </div>
        ) : null}
      </div>
    </div>
  );
}
