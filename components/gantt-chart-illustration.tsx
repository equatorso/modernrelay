import { Logo } from '@/components/logo'
import { GanttChart } from "@/components/gantt-chart"

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const SHADCN_AVATAR = 'https://avatars.githubusercontent.com/u/124599?v=4'

export const GanttChartIllustration = () => (
    <div
        aria-hidden
        className="ring-border-illustration bg-illustration overflow-hidden rounded-2xl border border-t border-transparent shadow-md shadow-black/10 ring-1">
        <div className="space-y-4 px-4 pt-4">
            <div className="flex gap-1.5">
                <div className="bg-foreground/5 border-foreground/5 size-2 rounded-full border"></div>
                <div className="bg-foreground/5 border-foreground/5 size-2 rounded-full border"></div>
                <div className="bg-foreground/5 border-foreground/5 size-2 rounded-full border"></div>
            </div>

            <div className="flex justify-between">
                <div>
                    <Logo className="mb-3 h-4" />
                    <div className="*:hover:text-foreground relative z-50 flex translate-y-px gap-4 *:cursor-pointer *:text-nowrap *:pb-3 *:text-sm *:font-medium">
                        <div className="text-muted-foreground">Timeline</div>
                        <div className="text-muted-foreground">Sidebar</div>
                        <div className="border-foreground text-foreground border-b">Gantt Chart</div>
                        <div className="text-muted-foreground">Board</div>
                        <div className="text-muted-foreground">Workflow</div>
                    </div>
                </div>
                <div className="flex -space-x-2">
                    {[
                        { src: MESCHAC_AVATAR, alt: 'Méschac Irung' },
                        { src: BERNARD_AVATAR, alt: 'Bernard Ngandu' },
                        { src: THEO_AVATAR, alt: 'Theo' },
                        { src: SHADCN_AVATAR, alt: 'Shadcn' },
                    ].map((avatar, index) => (
                        <div
                            key={index}
                            className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
                            <img
                                src={avatar.src}
                                className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                                alt={avatar.alt}
                                width="460"
                                height="460"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl before:pointer-events-none before:absolute before:inset-0 before:z-40 before:rounded-2xl before:border">
            <GanttChart />
        </div>
    </div>
)