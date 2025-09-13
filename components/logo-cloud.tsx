import { cn } from '@/lib/utils'

export default function LogoCloud() {
    const logos = [
        { src: 'https://html.tailus.io/blocks/customers/nvidia.svg', alt: 'Nvidia Logo', height: '16', className: 'h-4' },
        { src: 'https://html.tailus.io/blocks/customers/column.svg', alt: 'Column Logo', height: '16', className: 'h-4' },
        { src: 'https://html.tailus.io/blocks/customers/github.svg', alt: 'GitHub Logo', height: '16', className: 'h-4' },
        { src: 'https://html.tailus.io/blocks/customers/nike.svg', alt: 'Nike Logo', height: '20', className: 'h-5' },
        { src: 'https://html.tailus.io/blocks/customers/laravel.svg', alt: 'Laravel Logo', height: '16', className: 'h-4' },
        { src: 'https://html.tailus.io/blocks/customers/lilly.svg', alt: 'Lilly Logo', height: '28', className: 'h-7' },

        { src: 'https://html.tailus.io/blocks/customers/openai.svg', alt: 'OpenAI Logo', height: '24', className: 'h-6' },
        {
            src: 'https://html.tailus.io/blocks/customers/tailwindcss.svg',
            alt: 'Tailwind CSS Logo',
            height: '16',
            className: 'h-4',
        },
        { src: 'https://html.tailus.io/blocks/customers/vercel.svg', alt: 'Vercel Logo', height: '20', className: 'h-5' },
        { src: 'https://html.tailus.io/blocks/customers/zapier.svg', alt: 'Zapier Logo', height: '20', className: 'h-5' },
    ]
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

                    <div className="lg:*:nth-5:border-r-0 lg:*:nth-[n+6]:nth-[-n+9]:border-b-0 grid grid-cols-3 divide-x divide-y border md:grid-cols-4 lg:grid-cols-5">
                        {logos.map((logo) => (
                            <div
                                key={logo.alt}
                                className="hover:bg-foreground/5 flex items-center justify-center px-4 py-6 lg:py-7">
                                <img
                                    className={`${logo.className} w-fit`}
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