import { CalendarDays, Clock2, Zap } from 'lucide-react'
import CodeBlockIllustration from "@/components/code-block-illustration"

export default function FeaturesSection() {
    return (
        <section>
            <div className="bg-muted py-24 [--color-secondary:var(--color-indigo-200)]">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="relative p-4 md:p-12">
                        <div className="mask-x-from-95% absolute -inset-x-12 inset-y-0 border-y"></div>
                        <div className="mask-y-from-95% absolute -inset-y-12 inset-x-0 border-x"></div>
                        <CodeBlockIllustration />

                        <div className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-24">
                            <div
                                aria-hidden
                                className="mask-y-from-95% absolute -inset-y-24 inset-x-0 mx-auto w-[calc(33.333%+3rem)] border-x border-dashed max-md:hidden"
                            />
                            <div className="space-y-1.5">
                                <Clock2 className="fill-foreground/10 stroke-primary size-4" />
                                <h3 className="mt-3 font-medium">Speed Is Everything</h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
                            </div>
                            <div className="space-y-1.5">
                                <Zap className="fill-foreground/10 stroke-primary size-4" />
                                <h3 className="mt-3 font-medium">Speed Is Everything</h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
                            </div>
                            <div className="space-y-1.5">
                                <CalendarDays className="fill-foreground/10 stroke-primary size-4" />
                                <h3 className="mt-3 font-medium">Speed Is Everything</h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
                            </div>
                            <div className="space-y-1.5 md:hidden">
                                <CalendarDays className="fill-foreground/10 stroke-primary size-4" />
                                <h3 className="mt-3 font-medium">Speed Is Everything</h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm">Tailark is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}