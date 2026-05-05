import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  border?: boolean;
}

export function SectionContainer({ children, className, border }: SectionContainerProps) {
  return (
    <div className={cn('max-w-[1280px] mx-auto px-6 md:px-10',
    border && 'border-x-[1px] border-gray-200',
    className)}>
      {children}
    </div>
  );
}
