import { SlideFrame } from './slide-frame'
import { cn } from '@/lib/utils'
import { DecoratedPanel } from './decorated-panel'

type GridItem = {
  id: string
  content: React.ReactNode
  className?: string
  /** tailwind col-span-*, row-span-* etc */
  spanClassName?: string
  /** Add inner padding and default text styles */
  padded?: boolean
}

interface GridSlideProps {
  className?: string
  /** wrapper around grid within frame */
  contentClassName?: string
  /** grid template classes, e.g. "grid-cols-2 md:grid-cols-4" */
  gridClassName?: string
  /** classes on the outer decorated panel and the inner grid */
  panelClassName?: string
  panelOuterClassName?: string
  gridInnerClassName?: string
  showDecorators?: boolean
  border?: boolean
  items: GridItem[]
}

export function GridSlide({
  className,
  contentClassName,
  gridClassName = 'grid-cols-2',
  panelClassName,
  panelOuterClassName,
  showDecorators = true,
  border = true,
  gridInnerClassName,
  items,
}: GridSlideProps) {
  return (
    <SlideFrame className={className} contentClassName={cn('px-6 xl:px-0 max-w-5xl w-full', contentClassName)}>
      <div className="@container py-24">
        <DecoratedPanel
          border={border}
          showDecorators={showDecorators}
          outerClassName={cn(panelOuterClassName)}
          className={cn('border-foreground/10', panelClassName)}
        >
          <div className={cn('relative grid divide-x divide-y overflow-hidden', gridClassName, gridInnerClassName)}>
            {items.map((item) => (
              <div key={item.id} className={cn(item.spanClassName, item.className, item.padded ? 'p-8' : undefined)}>
                {item.content}
              </div>
            ))}
          </div>
        </DecoratedPanel>
      </div>
    </SlideFrame>
  )
}

// Helpful preset: two tall (left/right) and two small at bottom
export function twoTallTwoSmall({
  left,
  right,
  bottomLeft,
  bottomRight,
}: {
  left: GridItem
  right: GridItem
  bottomLeft: GridItem
  bottomRight: GridItem
}) {
  const items: GridItem[] = [
    { ...left, spanClassName: cn('col-span-2 md:col-span-1 row-span-2') },
    { ...right, spanClassName: cn('col-span-2 md:col-span-1 row-span-2') },
    { ...bottomLeft },
    { ...bottomRight },
  ]
  return items
}


