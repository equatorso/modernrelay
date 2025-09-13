import { cn } from '@/lib/utils'

interface SlideFrameProps {
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export function SlideFrame({ children, className, contentClassName }: SlideFrameProps) {
  return (
    <div className={cn('bg-background flex h-screen w-full flex-col items-center justify-center px-6', className)}>
      <div className={cn('mx-auto w-full max-w-5xl', contentClassName)}>{children}</div>
    </div>
  )
}


