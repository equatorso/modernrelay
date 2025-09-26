"use client";

import { CheckCircle2, FileText, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { cn } from "@/lib/utils";

type DemoField = {
	label: string;
	value: string;
	confidence?: number;
};

type Phase = "note" | "extraction" | "record";

const PHASES: Phase[] = ["note", "extraction", "record"];

const DEFAULT_NOTE_SEGMENTS: Array<{ text: string; highlight?: boolean }> = [
	{ text: "Binding assay AF45 completed with 3 replicates on " },
	{ text: "Aug 22, 2025", highlight: true },
	{ text: " using instrument " },
	{ text: "PlateReader-02", highlight: true },
	{ text: ". QC flagged replicate B (baseline drift). Calculated IC50 at " },
	{ text: "12.4 nM", highlight: true },
	{ text: ". Upload to Golden Record after review." },
];

const DEFAULT_FIELDS: DemoField[] = [
	{ label: "Record Type", value: "Assay Run" },
	{ label: "Assay ID", value: "AF45", confidence: 0.98 },
	{ label: "Replicates", value: "3", confidence: 0.96 },
	{ label: "Completed On", value: "2025-08-22", confidence: 0.94 },
	{ label: "Instrument", value: "PlateReader-02", confidence: 0.91 },
	{ label: "Outcome", value: "IC50 12.4 nM", confidence: 0.9 },
];

const DEFAULT_EXISTING_ROWS = [
	{
		id: "AF42",
		record: "Binding Assay · AF42",
		type: "Assay Run",
		date: "2025-08-12",
		instrument: "PlateReader-01",
		status: "validated",
	},
	{
		id: "AF43",
		record: "Binding Assay · AF43",
		type: "Assay Run",
		date: "2025-08-16",
		instrument: "PlateReader-02",
		status: "validated",
	},
	{
		id: "AF44",
		record: "Binding Assay · AF44",
		type: "Assay Run",
		date: "2025-08-19",
		instrument: "PlateReader-02",
		status: "validated",
	},
];

const DEFAULT_DELAYS_MS: Record<Phase, number> = {
	note: 0,
	extraction: 900,
	record: 1800,
};

const confidenceColor = (confidence?: number) => {
	if (confidence === undefined) return "text-foreground/60";
	if (confidence >= 0.95) return "text-emerald-600";
	if (confidence >= 0.85) return "text-amber-600";
	return "text-rose-600";
};

type NoteToMetadataDemoProps = {
	className?: string;
	noteSegments?: Array<{ text: string; highlight?: boolean }>;
	fields?: DemoField[];
	autoplay?: boolean;
	repeat?: boolean;
	delaysMs?: Partial<Record<Phase, number>>;
};

export default function NoteToMetadataDemo({
	className,
	noteSegments = DEFAULT_NOTE_SEGMENTS,
	fields = DEFAULT_FIELDS,
	autoplay = true,
	repeat = true,
	delaysMs,
}: NoteToMetadataDemoProps) {
	const [phaseIndex, setPhaseIndex] = useState(() =>
		autoplay ? 0 : PHASES.length - 1,
	);
	const [playKey, setPlayKey] = useState(0);

	const delays = useMemo(
		() => ({
			...DEFAULT_DELAYS_MS,
			...delaysMs,
		}),
		[delaysMs],
	);

	useEffect(() => {
		if (!autoplay) {
			setPhaseIndex(PHASES.length - 1);
			return;
		}

		setPhaseIndex(0);
		const timers: number[] = [];

		const extractionTimer = window.setTimeout(() => {
			setPhaseIndex(1);
		}, delays.extraction ?? DEFAULT_DELAYS_MS.extraction);
		timers.push(extractionTimer);

		const recordTimer = window.setTimeout(() => {
			setPhaseIndex(2);
		}, delays.record ?? DEFAULT_DELAYS_MS.record);
		timers.push(recordTimer);

		if (repeat) {
			const replayAfterMs = (delays.record ?? DEFAULT_DELAYS_MS.record) + 1200;
			const replayTimer = window.setTimeout(() => {
				setPlayKey((k) => k + 1);
			}, replayAfterMs);
			timers.push(replayTimer);
		}

		return () => {
			timers.forEach((id) => window.clearTimeout(id));
		};
	}, [autoplay, delays, playKey, repeat]);

	const currentPhase = PHASES[phaseIndex];

	// Compute the new row from extracted fields
	const newRow = useMemo(() => {
		const map = Object.fromEntries(fields.map((f) => [f.label, f.value]));
		return {
			id: map["Assay ID"] ?? "AF45",
			record: `Binding Assay · ${map["Assay ID"] ?? "AF45"}`,
			type: map["Record Type"] ?? "Assay Run",
			date: map["Completed On"] ?? "2025-08-22",
			instrument: map["Instrument"] ?? "PlateReader-02",
			status: "ready",
		};
	}, [fields]);

	return (
		<div className={cn("relative flex h-full flex-col gap-3", className)}>
			<header className="relative flex items-center justify-between">
				<div className="space-y-1">
					<div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-foreground/60">
						<FileText className="size-3.5" />
						<span>Note → Structured Metadata</span>
					</div>
					<div className="text-sm font-medium text-foreground">
						AI normalizes lab notes into diligence-ready records.
					</div>
				</div>
				<Button
					type="button"
					variant="outline"
					size="sm"
					onClick={() => {
						if (!autoplay) setPhaseIndex(0);
						setPlayKey((k) => k + 1);
					}}
					className="relative z-10"
				>
					Replay
				</Button>
			</header>

			<div className="relative flex flex-1 flex-col gap-3">
				{/* Lab Note */}
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25 }}
					className="relative overflow-hidden rounded-lg border border-foreground/10 bg-white/95 p-3"
				>
					<div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-foreground/60">
						<FileText className="size-3" />
						Lab Note
					</div>
					<div className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-foreground/80">
						{noteSegments.map((segment, index) => (
							<motion.span
								key={index}
								initial={{ backgroundColor: "rgba(251, 191, 36, 0)" }}
								animate={{
									backgroundColor:
										segment.highlight && phaseIndex >= 2
											? "rgba(251, 191, 36, 0.18)"
											: "rgba(251, 191, 36, 0)",
								}}
								transition={{
									duration: 0.35,
									delay: segment.highlight ? 0.1 + index * 0.04 : 0,
								}}
								className={cn(
									segment.highlight &&
										"rounded-md px-1 font-medium text-foreground",
								)}
							>
								{segment.text}
							</motion.span>
						))}
					</div>

					{/* Extracted chips under note */}
					<AnimatePresence>
						{phaseIndex >= 2 ? (
							<motion.div
								initial={{ opacity: 0, y: 6 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 6 }}
								transition={{ duration: 0.2 }}
								className="mt-2 flex flex-wrap gap-1.5"
							>
								{fields
									.filter((f) => f.label !== "Record Type")
									.slice(0, 5)
									.map((f, i) => (
										<motion.span
											key={`${f.label}-${i}`}
											initial={{ opacity: 0, y: 4 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.2, delay: 0.02 * i }}
											className="rounded-full bg-amber-100/60 px-2 py-0.5 text-[11px] text-amber-900 ring-1 ring-amber-200"
										>
											{f.value}
										</motion.span>
									))}
							</motion.div>
						) : null}
					</AnimatePresence>

					{/* Extraction banner */}
					<AnimatePresence>
						{phaseIndex === 1 ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-amber-100/50 backdrop-blur-[1px] ring-1 ring-amber-200"
							>
								<div className="px-3 py-2 text-[14px] font-medium text-black flex items-center gap-2">
									<Sparkles className="size-3" />
									<TextShimmer
										as="div"
										duration={0.6}
										className="flex items-center gap-2"
									>
										Extracting key entities…
									</TextShimmer>
								</div>
							</motion.div>
						) : null}
					</AnimatePresence>
				</motion.div>

				{/* Records Table */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.05 }}
					className="relative flex flex-col overflow-hidden rounded-lg border border-foreground/10 bg-white/95"
				>
					<div className="flex items-center justify-between px-3 py-2">
						<div className="text-[11px] font-semibold uppercase tracking-wide text-foreground/60">
							Assay Records
						</div>
						<div className="text-[10px] text-foreground/50">Golden Record</div>
					</div>
					<div className="overflow-auto">
						<table className="w-full text-[12px]">
							<thead className="bg-foreground/[0.04]">
								<tr className="*:px-2 *:py-1 *:text-left *:font-medium *:text-foreground/70">
									<th>Record</th>
									<th>Type</th>
									<th>Date</th>
									<th>Instrument</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-foreground/[0.06]">
								{DEFAULT_EXISTING_ROWS.map((r) => (
									<tr key={r.id} className="*:px-2 *:py-1">
										<td className="font-mono">{r.record}</td>
										<td className="text-foreground/70">{r.type}</td>
										<td className="text-foreground/70">{r.date}</td>
										<td className="text-foreground/70">{r.instrument}</td>
										<td>
											<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
												<CheckCircle2 className="size-3" /> validated
											</span>
										</td>
									</tr>
								))}

								<AnimatePresence>
									{phaseIndex >= 2 ? (
										<motion.tr
											key={newRow.id}
											initial={{
												opacity: 0,
												y: -6,
												backgroundColor: "rgba(251,191,36,0)",
											}}
											animate={{
												opacity: 1,
												y: 0,
												backgroundColor: "rgba(251,191,36,0.22)",
											}}
											exit={{ opacity: 0, y: -6 }}
											transition={{ duration: 0.25 }}
											className="*:px-2 *:py-1"
										>
											<td className="font-mono">
												<span className="mr-1 rounded-sm bg-amber-100 px-1 py-[1px] text-amber-900 ring-1 ring-amber-300">
													New
												</span>
												{newRow.record}
											</td>
											<td className="text-foreground/80">{newRow.type}</td>
											<td className="text-foreground/80">{newRow.date}</td>
											<td className="text-foreground/80">
												{newRow.instrument}
											</td>
											<td>
												<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
													<CheckCircle2 className="size-3" /> ready
												</span>
											</td>
										</motion.tr>
									) : null}
								</AnimatePresence>
							</tbody>
						</table>
					</div>
				</motion.div>
			</div>

			<div className="relative flex flex-col gap-2">
				<div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-foreground/50">
					Progress
					<div className="flex gap-1">
						{PHASES.map((phase, index) => (
							<span
								key={phase}
								className={cn(
									"h-1.5 w-8 rounded-full transition-colors",
									index <= phaseIndex ? "bg-foreground/80" : "bg-foreground/10",
								)}
								aria-hidden
							/>
						))}
					</div>
				</div>
				<div className="flex items-center justify-between text-xs text-foreground/60">
					<span className="font-medium capitalize">{currentPhase}</span>
					<span>
						{phaseIndex === PHASES.length - 1
							? "Structured record synchronized"
							: "AI parsing in progress"}
					</span>
				</div>
			</div>
		</div>
	);
}
