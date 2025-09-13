import { ChartBarStacked, MessageCircle, Vote } from 'lucide-react'
import { MessageIllustration } from "@/components/message-illustration"
import { PollIllustration } from "@/components/poll-illustration"
import { UptimeIllustration } from "@/components/uptime-illustration"

export default function FeaturesSectionNine() {
    return (
        <section>
            <div className="bg-muted/50 @container py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="@max-4xl:max-w-sm @max-4xl:mx-auto @4xl:grid-cols-3 grid gap-6 *:p-6">
                        <div className="bg-card ring-foreground/10 grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                            <div>
                                <MessageCircle className="fill-foreground/10 mb-5 size-4" />
                                <h3 className="text-foreground text-lg font-semibold">Real-time Messaging</h3>
                                <p className="text-muted-foreground mt-3">
                                    Connect instantly with <span className="text-foreground font-medium">end-to-end encryption</span>.
                                </p>
                            </div>
                            <div className="bg-linear-to-b relative -m-8 flex flex-col items-end justify-center from-transparent via-rose-50 to-amber-50 p-8">
                                <MessageIllustration />
                            </div>
                        </div>
                        <div className="bg-card ring-foreground/10 grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                            <div>
                                <ChartBarStacked className="fill-foreground/10 mb-5 size-4" />
                                <h3 className="text-foreground text-lg font-semibold">Performance Analytics</h3>
                                <p className="text-muted-foreground mt-3">
                                    Track metrics with <span className="text-foreground font-medium">customizable dashboards</span>.
                                </p>
                            </div>
                            <div className="bg-linear-to-b -m-8 flex flex-col items-end justify-center from-transparent via-purple-50 to-emerald-50 p-8">
                                <div className="mt-6 w-full">
                                    <UptimeIllustration />
                                </div>
                            </div>
                        </div>
                        <div className="bg-card ring-foreground/10 grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                            <div>
                                <Vote className="fill-foreground/10 mb-5 size-4" />
                                <h3 className="text-foreground text-lg font-semibold">Interactive Polling</h3>
                                <p className="text-muted-foreground mt-3">
                                    Gather feedback with <span className="text-foreground font-medium">real-time results</span>.
                                </p>
                            </div>
                            <div className="bg-linear-to-b -m-8 flex flex-col items-end justify-center from-transparent via-indigo-50 to-rose-50 p-8">
                                <div className="w-full px-2">
                                    <PollIllustration />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Stripes = () => (
    <div
        aria-hidden
        className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,black,black_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    />
)