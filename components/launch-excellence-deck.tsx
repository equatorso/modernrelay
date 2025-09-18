"use client";

import {
	Brain,
	ChevronLeft,
	ChevronRight,
	FolderGit2,
	Globe2,
	ShieldCheck,
	Sparkles,
	Target,
	Workflow,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BranchingIllustration } from "@/components/branching-illustration";
import { Logo } from "@/components/logo";
import { GridSlide } from "@/components/slides/grid-slide";
import { SlideBody, SlideHeader } from "@/components/slides/slide-components";
import { SlideFrame } from "@/components/slides/slide-frame";
import { TextOnlySlide } from "@/components/slides/text-only-slide";
import { Button } from "@/components/ui/button";
import LaunchAiChatDemo from "@/components/ui/launch-ai-chat-demo";
import LimsAiChatDemo from "@/components/ui/lims-ai-chat-demo";
import { cn } from "@/lib/utils";

// Story-driven, under-5-min deck for biopharma launch excellence

function TitleSlide() {
	return (
		<SlideFrame className="bg-background">
			<div className="space-y-5 text-center">
				<div className="flex items-center justify-center gap-6">
					<Logo className="h-8 w-auto" />
				</div>
				<h1 className="text-xl font-semibold leading-tight text-zinc-900">
					EQTR Launch: The Harvey for Biopharma
				</h1>
				<p className="text-sm text-stone-600 max-w-2xl mx-auto">
					A unified intelligence layer for launch excellence.
				</p>
			</div>
		</SlideFrame>
	);
}

function StakesSlide() {
	return (
		<TextOnlySlide
			className="bg-zinc-50"
			align="center"
			eyebrow="The Stakes"
			title={<span>Ten years. A billion dollars. One launch moment.</span>}
		>
			<div className="space-y-3">
				<p>
					Success depends on medical affairs, market access, and commercial
					teams moving in concert—at high speed and with total clarity.
				</p>
			</div>
		</TextOnlySlide>
	);
}

function FractureSlide() {
	const left = (
		<div className="space-y-6">
			<SlideHeader eyebrow="The Problem" title="The picture is broken." />
			<SlideBody className="space-y-3">
				<p>
					Critical knowledge is trapped across systems and teams—clinical
					results, competitor moves, regulatory shifts, payer requirements. No
					shared source of truth.
				</p>
				<ul className="ml-4 list-disc space-y-1">
					<li>Slow signal detection</li>
					<li>Delayed decisions</li>
					<li>Launch underperformance</li>
				</ul>
			</SlideBody>
		</div>
	);

	const right = (
		<div className="grid grid-cols-2 gap-2">
			<div className="rounded-md border border-stone-200/70 bg-white p-3">
				<div className="flex items-center gap-2 text-[12px] font-medium text-stone-800">
					<ShieldCheck className="size-3.5 text-stone-500" /> Regulatory
				</div>
				<p className="mt-1 text-[12px] text-stone-600">
					Guidance, labels, safety updates
				</p>
			</div>
			<div className="rounded-md border border-stone-200/70 bg-white p-3">
				<div className="flex items-center gap-2 text-[12px] font-medium text-stone-800">
					<Target className="size-3.5 text-stone-500" /> Payer
				</div>
				<p className="mt-1 text-[12px] text-stone-600">
					Coverage criteria, objections
				</p>
			</div>
			<div className="rounded-md border border-stone-200/70 bg-white p-3">
				<div className="flex items-center gap-2 text-[12px] font-medium text-stone-800">
					<Globe2 className="size-3.5 text-stone-500" /> Competitive
				</div>
				<p className="mt-1 text-[12px] text-stone-600">
					Trials, launches, positioning
				</p>
			</div>
			<div className="rounded-md border border-stone-200/70 bg-white p-3">
				<div className="flex items-center gap-2 text-[12px] font-medium text-stone-800">
					<FolderGit2 className="size-3.5 text-stone-500" /> Clinical
				</div>
				<p className="mt-1 text-[12px] text-stone-600">
					Protocols, endpoints, evidence
				</p>
			</div>
		</div>
	);

	return (
		<GridSlide
			className="bg-background"
			gridClassName="grid-cols-2 auto-rows-fr"
			gridInnerClassName="divide-foreground/10"
			items={[
				{ id: "left-content", padded: true, content: left },
				{ id: "right-visual", padded: true, content: right },
			]}
		/>
	);
}

function PromiseSlide() {
	return (
		<TextOnlySlide
			className="bg-zinc-50"
			align="center"
			title={<span>What if every team saw the same, current truth?</span>}
		>
			<p>And could act on it instantly—together.</p>
		</TextOnlySlide>
	);
}

function PlatformIntroSlide() {
	return (
		<TextOnlySlide
			className="bg-background"
			eyebrow="EQTR"
			title={
				<span>Your unified intelligence layer for launch excellence.</span>
			}
		>
			<ul className="space-y-2">
				<li>One place to search, synthesize, and operationalize knowledge</li>
				<li>
					Biopharma‑grade provenance: citations, version history, and
					audit‑ready traceability
				</li>
				<li>Secure, compliant, and enterprise-integrated</li>
			</ul>
		</TextOnlySlide>
	);
}

function AssistantSlide() {
	return (
		<GridSlide
			className="bg-zinc-50"
			gridClassName="grid-cols-2 auto-rows-fr h-[72vh]"
			gridInnerClassName="divide-foreground/10"
			items={[
				{
					id: "left-content",
					padded: true,
					content: (
						<div className="space-y-6">
							<SlideHeader
								eyebrow="Assistant"
								title="The conversational co‑pilot for launch"
							/>
							<SlideBody as="ul" className="space-y-3 pt-2">
								<li>
									<Brain className="inline mr-2 size-4 text-stone-500" /> Draft
									sections of a regulatory submission
								</li>
								<li>
									<Target className="inline mr-2 size-4 text-stone-500" />{" "}
									Strategize on payer objections with cited evidence
								</li>
								<li>
									<Sparkles className="inline mr-2 size-4 text-stone-500" />{" "}
									Synthesize findings across clinical data and literature
								</li>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-chat",
					padded: false,
					content: (
						<div className="h-full">
							<LaunchAiChatDemo
								bare
								showUserMessage
								showPrompt
								scroll
								repeat={false}
								className="w-full h-full rounded-none"
							/>
						</div>
					),
				},
			]}
		/>
	);
}

function VaultSlide() {
	return (
		<GridSlide
			className="bg-background"
			gridClassName="grid-cols-2 auto-rows-fr"
			gridInnerClassName="divide-foreground/10"
			items={[
				{
					id: "left-content",
					padded: true,
					content: (
						<div className="space-y-6">
							<SlideHeader
								eyebrow="Vault"
								title="FDA‑compliant repository for launch assets"
							/>
							<SlideBody as="ul" className="space-y-3 pt-2">
								<li>
									Securely store and version brand plans, dossiers, and analyses
								</li>
								<li>
									Handle unstructured docs and structured clinical data together
								</li>
								<li>Sync with enterprise systems like Veeva and Salesforce</li>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<div className="grid grid-cols-2 gap-2">
							<div className="rounded-md border border-stone-200 bg-white/70 p-3 text-[12px]">
								<strong>Brand Plan v3</strong>
								<p className="text-stone-600">Versioned • Linked to evidence</p>
							</div>
							<div className="rounded-md border border-stone-200 bg-white/70 p-3 text-[12px]">
								<strong>AMCP Dossier</strong>
								<p className="text-stone-600">
									Country variants auto‑generated
								</p>
							</div>
							<div className="rounded-md border border-stone-200 bg-white/70 p-3 text-[12px]">
								<strong>Safety Labeling</strong>
								<p className="text-stone-600">Compliance checks passed</p>
							</div>
							<div className="rounded-md border border-stone-200 bg-white/70 p-3 text-[12px]">
								<strong>Veeva Sync</strong>
								<p className="text-stone-600">Two‑way metadata mapping</p>
							</div>
						</div>
					),
				},
			]}
		/>
	);
}

function KnowledgeSlide() {
	return (
		<GridSlide
			className="bg-zinc-50"
			gridClassName="grid-cols-2 auto-rows-fr"
			gridInnerClassName="divide-foreground/10"
			items={[
				{
					id: "left-content",
					padded: true,
					content: (
						<div className="space-y-6">
							<SlideHeader
								eyebrow="Knowledge"
								title="Continuously updated market view"
							/>
							<SlideBody className="space-y-3 pt-2">
								<p>
									Combine FDA, PubMed, HTA agencies with proprietary payer and
									competitive data.
								</p>
								<ul className="ml-4 list-disc space-y-1">
									<li>Instantly searchable by the Assistant</li>
									<li>Citations and traceability preserved</li>
									<li>Signals and trends surfaced proactively</li>
								</ul>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<div className="flex items-center justify-center h-full">
							<div className="rounded-md border border-stone-200 bg-white/70 p-4">
								<div className="text-[12px] font-medium text-stone-800 text-center">
									Unified Knowledge Graph
								</div>
								<div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-stone-700">
									<div className="rounded border p-2 text-center">FDA</div>
									<div className="rounded border p-2 text-center">PubMed</div>
									<div className="rounded border p-2 text-center">HTA</div>
									<div className="rounded border p-2 text-center">Payer</div>
									<div className="rounded border p-2 text-center">
										Competitors
									</div>
									<div className="rounded border p-2 text-center">Internal</div>
								</div>
							</div>
						</div>
					),
				},
			]}
		/>
	);
}

function GovernedBranchingSlide() {
	return (
		<GridSlide
			className="bg-background"
			gridClassName="grid-cols-2 auto-rows-fr"
			gridInnerClassName="divide-foreground/10"
			items={[
				{
					id: "left-content",
					padded: true,
					content: (
						<div className="space-y-6">
							<SlideHeader
								eyebrow="Governed Branching"
								title="Explore with agents, merge with control."
							/>
							<SlideBody as="ul" className="space-y-3 pt-2">
								<li>
									Branch payer strategy, claims language, or label scenarios
									without touching the Golden Record.
								</li>
								<li>
									Agents analyze evidence, draft responses, and propose
									structured changes inside the branch.
								</li>
								<li>
									Reviewers approve merges with role‑based controls and
									e‑signatures; everything is versioned and auditable.
								</li>
							</SlideBody>
							<div className="pt-2 text-[12px] text-stone-600">
								<div className="font-mono">Examples:</div>
								<ul className="ml-4 list-disc space-y-1">
									<li>
										EU5 payer positioning v2 — agent drafts objection responses
										with citations
									</li>
									<li>
										Labeling change simulation — safety/MA impact assessment and
										field guidance
									</li>
								</ul>
							</div>
						</div>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<div className="flex h-full items-center justify-center">
							<BranchingIllustration className="max-w-[640px] w-full" />
						</div>
					),
				},
			]}
		/>
	);
}

function WorkflowsSlide() {
	return (
		<GridSlide
			className="bg-background"
			gridClassName="grid-cols-2 auto-rows-fr"
			gridInnerClassName="divide-foreground/10"
			items={[
				{
					id: "left-content",
					padded: true,
					content: (
						<div className="space-y-6">
							<SlideHeader
								eyebrow="Workflows"
								title="Agents for recurring commercial tasks"
							/>
							<SlideBody as="ul" className="space-y-3 pt-2">
								<li>
									<Workflow className="inline mr-2 size-4 text-stone-500" />{" "}
									Launch readiness review generation
								</li>
								<li>
									Country‑specific market access dossiers from a global template
								</li>
								<li>Competitive simulation for brand plan scenarios</li>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<div className="rounded-md border border-stone-200 bg-white/70 p-4 text-[12px]">
							<div className="font-medium text-stone-800">Example workflow</div>
							<ol className="mt-2 list-decimal ml-4 space-y-1 text-stone-700">
								<li>Detect new competitor data in HTA feed</li>
								<li>Summarize changes and assess impact on payer stance</li>
								<li>Draft counter‑objection language with citations</li>
								<li>Open tasks in CRM for field review</li>
							</ol>
						</div>
					),
				},
			]}
		/>
	);
}

function DayInTheLifeSlide() {
	return (
		<TextOnlySlide
			className="bg-zinc-50"
			eyebrow="From question to decision"
			title={<span>A single flow, end‑to‑end, in minutes.</span>}
		>
			<ol className="list-decimal ml-5 space-y-1">
				<li>Ask: “Where will payer objections concentrate for EU5?”</li>
				<li>Assistant synthesizes latest evidence and HTA guidance</li>
				<li>Drafts country variants and routes tasks to owners</li>
				<li>Leaders review one linked, auditable narrative</li>
			</ol>
		</TextOnlySlide>
	);
}

function OutcomeSlide() {
	return (
		<TextOnlySlide
			className="bg-background"
			eyebrow="What this means"
			title={<span>Faster alignment. Fewer surprises. Stronger launch.</span>}
		>
			<ul className="space-y-2">
				<li>Shared situational awareness across functions</li>
				<li>Decisions made with current, cited evidence</li>
				<li>Repeatable operating rhythm powered by agents</li>
			</ul>
		</TextOnlySlide>
	);
}

function CTAFinalSlide() {
	return (
		<TextOnlySlide
			className="bg-zinc-50"
			align="center"
			title={
				<span>Pilot in 2 weeks. See your launch in one pane of glass.</span>
			}
		>
			<p className="text-stone-700">Q&A</p>
		</TextOnlySlide>
	);
}

const slides = [
	{ id: 1, content: <TitleSlide /> },
	{ id: 2, content: <StakesSlide /> },
	{ id: 3, content: <FractureSlide /> },
	{ id: 4, content: <PromiseSlide /> },
	{ id: 5, content: <PlatformIntroSlide /> },
	{ id: 6, content: <AssistantSlide /> },
	{ id: 7, content: <VaultSlide /> },
	{ id: 8, content: <KnowledgeSlide /> },
	{ id: 9, content: <GovernedBranchingSlide /> },
	{ id: 10, content: <WorkflowsSlide /> },
	{ id: 11, content: <DayInTheLifeSlide /> },
	{ id: 12, content: <OutcomeSlide /> },
	{ id: 13, content: <CTAFinalSlide /> },
];

export default function LaunchExcellenceDeck() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = slides.length;

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight" || event.key === " ") {
				event.preventDefault();
				setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
			} else if (event.key === "ArrowLeft") {
				event.preventDefault();
				setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [totalSlides]);

	return (
		<div className="relative w-full h-screen overflow-hidden bg-background">
			<div className="w-full h-full">{slides[currentSlide].content}</div>

			<motion.div
				className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.6 }}
			>
				<div className="relative">
					<div className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl" />
					<div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full" />

					<div className="relative flex items-center space-x-4 px-6 py-3">
						<Button
							variant="ghost"
							size="icon"
							onClick={prevSlide}
							disabled={currentSlide === 0}
							className="h-8 w-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 disabled:text-white/30 transition-colors"
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>

						<div className="flex space-x-2">
							{slides.map((slide, index) => (
								<button
									key={slide.id}
									type="button"
									onClick={() => goToSlide(index)}
									className={cn(
										"rounded-full transition-all duration-300 hover:scale-110",
										index === currentSlide
											? "w-8 h-2 bg-white/90 shadow-lg"
											: "w-2 h-2 bg-white/30 hover:bg-white/50",
									)}
								/>
							))}
						</div>

						<Button
							variant="ghost"
							size="icon"
							onClick={nextSlide}
							disabled={currentSlide === slides.length - 1}
							className="h-8 w-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 disabled:text-white/30 transition-colors"
						>
							<ChevronRight className="h-4 w-4" />
						</Button>

						<div className="text-sm text-white/70 ml-4 font-mono tracking-wider">
							{String(currentSlide + 1).padStart(2, "0")} /{" "}
							{String(slides.length).padStart(2, "0")}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
