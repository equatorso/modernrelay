import { cn } from '@/lib/utils'
import { PlusDecorator } from '@/components/ui/plus-decorator'

interface DecoratedPanelProps {
  children: React.ReactNode
  className?: string
  outerClassName?: string
  showDecorators?: boolean
  /**
   * Controls whether the outer panel shows a border. Defaults to true.
   */
  border?: boolean
}

export function DecoratedPanel({ children, className, outerClassName, showDecorators = true, border = true }: DecoratedPanelProps) {
  return (
    <div className={cn('relative', outerClassName)}>
      {showDecorators ? (
        <>
          <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
          <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
          <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
          <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
        </>
      ) : null}

      <div className={cn('border-foreground/10 relative overflow-hidden', border ? 'border' : undefined, className)}>
        {children}
      </div>
    </div>
  )
}


