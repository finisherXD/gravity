import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-surface-dim text-on-surface px-6 py-10',
        className,
      )}
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}
