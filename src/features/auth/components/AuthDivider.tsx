export function AuthDivider({ label }: { label: string }) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-outline-variant/15" />
      </div>
      <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
        <span className="bg-[#0b162d] px-4 text-on-surface-variant/60 font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}
