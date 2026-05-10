import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type StoreInfoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  helper?: string;
  className?: string;
};

export function StoreInfoCard({
  icon: Icon,
  label,
  value,
  helper,
  className,
}: StoreInfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[#FDFAE7]/82 p-5 text-[#43251D] shadow-sm",
        className,
      )}
    >
      <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#F6D97D]/70 text-[#43251D] shadow-sm">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#43251D]/55">
        {label}
      </p>
      <p className="mt-2 text-xl font-medium leading-snug tracking-[-0.03em]">
        {value}
      </p>
      {helper ? (
        <p className="mt-2 text-sm leading-6 text-[#43251D]/65">{helper}</p>
      ) : null}
    </div>
  );
}
