import { SlideFrame } from './slide-frame'
import { DecoratedPanel } from './decorated-panel'
import { GridSlide } from './grid-slide'

interface TextOnlySlideProps {
  eyebrow?: string
  title: React.ReactNode
  children?: React.ReactNode
  align?: 'start' | 'center'
  className?: string
}

export function TextOnlySlide({ eyebrow, title, children, align = 'start', className }: TextOnlySlideProps) {
  if (align === 'center') {
    return (
      <SlideFrame className={className}>
        <div className="@container py-24">
          <div className="mx-auto w-full max-w-3xl px-6 xl:px-0">
            <DecoratedPanel className="p-8">
              <div className="space-y-3 text-center">
                {eyebrow ? (
                  <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">{eyebrow}</h2>
                ) : null}
                <h3 className="text-2xl font-semibold text-zinc-900">{title}</h3>
                <div className="text-base text-stone-700">{children}</div>
              </div>
            </DecoratedPanel>
          </div>
        </div>
      </SlideFrame>
    )
  }

  return (
    <GridSlide
      className={className}
      gridClassName="grid-cols-2"
      gridInnerClassName="divide-foreground/10"
      items={[
        {
          id: 'text-heading',
          content: (
            <div className="space-y-2">
              {eyebrow ? (
                <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">{eyebrow}</h2>
              ) : null}
              <h3 className="text-2xl font-semibold text-zinc-900">{title}</h3>
            </div>
          ),
          padded: true,
        },
        {
          id: 'text-body',
          content: <div className="text-base text-stone-700">{children}</div>,
          padded: true,
        },
      ]}
    />
  )
}

