import { cn } from '@/lib/utils';

type ShadowBoxProps = {
  className?: string;
};

export default function ShadowBox({
  children,
  className,
}: React.PropsWithChildren<ShadowBoxProps>) {
  return (
    <div className={cn('rounded-lg p-4 bg-white shadow-[14px_14px_#d2effd]', className)}>
      {children}
    </div>
  );
}
