import { cn } from "@/lib/utils";
import { ContainerProps } from "@/types/global-props";

export default function PageContainer({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-7xl mx-auto px-6 2xl:px-0', className)}>{children}</div>
  )
}

