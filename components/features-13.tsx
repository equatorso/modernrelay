import { IntegrationsIllustration } from "@/components/integrations-illustration"
import { InvoiceIllustration } from "@/components/invoice-illustration"
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { VisualizationIllustration } from "@/components/visualization-illustration"
import { MapIllustration } from "@/components/map-illustration"

export default function FeaturesSection() {
    return (
        <section className="bg-background">
            <div className="@container bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="relative">
                        <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                        <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                        <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                        <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

                        <div className="*:nth-3:border-r @max-3xl:*:nth-[1n+1]:nth-[-n+6]:border-b @3xl:*:nth-6:border-r @3xl:*:nth-[1n+3]:nth-[-n+4]:border-r @3xl:*:nth-[1n+1]:nth-[-n+5]:border-b border-foreground/10 divide-foreground/10 @3xl:grid-cols-4 @3xl:*:first:border-r relative grid grid-cols-2 overflow-hidden border *:p-8">
                            <div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
                                <div className="max-w-84 mx-auto w-full self-center">
                                    <InvoiceIllustration />
                                </div>
                                <div className="mx-auto max-w-sm text-center">
                                    <h3 className="text-balance font-semibold">Intuitive Dashboard Experience</h3>
                                    <p className="text-muted-foreground mt-3">Simplify complex data with our user-friendly interface designed for quick insights.</p>
                                </div>
                            </div>

                            <div className="relative col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
                                <PlusDecorator className="bottom-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />

                                <div className="@4xl:px-8 mx-auto max-w-sm self-center">
                                    <IntegrationsIllustration />
                                </div>
                                <div className="relative z-10 mx-auto max-w-sm text-center">
                                    <h3 className="text-balance font-semibold">Seamless Integration Ecosystem</h3>
                                    <p className="text-muted-foreground mt-3">Connect with your favorite tools through our extensive API network, eliminating data silos.</p>
                                </div>
                            </div>

                            <div className="@max-2xl:p-4 hover:bg-card flex flex-col items-center justify-center space-y-0.5 space-y-1 text-center md:text-center">
                                <div className="text-foreground text-4xl font-bold">99%</div>
                                <p className="text-muted-foreground">Uptime Guarantee</p>
                            </div>

                            <div className="@max-2xl:p-4 hover:bg-card flex flex-col items-center justify-center space-y-0.5 space-y-1 text-center md:text-center">
                                <div className="text-foreground text-4xl font-bold">73%</div>
                                <p className="text-muted-foreground">Time Savings</p>
                            </div>

                            <div className="@max-2xl:p-4 @max-2xl:col-span-full hover:bg-card relative col-span-2">
                                <PlusDecorator className="bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />

                                <blockquote className="before:bg-primary relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                                    <p className="text-foreground">This platform transformed how we handle client projects. The automation features alone saved us countless hours of manual work every week.</p>

                                    <footer className="mt-4 flex items-center gap-2">
                                        <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                            <AvatarImage
                                                src="https://avatars.githubusercontent.com/u/68236786?v=4"
                                                alt="Théo Balick"
                                            />
                                            <AvatarFallback>TB</AvatarFallback>
                                        </Avatar>

                                        <cite>Théo Balick</cite>

                                        <span
                                            aria-hidden
                                            className="bg-foreground/15 size-1 rounded-full"></span>
                                        <span className="text-muted-foreground">CTO, TechSolutions</span>
                                    </footer>
                                </blockquote>
                            </div>

                            <div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
                                <div className="mask-radial-from-35% relative -mx-8 self-center [--color-background:transparent]">
                                    <MapIllustration />
                                </div>

                                <div className="mx-auto max-w-sm text-center">
                                    <h3 className="text-balance font-semibold">Global Data Visualization</h3>
                                    <p className="text-muted-foreground mt-3 text-balance">Track worldwide metrics with interactive maps and region-specific analytics.</p>
                                </div>
                            </div>

                            <div className="relative col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
                                <div className="@4xl:px-8 mx-auto w-full max-w-md self-center">
                                    <VisualizationIllustration />
                                </div>

                                <div className="relative z-10 mx-auto max-w-sm text-center">
                                    <h3 className="text-balance font-semibold">Advanced Analytics Engine</h3>
                                    <p className="text-muted-foreground mt-3 text-balance">Harness the power of predictive modeling and trend analysis to make data-driven decisions.</p>
                                </div>
                            </div>
                        </div>
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