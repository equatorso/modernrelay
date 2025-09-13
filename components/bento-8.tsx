import { Card } from '@/components/ui/card'
import { ChartIllustration } from "@/components/chart-illustration"
import { KitIllustration } from "@/components/kit-illustration"
import { CampaignIllustration } from "@/components/campaign-illustration"
import { PollIllustration } from "@/components/poll-illustration"
import { FingerPrintIcon } from "@/components/finger-print-illustration"
import { MessageIllustration } from "@/components/message-illustration"

export default function BentoEight() {
    return (
        <section
            data-theme="dark"
            className="bg-background @container">
            <div className="py-24 [--color-primary:var(--color-emerald-300)]">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="@xl:grid-cols-2 @4xl:grid-rows-2 @4xl:grid-cols-3 grid gap-4">
                        <div className="row-span-2 grid grid-rows-[auto_1fr] gap-4">
                            <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                                <div>
                                    <h3 className="text-foreground font-semibold">Smart Home Automation</h3>
                                    <p className="text-muted-foreground mt-2">
                                        Control your entire home with <span className="text-foreground font-medium">intelligent ecosystem</span>.
                                    </p>
                                </div>
                                <KitIllustration />
                            </Card>
                            <Card className="group grid grid-cols-[auto_1fr] gap-4 gap-6 overflow-hidden rounded-2xl p-8">
                                <FingerPrintIcon />
                                <div>
                                    <h3 className="text-foreground font-semibold">Biometric Access</h3>
                                    <p className="text-muted-foreground mt-2">Secure entry with fingerprint recognition</p>
                                </div>
                            </Card>
                        </div>
                        <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div
                                aria-hidden
                                className="flex flex-col justify-end">
                                <h3 className="text-foreground font-semibold">Marketing Campaigns</h3>
                                <p className="text-muted-foreground mt-2">
                                    Launch targeted promotions <span className="text-foreground font-medium">across channels</span>.
                                </p>
                            </div>
                            <div
                                aria-hidden
                                className="flex flex-col justify-end">
                                <CampaignIllustration />
                            </div>
                        </Card>
                        <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Team Messaging</h3>
                                <p className="text-muted-foreground mt-2">Real-time communication for seamless collaboration.</p>
                            </div>
                            <div
                                aria-hidden
                                className="flex flex-col justify-end">
                                <MessageIllustration />
                            </div>
                        </Card>
                        <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Data Visualization</h3>
                                <p className="text-muted-foreground mt-2">Transform complex data into clear, actionable insights.</p>
                            </div>
                            <div
                                aria-hidden
                                className="flex flex-col justify-end">
                                <ChartIllustration />
                            </div>
                        </Card>
                        <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Customer Feedback</h3>
                                <p className="text-muted-foreground mt-2">Collect and analyze user opinions to improve products.</p>
                            </div>
                            <div
                                aria-hidden
                                className="flex flex-col justify-end">
                                <PollIllustration />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}