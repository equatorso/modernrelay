import { Button } from '@/components/ui/button'
import { DocumentIllustation } from "@/components/document-illustration"
import { BadgeCheck, Equal, Plus, ShieldCheck, Signature } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function HowItWorksSection() {
    return (
        <section className="overflow-hidden">
            <div className="bg-linear-to-b to-muted relative m-4 overflow-hidden rounded-[2rem] via-pink-100 py-24 [--color-for-foreground:var(--color-pink-950)]">
                <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px]"></div>

                <div className="@container relative mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-foreground text-4xl font-semibold">Simple Three-Step Workflow</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Experience our streamlined approach to data analysis that empowers your team to make informed decisions quickly and efficiently.</p>
                    </div>

                    <div className="@3xl:grid-cols-3 my-20 grid gap-12">
                        <div className="space-y-6 text-center">
                            <div className="relative flex h-28 items-center">
                                <div className="bg-foreground/5 relative mx-auto size-fit p-2">
                                    <CardDecorator className="size-2 border-purple-500" />
                                    <DocumentIllustation />
                                </div>
                                <Plus
                                    strokeWidth={4}
                                    className="@3xl:block fill-background stroke-background absolute inset-y-0 right-0 my-auto hidden translate-x-[75%] drop-shadow"
                                />
                            </div>
                            <div>
                                <h3 className="text-foreground mb-4 text-lg font-semibold">Face Detection</h3>
                                <p className="text-muted-foreground text-balance">Effortlessly identify and manage users with our advanced face recognition system.</p>
                            </div>
                            <Plus
                                strokeWidth={4}
                                className="@3xl:hidden fill-background stroke-background mx-auto translate-y-[75%] drop-shadow"
                            />
                        </div>
                        <div className="space-y-6 text-center">
                            <div className="relative flex h-28 items-center">
                                <IDCheckIllustration />
                                <Equal
                                    strokeWidth={4}
                                    className="@3xl:block fill-background stroke-background absolute inset-y-0 right-0 my-auto hidden translate-x-[75%] drop-shadow"
                                />
                            </div>
                            <div>
                                <h3 className="text-foreground mb-4 text-lg font-semibold">Automated Analysis</h3>
                                <p className="text-muted-foreground text-balance">Our AI-powered system processes complex datasets to identify patterns and insights instantly.</p>
                            </div>
                            <Equal
                                strokeWidth={4}
                                className="@3xl:hidden fill-background stroke-background mx-auto translate-y-[75%] drop-shadow"
                            />
                        </div>
                        <div className="space-y-6 text-center">
                            <div className="relative flex h-28 items-center">
                                <div className="before:bg-background relative mx-auto my-6 w-fit before:absolute before:inset-x-2 before:-bottom-2 before:top-2 before:rounded-xl before:opacity-50 before:shadow">
                                    <div className="bg-linear-to-t to-background inset-ring-1 inset-ring-background relative flex gap-4 overflow-hidden rounded-xl border from-purple-50 p-4 pr-8 shadow-md">
                                        <div className="flex size-7 rounded-full bg-emerald-500/10">
                                            <BadgeCheck className="m-auto size-4 text-emerald-600" />
                                        </div>

                                        <div className="text-left">
                                            <div className="mb-3 text-sm">
                                                <div className="text-foreground font-medium">Signatures Approved</div>
                                                <div className="text-muted-foreground text-xs">Generate reports and insights</div>
                                            </div>

                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="h-7">
                                                View Report
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-foreground mb-4 text-lg font-semibold">Actionable Reports</h3>
                                <p className="text-muted-foreground text-balance">Transform insights into beautiful visualizations and shareable reports to drive decisions.</p>
                            </div>
                        </div>
                    </div>

                    <Button
                        asChild
                        variant="outline"
                        className="mx-auto flex w-fit">
                        <Link href="/sign-up">Get Started</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export const CardDecorator = ({ className }: { className?: string }) => (
    <>
        <span className={cn('absolute -left-px -top-px block size-2 rounded-tl border-l border-t border-white', className)}></span>
        <span className={cn('absolute -right-px -top-px block size-2 rounded-tr border-r border-t border-white', className)}></span>
        <span className={cn('absolute -bottom-px -left-px block size-2 rounded-bl border-b border-l border-white', className)}></span>
        <span className={cn('absolute -bottom-px -right-px block size-2 rounded-br border-b border-r border-white', className)}></span>
    </>
)

export const IDCheckIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('before:bg-background relative mx-auto my-6 w-fit before:absolute before:inset-x-2 before:-bottom-2 before:top-2 before:rounded-xl before:opacity-50 before:shadow', className)}>
            <div className="bg-background relative overflow-hidden rounded-xl border shadow-md">
                <div className="grid grid-cols-[1fr_auto] gap-6 p-3">
                    <div className="text-left text-sm">
                        <div className="text-foreground">Méschac Irung</div>
                        <div className="text-muted-foreground text-xs">CEO, Acme</div>
                    </div>
                    <div className="border p-2">
                        <Signature className="size-5" />
                    </div>
                </div>
                <div className="bg-linear-to-br flex items-center gap-1 from-yellow-400 to-orange-600 p-2 text-sm">
                    <ShieldCheck className="size-4 text-white drop-shadow-sm" />
                    <span className="text-white">Verified</span>
                </div>
            </div>
        </div>
    )
}