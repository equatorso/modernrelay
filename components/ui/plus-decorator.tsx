import { cn } from '@/lib/utils'

export function PlusDecorator({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px',
        className,
      )}
    />
  )
}


