export const SequenceIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative w-full select-none flex justify-center items-center">
            <div className="relative w-fit space-y-2 py-4">
                <div className="absolute inset-y-0 left-0 w-px bg-[length:1px_4px] bg-repeat-y opacity-30 [background-image:linear-gradient(180deg,var(--color-foreground)_1px,transparent_1px)]"></div>

                <div className="border-border-illustration bg-illustration relative -mx-5 flex flex-col gap-2 rounded-lg px-3 py-1 text-xs shadow-sm ring-1 ring-stone-200">
                    <div className="before:border-primary before:bg-background before:ring-background relative ml-7 mt-0.5 inline-flex items-center gap-2 text-xs font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="text-muted-foreground text-[10px] font-mono rounded bg-foreground/5 px-1.5 py-0.5">Wk 1–2</div>
                        <span>Foundation: Team Onboarding & Core Models</span>
                    </div>
                </div>
                <ul className="ml-7 mt-2 list-disc space-y-1 text-[11px] text-foreground/90">
                    <li>Onboard team to the Lab OS</li>
                    <li>Define Proteins, Assays, Compounds</li>
                    <li>Deploy initial protocol agents</li>
                </ul>

                <div className="border-border-illustration bg-illustration relative -mx-5 flex flex-col gap-2 rounded-lg px-3 py-1 text-xs shadow-sm ring-1 ring-stone-200">
                    <div className="before:border-primary before:bg-background before:ring-background relative ml-7 mt-0.5 inline-flex items-center gap-2 font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="text-muted-foreground text-[10px] font-mono rounded bg-foreground/5 px-1.5 py-0.5">Mo 1–3</div>
                        <span>Acceleration: Workflows & Integrations</span>
                    </div>
                </div>
                <ul className="ml-7 mt-2 list-disc space-y-1 text-[11px] text-foreground/90">
                    <li>Implement event-driven workflows (IC50, QC)</li>
                    <li>Integrate knowledge hubs & internal systems</li>
                    <li>Scale Human–AI collaboration across projects</li>
                </ul>

                <div className="border-border-illustration bg-illustration relative -mx-5 flex flex-col gap-2 rounded-lg px-3 py-1 text-xs shadow-sm ring-1 ring-stone-200">
                    <div className="before:border-primary before:bg-background before:ring-background relative ml-7 mt-0.5 inline-flex items-center gap-2  font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="text-muted-foreground text-[10px] font-mono rounded bg-foreground/5 px-1.5 py-0.5">Ongoing</div>
                        <span>Partnership: Evolve With Your Science</span>
                    </div>
                </div>
                <ul className="ml-7 mt-2 list-disc space-y-1 text-[11px] text-foreground/90">
                    <li>Adapt models and workflows as assays evolve</li>
                    <li>Maintain audit-ready, queryable data</li>
                    <li>Expand modules and instrument integrations</li>
                </ul>
            </div>
        </div>
    )
}
