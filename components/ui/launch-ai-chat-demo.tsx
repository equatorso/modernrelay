"use client";
import {
	ArrowUp,
	CheckCircle,
	ExternalLink,
	FileText,
	Globe,
	Plus,
	Sparkle,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { cn } from "@/lib/utils";

type LaunchAiChatDemoProps = {
	className?: string;
	bare?: boolean;
	showUserMessage?: boolean;
	showPrompt?: boolean;
	scroll?: boolean;
	repeat?: boolean;
};

export default function LaunchAiChatDemo({
	className,
	bare = false,
	showUserMessage = true,
	showPrompt = true,
	scroll = true,
	repeat = false,
}: LaunchAiChatDemoProps) {
	const [visibleSteps, setVisibleSteps] = useState(0);
	const timeouts = useRef<number[]>([]);
	const messagesRef = useRef<HTMLDivElement | null>(null);
	const [actionIndex, setActionIndex] = useState(0);
	const spinTimeoutRef = useRef<number | null>(null);

	const actions = useMemo(
		() => [
			"Gathering HTA decisions (EU5)…",
			"Parsing payer criteria…",
			"Drafting objection responses…",
		],
		[],
	);

	const objectionData = useMemo(
		() => [
			{ category: "Comparator", count: 7 },
			{ category: "Population", count: 5 },
			{ category: "Endpoints", count: 6 },
			{ category: "Budget Impact", count: 4 },
			{ category: "Uncertainty", count: 3 },
		],
		[],
	);

	useEffect(() => {
		const schedule = (fn: () => void, delay: number) => {
			const id = window.setTimeout(fn, delay);
			timeouts.current.push(id);
		};

		const play = () => {
			setVisibleSteps(0);
			schedule(() => setVisibleSteps(1), 300);
			schedule(() => setVisibleSteps(2), 1800);
			schedule(() => setVisibleSteps(3), 5600);
			schedule(() => setVisibleSteps(4), 8800);
			if (repeat) schedule(() => play(), 21000);
		};

		play();
		return () => {
			timeouts.current.forEach((id) => window.clearTimeout(id));
			timeouts.current = [];
		};
	}, [repeat]);

	// Auto-scroll to bottom when new steps appear
	useEffect(() => {
		const container = messagesRef.current;
		if (!container) return;
		void visibleSteps;
		const id = window.requestAnimationFrame(() => {
			container.scrollTop = container.scrollHeight;
		});
		return () => window.cancelAnimationFrame(id);
	}, [visibleSteps]);

	// Cycle shimmer actions during typing stage
	useEffect(() => {
		if (visibleSteps !== 2) {
			if (spinTimeoutRef.current) {
				window.clearTimeout(spinTimeoutRef.current);
				spinTimeoutRef.current = null;
			}
			return;
		}
		setActionIndex(0);
		let tick = 0;
		const totalTicks = 7;
		const minDelayMs = 260;
		const maxDelayMs = 1050;
		const spin = () => {
			setActionIndex((prev) => (prev + 1) % actions.length);
			tick += 1;
			if (tick >= totalTicks) {
				setActionIndex(actions.length - 1);
				spinTimeoutRef.current = null;
				return;
			}
			const t = tick / totalTicks;
			const easeOutQuad = 1 - (1 - t) ** 2;
			const delay = Math.round(
				minDelayMs + (maxDelayMs - minDelayMs) * easeOutQuad,
			);
			spinTimeoutRef.current = window.setTimeout(spin, delay);
		};
		spin();
		return () => {
			if (spinTimeoutRef.current) {
				window.clearTimeout(spinTimeoutRef.current);
				spinTimeoutRef.current = null;
			}
		};
	}, [visibleSteps, actions.length]);

	// Auto-scroll on action change
	useEffect(() => {
		if (visibleSteps !== 2) return;
		const container = messagesRef.current;
		if (!container) return;
		void actionIndex;
		const id = window.requestAnimationFrame(() => {
			container.scrollTop = container.scrollHeight;
		});
		return () => window.cancelAnimationFrame(id);
	}, [actionIndex, visibleSteps]);

	return (
		<div
			className={cn(
				bare
					? "relative h-full flex flex-col px-4 py-2"
					: "relative rounded-2xl border bg-white/70 p-4 shadow-sm ring-1 ring-foreground/10 h-full flex flex-col",
				className,
			)}
		>
			{!bare && (
				<>
					<div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] opacity-5 [background-size:12px_12px]" />
					<div className="text-center">
						<div className="mx-auto inline-flex items-center gap-2">
							<div className="border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 relative flex size-5 items-center justify-center rounded-full border from-purple-300 to-indigo-600 shadow-md shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50">
								<div className="absolute inset-1 aspect-square rounded-full border border-white/35 bg-black/15"></div>
								<div className="absolute inset-px aspect-square rounded-full border border-dashed border-white/25"></div>
								<Sparkle className="size-3 fill-white stroke-white drop-shadow-sm" />
							</div>
							<span className="text-[13px] font-medium text-foreground">
								Launch AI
							</span>
						</div>
						<p className="text-foreground/70 mx-auto mt-1 max-w-64 text-[12px] leading-tight">
							Assistant for payer strategy and dossiers
						</p>
						<div className="border-background mx-auto mt-2 h-0.5 w-16 border-b" />
					</div>
				</>
			)}

			<div
				ref={messagesRef}
				className={cn(
					"space-y-3 px-3",
					!bare && "mt-4",
					scroll && "flex-1 min-h-0 overflow-y-auto pb-3 pt-2",
				)}
			>
				{/* User message */}
				{showUserMessage && visibleSteps >= 1 && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35 }}
						className="max-w-[80%] ml-auto"
					>
						<div className="border-foreground/5 bg-foreground/5 rounded-l-2xl rounded-t-2xl rounded-br border p-3 text-[13px]">
							Summarize EU5 payer objections for Indication X, draft objection
							responses with citations from FDA/EMA labels and recent HTA
							decisions, then prepare AMCP dossier variants and a merge into the
							Brand Plan.
						</div>
						<span className="text-muted-foreground block pr-1 pt-1 text-right text-[10px]">
							Now
						</span>
					</motion.div>
				)}

				{/* Typing indicator with shimmering actions */}
				{visibleSteps >= 2 && visibleSteps < 3 && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35 }}
						className="max-w-[82%]"
					>
						<div className="p-1" style={{ perspective: "800px" }}>
							<div className="text-[12px] text-foreground/60">Working…</div>
							<div className="relative mt-1 h-5 overflow-hidden">
								<motion.div
									key={actionIndex}
									initial={{ opacity: 0, rotateX: -90, y: 6 }}
									animate={{ opacity: 1, rotateX: 0, y: 0 }}
									transition={{ duration: 0.5 }}
									className="absolute inset-0"
									style={{ transformOrigin: "bottom" }}
								>
									<TextShimmer
										as="div"
										className="text-[13px] font-medium"
										duration={0.5}
									>
										{actions[actionIndex]}
									</TextShimmer>
								</motion.div>
							</div>
						</div>
					</motion.div>
				)}

				{/* AI response: synthesis + objections */}
				{visibleSteps >= 3 && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35 }}
						className="max-w-[82%]"
					>
						<div className="rounded-r-2xl rounded-t-2xl rounded-bl bg-white/90 p-3 ring-1 ring-foreground/10">
							<div className="text-[13px] text-foreground/90">
								<div className="font-medium text-foreground">
									Synthesis complete
								</div>
								<ul className="ml-4 mt-1 list-disc space-y-1">
									<li>
										Collected recent NICE, HAS, G‑BA, AIFA, AEMPS decisions
									</li>
									<li>
										Clustered objections: comparator, population, endpoints,
										budget impact
									</li>
									<li>Citations attached to each objection category</li>
								</ul>
							</div>
							<div className="mt-3 grid grid-cols-2 gap-2">
								<div className="rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
									<div className="text-[11px] font-mono text-foreground/70">
										Objection frequency by category
									</div>
									<div className="mt-1" style={{ height: 160 }}>
										<ChartContainer
											className="h-full w-full"
											config={{
												count: {
													label: "Count",
													color: "var(--color-indigo-500)",
												},
											}}
										>
											<BarChart
												data={objectionData}
												margin={{ left: 12, right: 12, top: 8, bottom: 8 }}
											>
												<CartesianGrid strokeDasharray="3 3" />
												<XAxis
													dataKey="category"
													tick={{ fontSize: 10 }}
													stroke="currentColor"
												/>
												<YAxis tick={{ fontSize: 10 }} stroke="currentColor" />
												<ChartTooltip
													content={<ChartTooltipContent hideIndicator />}
												/>
												<ChartLegend
													verticalAlign="top"
													content={<ChartLegendContent />}
												/>
												<Bar
													dataKey="count"
													fill="var(--color-count)"
													radius={3}
												/>
											</BarChart>
										</ChartContainer>
									</div>
								</div>
								<div className="rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
									<div className="text-[11px] font-mono text-foreground/70">
										Evidence coverage
									</div>
									<div className="mt-1 flex items-center gap-2">
										<CheckCircle className="size-4 text-emerald-600" />
										<span className="font-mono text-sm text-foreground">
											92% cited
										</span>
									</div>
									<div className="mt-2 h-2 w-full rounded bg-foreground/10">
										<div className="h-full w-[92%] rounded bg-emerald-500/70" />
									</div>
									<div className="mt-2 space-y-1 text-[12px] text-foreground/80">
										<div className="flex items-center gap-2">
											<FileText className="size-3.5 text-foreground/60" />
											<span className="underline decoration-dotted">
												FDA/EMA labels
											</span>
											<ExternalLink className="size-3.5 text-foreground/50" />
										</div>
										<div className="flex items-center gap-2">
											<FileText className="size-3.5 text-foreground/60" />
											<span className="underline decoration-dotted">
												Recent HTA decisions
											</span>
											<ExternalLink className="size-3.5 text-foreground/50" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}

				{/* AI response: dossier variants + merge prepared */}
				{visibleSteps >= 4 && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35 }}
						className="max-w-[82%]"
					>
						<div className="rounded-r-2xl rounded-t-2xl rounded-bl bg-white/90 p-3 ring-1 ring-foreground/10">
							<div className="text-[13px]">
								<div className="font-medium text-foreground">
									Dossier variants prepared
								</div>
								<div className="mt-2 overflow-hidden rounded-md ring-1 ring-foreground/10">
									<table className="w-full text-[12px]">
										<thead className="bg-foreground/[0.04]">
											<tr className="*:p-2 *:text-left">
												<th className="font-medium text-foreground/70">
													Country
												</th>
												<th className="font-medium text-foreground/70">
													Key objections
												</th>
												<th className="font-medium text-foreground/70">
													Response draft
												</th>
												<th className="font-medium text-foreground/70">
													Status
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className="*:p-2">
												<td>UK (NICE)</td>
												<td className="text-foreground/80">
													Comparator; Endpoints
												</td>
												<td className="text-foreground/80">
													v1 with citations
												</td>
												<td>
													<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
														ready
													</span>
												</td>
											</tr>
											<tr className="*:p-2">
												<td>FR (HAS)</td>
												<td className="text-foreground/80">Population</td>
												<td className="text-foreground/80">v1</td>
												<td>
													<span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-700 ring-1 ring-amber-500/20">
														review
													</span>
												</td>
											</tr>
											<tr className="*:p-2">
												<td>DE (G‑BA)</td>
												<td className="text-foreground/80">Budget impact</td>
												<td className="text-foreground/80">
													v1 with scenarios
												</td>
												<td>
													<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
														ready
													</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="mt-3 flex items-center justify-between rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
								<div>
									<div className="text-[12px] text-foreground/70">
										Merge Request
									</div>
									<div className="font-mono text-sm font-medium text-foreground">
										#128 · Brand Plan · EU5 variants
									</div>
								</div>
								<div className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
									ready
								</div>
							</div>
							<div className="mt-3 flex flex-wrap gap-2">
								<Button
									variant="outline"
									className="h-7 rounded-2xl px-3 text-[12px]"
								>
									Approve & merge
								</Button>
								<Button
									variant="outline"
									className="h-7 rounded-2xl px-3 text-[12px]"
								>
									Export EU5 briefing (PDF)
								</Button>
								<Button
									variant="outline"
									className="h-7 rounded-2xl px-3 text-[12px]"
								>
									Sync to Veeva
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</div>

			{showPrompt && (
				<div
					className={cn(
						"space-y-3 rounded-lg border border-foreground/10",
						bare
							? "mt-3 p-2 bg-foreground/5"
							: "bg-foreground/5 -mx-3 -mb-3 mt-4 p-3",
					)}
				>
					<div className="text-muted-foreground text-sm">Ask Anything</div>
					<div className="flex justify-between">
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="icon"
								className="size-7 rounded-2xl bg-transparent shadow-none"
							>
								<Plus />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="size-7 rounded-2xl bg-transparent shadow-none"
							>
								<Globe />
							</Button>
						</div>

						<Button
							size="icon"
							className="bg-foreground text-background size-7 rounded-2xl"
						>
							<ArrowUp strokeWidth={2} />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
