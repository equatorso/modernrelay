import { Gemini } from '@/components/logos'
import ClaudeAI from '@/components/logos/claude'
import OpenAI from '@/components/logos/open-ai'
import VSCode from '@/components/logos/vs-code'
import { Vercel } from '@/components/logos/vercel'
import { cn } from '@/lib/utils'
import IntelliJIDEA from '@/components/logos/intellij'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Cloudflare } from '@/components/logos/cloudflare'

export default function IntegrationsSection() {
    return (
        <section className="bg-background">
            <div className="bg-muted @container py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-5xl md:tracking-tight">Seamless Integration</h2>
                        <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Seamlessly integrate with over 200+ tools and platforms to streamline your workflow and boost productivity.</p>
                        <Button
                            variant="outline"
                            size="sm"
                            asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                    <div className="@max-xl:max-w-xs @xl:grid-cols-9 relative mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-4">
                        <div
                            aria-hidden
                            className="mask-radial-to-85% absolute inset-x-0 inset-y-4 m-auto bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] bg-[size:12px_12px] opacity-5"
                        />
                        <div
                            aria-hidden
                            className="mask-radial-to-85% translate-[0.5px] absolute inset-x-6 inset-y-4 m-auto bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] opacity-25 [background-size:24px_24px]"
                        />

                        <IntegrationsGroup
                            label="Development"
                            className="@max-xl:row-start-3">
                            <div className="grid grid-cols-2 gap-2">
                                <IntegrationCard className="">
                                    <IntelliJIDEA />
                                </IntegrationCard>

                                <IntegrationCard className="">
                                    <VSCode />
                                </IntegrationCard>
                            </div>
                        </IntegrationsGroup>

                        <div
                            aria-hidden
                            className="@max-xl:hidden"
                        />

                        <IntegrationsGroup
                            label="LLMs"
                            className="@max-xl:col-span-4 @max-xl:w-3/4 @max-xl:row-start-1 @max-xl:place-self-center col-span-3">
                            <div className="grid grid-cols-3 gap-2">
                                <IntegrationCard className="">
                                    <OpenAI />
                                </IntegrationCard>
                                <IntegrationCard className="">
                                    <ClaudeAI />
                                </IntegrationCard>
                                <IntegrationCard className="">
                                    <Gemini />
                                </IntegrationCard>
                            </div>
                        </IntegrationsGroup>

                        <div
                            aria-hidden
                            className="@max-xl:hidden"
                        />

                        <IntegrationsGroup label="Hosting">
                            <div className="grid grid-cols-2 gap-2">
                                <IntegrationCard className="">
                                    <Cloudflare className="!w-7" />
                                </IntegrationCard>
                                <IntegrationCard className="">
                                    <Vercel />
                                </IntegrationCard>
                            </div>
                        </IntegrationsGroup>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return <div className={cn('bg-background ring-foreground/10 flex aspect-square size-full rounded-lg border border-transparent shadow ring-1 *:m-auto *:size-5', className)}>{children}</div>
}

const IntegrationsGroup = ({ children, label, className }: { children?: React.ReactNode; label?: string; className?: string }) => {
    return (
        <div className={cn('ring-foreground/5 relative z-20 col-span-2 row-span-2 grid grid-rows-subgrid gap-1.5 self-center rounded-2xl border border-transparent bg-zinc-50 p-2 shadow ring-1', className)}>
            <span className="text-muted-foreground block self-center text-balance text-center text-sm">{label}</span>
            {children}
        </div>
    )
}