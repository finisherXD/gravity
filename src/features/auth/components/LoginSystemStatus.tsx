import { CircleDot, ShieldCheck } from 'lucide-react';

export function LoginSystemStatus() {
  return (
    <div className="mt-8 flex justify-center items-center gap-6 opacity-40">
      <div className="flex items-center gap-2">
        <CircleDot className="w-2 h-2 text-secondary animate-pulse fill-secondary" />
        <span className="text-[10px] uppercase tracking-tighter font-medium">
          Global Nodes: Online
        </span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-3 h-3" />
        <span className="text-[10px] uppercase tracking-tighter font-medium">
          AES-256 Encrypted
        </span>
      </div>
    </div>
  );
}
