import { Rocket } from 'lucide-react';

export function LoginHero() {
  return (
    <div className="text-center mb-10">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-surface-container-highest mb-6 border border-outline-variant/20">
        <Rocket className="text-primary w-8 h-8" />
      </div>
      <h1 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-2">
        Welcome back
      </h1>
      <p className="text-on-surface-variant text-sm font-medium">
        Enter the Gravity and continue your session
      </p>
    </div>
  );
}
