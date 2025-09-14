import { cn } from '@/lib/utils'

export type LogoItem = {
    src: string
    alt: string
    height?: string
    className?: string
}

const DEFAULT_LOGOS: LogoItem[] = [
    { src: 'https://html.tailus.io/blocks/customers/nvidia.svg', alt: 'Nvidia Logo', height: '16', className: 'h-4' },
    { src: 'https://html.tailus.io/blocks/customers/column.svg', alt: 'Column Logo', height: '16', className: 'h-4' },
    { src: 'https://html.tailus.io/blocks/customers/github.svg', alt: 'GitHub Logo', height: '16', className: 'h-4' },
    { src: 'https://html.tailus.io/blocks/customers/nike.svg', alt: 'Nike Logo', height: '20', className: 'h-5' },
    { src: 'https://html.tailus.io/blocks/customers/laravel.svg', alt: 'Laravel Logo', height: '16', className: 'h-4' },
    { src: 'https://html.tailus.io/blocks/customers/lilly.svg', alt: 'Lilly Logo', height: '28', className: 'h-7' },
    { src: 'https://html.tailus.io/blocks/customers/openai.svg', alt: 'OpenAI Logo', height: '24', className: 'h-6' },
    { src: 'https://html.tailus.io/blocks/customers/tailwindcss.svg', alt: 'Tailwind CSS Logo', height: '16', className: 'h-4' },
    { src: 'https://html.tailus.io/blocks/customers/vercel.svg', alt: 'Vercel Logo', height: '20', className: 'h-5' },
    { src: 'https://html.tailus.io/blocks/customers/zapier.svg', alt: 'Zapier Logo', height: '20', className: 'h-5' },
]

export default function LogoCloud({ logos, bare = false, className }: { logos?: LogoItem[], bare?: boolean, className?: string }) {
    const items = logos ?? DEFAULT_LOGOS

    if (bare) {
        return (
            <div className={cn('grid grid-cols-3 divide-x divide-y border', className)}>
                {items.map((logo) => (
                    <div
                        key={logo.alt}
                        className="hover:bg-foreground/5 flex items-center justify-center px-4 py-6 lg:py-7">
                        <img
                            className={cn('w-fit', logo.className)}
                            src={logo.src}
                            alt={logo.alt}
                            height={logo.height}
                            width="auto"
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <section className={cn('bg-background py-16', className)}>
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

                    <div className="*:nth-3n:border-r-0 *:nth-last-of-type(-n+3):border-b-0 grid grid-cols-3 divide-x divide-y border">
                        {items.map((logo) => (
                            <div
                                key={logo.alt}
                                className="hover:bg-foreground/5 flex items-center justify-center px-4 py-6 lg:py-7">
                                <img
                                    className={cn('w-fit', logo.className)}
                                    src={logo.src}
                                    alt={logo.alt}
                                    height={logo.height}
                                    width="auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const PlusDecorator = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn('mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px', className)}
    />
)
