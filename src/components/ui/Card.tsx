import * as React from 'react';
import { cn } from '@/lib/utils';

export function Card({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'glass-card glow-soft rounded-xl p-8 md:p-10 border border-outline-variant/10',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
