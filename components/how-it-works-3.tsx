import { Button } from '@/components/ui/button'
import { DocumentIllustation } from "@/components/document-illustration"
import { CurrencyIllustration } from "@/components/currency-illustration"
import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'

export default function HowItWorksSection() {
    return (
        <section className="overflow-hidden">
            <div className="bg-muted m-4 rounded-[2rem] py-24">
                <div className="@container relative mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-primary">Our Process</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Simple Three-Step Workflow</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Experience our streamlined approach to data analysis that empowers your team to make informed decisions quickly and efficiently.</p>
                    </div>

                    <div className="@3xl:grid-cols-3 my-20 grid gap-12">
                        <div className="space-y-6">
                            <div className="text-center">
                                <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-zinc-500/15 text-sm font-medium text-zinc-700">1</span>
                                <div className="relative">
                                    <div className="mx-auto my-6 w-fit">
                                        <DocumentIllustation />
                                    </div>
                                    <ArrowBigRight className="@3xl:block fill-background stroke-background absolute inset-y-0 right-0 my-auto hidden translate-x-[150%] drop-shadow" />
                                </div>
                                <h3 className="text-foreground mb-4 text-lg font-semibold">Data Collection</h3>
                                <p className="text-muted-foreground text-balance">Easily import data from multiple sources and formats with.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="text-center">
                                <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-zinc-500/15 text-sm font-medium text-zinc-700">2</span>
                                <div className="relative">
                                    <div className="mx-auto my-6 w-fit">
                                        <CurrencyIllustration />
                                    </div>
                                    <ArrowBigRight className="@3xl:block fill-background stroke-background absolute inset-y-0 right-0 my-auto hidden translate-x-[150%] drop-shadow" />
                                </div>
                                <h3 className="text-foreground mb-4 text-lg font-semibold">Automated Analysis</h3>
                                <p className="text-muted-foreground text-balance">Our AI-powered system processes complex datasets to identify patterns.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="text-center">
                                <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-zinc-500/15 text-sm font-medium text-zinc-700">3</span>
                                <div className="mx-auto my-6 flex w-fit gap-2">
                                    <DocumentIllustation />
                                    <DocumentIllustation />
                                </div>
                                <h3 className="text-foreground mb-4 text-lg font-semibold">Actionable Reports</h3>
                                <p className="text-muted-foreground text-balance">Transform insights into beautiful visualizations and shareable reports.</p>
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