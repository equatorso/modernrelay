import { CurrencyIllustration } from "@/components/currency-illustration"
import { DocumentIllustation } from "@/components/document-illustration"
import { MapIllustration } from "@/components/map-illustration"
import { ChartIllustration } from "@/components/chart-illustration"

export default function Bento14() {
    return (
        <section className="bg-muted/50">
            <div className="@container py-24 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="@3xl:grid-cols-6 @3xl:*:p-12 grid border *:p-8">
                        <div className="@3xl:gap-12 @3xl:border-r @max-3xl:border-b @3xl:col-span-2 row-span-2 grid grid-rows-subgrid gap-8">
                            <div>
                                <h3 className="text-foreground text-xl font-semibold">Currency Conversion</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Real-time exchange rates for global transactions.</p>
                            </div>

                            <div className="space-y-6">
                                <CurrencyIllustration />
                                <span className="text-muted-foreground text-sm">+44 Currencies</span>
                            </div>
                        </div>
                        <div className="@3xl:gap-12 @3xl:col-span-4 row-span-2 grid grid-rows-subgrid gap-8">
                            <div>
                                <h3 className="text-foreground text-xl font-semibold">Global Analytics</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Visualize your business performance across different regions with interactive map-based reporting.</p>
                            </div>
                            <MapIllustration />
                        </div>
                        <div className="@3xl:gap-12 @3xl:border-r @3xl:col-span-4 row-span-2 grid grid-rows-subgrid gap-8 border-t">
                            <div>
                                <h3 className="text-foreground text-xl font-semibold">Performance Monitoring</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Track key metrics in real-time with customizable dashboards that highlight important trends and anomalies.</p>
                            </div>
                            <ChartIllustration />
                        </div>
                        <div className="@3xl:gap-12 @3xl:col-span-2 row-span-2 grid grid-rows-subgrid gap-8 border-t">
                            <div>
                                <h3 className="text-foreground text-xl font-semibold">Document Management</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Organize and access all your important files.</p>
                            </div>
                            <div className="relative flex flex-wrap gap-4">
                                <DocumentIllustation />
                                <DocumentIllustation />
                                <DocumentIllustation />
                                <DocumentIllustation />
                                <DocumentIllustation />
                                <DocumentIllustation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}