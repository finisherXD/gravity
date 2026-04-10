import type { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="fixed top-12 right-12 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl -z-10" />
      <div className="fixed bottom-12 left-12 w-24 h-24 border-b-2 border-l-2 border-secondary/20 rounded-bl-3xl -z-10" />

      {children}
    </div>
  );
}
