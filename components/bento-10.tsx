import { ChartIllustration } from "@/components/chart-illustration"
import { FingerPrintIcon } from "@/components/finger-print-illustration"
import { MessageIllustration } from "@/components/message-illustration"
import { MemoryUsageIllustration } from "@/components/memory-usage-illustration"
import { UptimeIllustration } from "@/components/uptime-illustration"
import { KitIllustration } from "@/components/kit-illustration"
import { CampaignIllustration } from "@/components/campaign-illustration"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export default function BentoTen() {
    return (
        <section
            data-theme="dark"
            className="bg-background @container">
            <div className="py-24 [--color-primary:var(--color-emerald-300)]">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="relative">
                        <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                        <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                        <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                        <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                        <div className="@2xl:grid-cols-2 @4xl:grid-rows-[auto_1fr_auto] @4xl:grid-cols-3 *:hover:bg-muted/25 @2xl:divide-x @4xl:*:[:nth-child(6)]:border-b-0 @4xl:*:[:nth-child(4)]:border-b-0 @2xl:*:[:nth-child(5)]:border-r-0 @4xl:*:[:nth-child(2)]:border-r @4xl:*:[:nth-child(4)]:border-r @2xl:*:[:nth-child(4)]:border-r-0 @2xl:*:[:nth-child(2)]:border-r-0 @4xl:*:[:nth-child(3)]:border-r-0 grid divide-y overflow-hidden border [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] [--color-card:color-mix(in_oklab,var(--color-muted)15%,var(--color-background))] *:grid *:grid-rows-[1fr_auto] *:p-8">
                            <div className="space-y-8">
                                <div
                                    aria-hidden
                                    className="flex flex-col justify-center">
                                    <MessageIllustration />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold">Secure Messaging</h3>
                                    <p className="text-muted-foreground mt-2">End-to-end encrypted communications for enterprise.</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div aria-hidden>
                                    <ChartIllustration />
                                </div>

                                <div>
                                    <h3 className="text-foreground font-semibold">Analytics Dashboard</h3>
                                    <p className="text-muted-foreground mt-2">Data visualization tools to transform complex metrics into insights.</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div aria-hidden>
                                    <MemoryUsageIllustration />
                                </div>

                                <div>
                                    <h3 className="text-foreground font-semibold">Resource Monitoring</h3>
                                    <p className="text-muted-foreground mt-2">Real-time tracking of system performance to optimize efficiency.</p>
                                </div>
                            </div>
                            <div className="@4xl:row-span-2">
                                <div
                                    aria-hidden
                                    className="flex flex-col justify-center">
                                    <KitIllustration />
                                </div>

                                <div>
                                    <h3 className="text-foreground font-semibold">Service Reliability</h3>
                                    <p className="text-muted-foreground mt-2">Enterprise infrastructure ensuring operations with minimal downtime.</p>
                                </div>
                            </div>
                            <div className="@2xl:col-span-2 @2xl:grid-cols-2 @2xl:!pb-0 relative grid gap-8">
                                <PlusDecorator className="@4xl:block -translate-[calc(50%+0.5px)] hidden" />
                                <div
                                    aria-hidden
                                    className="@2xl:pr-4">
                                    <CampaignIllustration />
                                </div>

                                <div className="@2xl:pl-4 flex flex-col justify-between gap-8">
                                    <div>
                                        <h3 className="text-foreground font-semibold">Communication Hub</h3>
                                        <p className="text-muted-foreground mt-2">Centralized platform for team collaboration across channels.</p>
                                    </div>
                                    <blockquote className="before:bg-primary relative max-w-xl pl-4 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:rounded-full">
                                        <p className="text-muted-foreground text-base">Great work on the components and registry. Big fan.</p>
                                        <footer className="mt-4 flex items-center gap-2">
                                            <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                                <AvatarImage
                                                    src="/avatars/shadcn.jpg"
                                                    alt="Shadcn"
                                                />
                                                <AvatarFallback>S</AvatarFallback>
                                            </Avatar>
                                            <cite>Shadcn</cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div aria-hidden>
                                    <FingerPrintIcon />
                                </div>

                                <div>
                                    <h3 className="text-foreground font-semibold">Identity Verification</h3>
                                    <p className="text-muted-foreground mt-2">Multi-factor authentication with biometrics for maximum security.</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div
                                    aria-hidden
                                    className="flex flex-col justify-center">
                                    <UptimeIllustration />
                                </div>

                                <div>
                                    <h3 className="text-foreground font-semibold">Uptime Monitoring</h3>
                                    <p className="text-muted-foreground mt-2">Continuous service monitoring with alerts and recovery procedures.</p>
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