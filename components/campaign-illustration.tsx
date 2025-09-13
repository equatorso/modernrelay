export const CampaignIllustration = () => (
    <div aria-hidden>
        <div className="my-4 flex gap-2 text-sm">
            <span className="opacity-75">Loyalty program</span>
            <span className="text-muted-foreground">loyalty program</span>
        </div>
        <div className="@md:grid-cols-2 grid gap-2 text-xs">
            <div className="bg-illustration border-border-illustration flex gap-2 rounded-md border p-1.5">
                <div className="bg-primary w-1 rounded-full"></div>

                <div>
                    <div className="text-sm font-medium">Start Date</div>
                    <div className="text-muted-foreground line-clamp-1">Feb 6, 2024 at 00:00</div>
                </div>
            </div>
            <div className="bg-illustration border-border-illustration flex gap-2 rounded-md border p-1.5">
                <div className="bg-primary w-1 rounded-full"></div>

                <div>
                    <div className="text-sm font-medium">Start Date</div>
                    <div className="text-muted-foreground line-clamp-1">Feb 6, 2024 at 00:00</div>
                </div>
            </div>
        </div>
    </div>
)