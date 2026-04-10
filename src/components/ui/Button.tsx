import * as React from 'react';
import { cn } from '@/lib/utils';

const variantClass: Record<'primary' | 'social' | 'socialSteam', string> = {
  primary:
    'w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-headline font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(189,157,255,0.4)] transition-all active:scale-[0.98] cursor-pointer',
  social:
    'flex items-center justify-center gap-3 bg-surface-container-highest hover:bg-surface-bright py-3 px-4 rounded-lg border border-outline-variant/5 transition-all group cursor-pointer',
  socialSteam:
    'flex items-center justify-center gap-3 bg-surface-container-highest hover:bg-[#1b2838] py-3 px-4 rounded-lg border border-outline-variant/5 transition-all group cursor-pointer',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantClass;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(variantClass[variant], className)}
      {...props}
    />
  ),
);
Button.displayName = 'Button';
