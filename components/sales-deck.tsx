"use client";

import {
	AlertTriangle,
	CheckCircle,
	ChevronLeft,
	ChevronRight,
	FileText,
	Folder,
	Link2Off,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BranchingIllustration } from "@/components/branching-illustration";
import { EventWorkflowIllustration } from "@/components/event-workflow-illustration";
import { Logo } from "@/components/logo";
import ClaudeAI from "@/components/logos/claude";
import OpenAI from "@/components/logos/open-ai";
import { Vercel } from "@/components/logos/vercel";
import VisualStudioCode from "@/components/logos/vs-code";
import { SequenceIllustration } from "@/components/sequence-illustration";
import { GridSlide } from "@/components/slides/grid-slide";
import { SlideBody, SlideHeader } from "@/components/slides/slide-components";
import { SlideFrame } from "@/components/slides/slide-frame";
import { TextOnlySlide } from "@/components/slides/text-only-slide";
import { Button } from "@/components/ui/button";
import LimsAiChatDemo from "@/components/ui/lims-ai-chat-demo";
import NoteToMetadataDemo from "@/components/ui/note-to-metadata-demo";
import { cn } from "@/lib/utils";
import LogoCloud from "./logo-cloud";
import PythonSdkIllustration from "./python-sdk-illustration";

// --- Text-first Slide Components (smaller typography, black/stone palette) ---

function TitleSlide() {
	return (
		<SlideFrame className="bg-background">
			<div className="space-y-5 text-center">
				<div className="flex items-center justify-center gap-6">
					<Logo className="h-8 w-auto" />
					<span className="text-stone-400 text-sm">×</span>
					<div className="h-8 w-20 rounded bg-stone-200/60" aria-hidden />
				</div>
				<h1 className="text-xl font-semibold leading-tight text-zinc-900">
					The AI-Native Lab Operating System
				</h1>
				<p className="text-sm text-stone-600 max-w-2xl mx-auto">
					A New Foundation for [Client&apos;s Company Name]
				</p>
			</div>
		</SlideFrame>
	);
}

// Slide 2 — Biotech Dilemma with diverging paths illustration
function BiotechDilemmaSlide() {
	const left = (
		<div className="flex flex-col h-full">
			<SlideHeader
				eyebrow="The Biotech Dilemma"
				title="The Seeds of Future Failure Are Sown on Day One"
			/>
			<div className="flex-1 flex items-end pt-10">
				<div className="w-full">
					<div className="rounded-md border border-stone-200/60 bg-white p-3">
						<div className="text-[12px] font-medium text-stone-800">
							Path A — The Path of Least Resistance
						</div>
						<div className="mt-2 overflow-hidden rounded border border-stone-200/60 bg-white/60">
							<div className="bg-stone-50/70 px-2 py-1 text-[10px] font-mono text-stone-500">
								files
							</div>
							<ul className="divide-y divide-stone-200/60">
								<li className="flex items-center gap-2 px-2 py-1.5">
									<FileText className="size-3.5 text-stone-500" />
									<span className="truncate text-[12px] font-mono text-stone-700">
										final_final_v2(1).xlsx
									</span>
									<AlertTriangle className="ml-auto size-3.5 text-amber-600" />
								</li>
								<li className="flex items-center gap-2 px-2 py-1.5">
									<FileText className="size-3.5 text-stone-500" />
									<span className="truncate text-[12px] font-mono text-stone-700">
										image (copy).png
									</span>
									<Link2Off className="ml-auto size-3.5 text-stone-400" />
								</li>
								<li className="flex items-center gap-2 px-2 py-1.5">
									<Folder className="size-3.5 text-stone-500" />
									<span className="truncate text-[12px] font-mono text-stone-700">
										results_old/
									</span>
									<AlertTriangle className="ml-auto size-3.5 text-amber-600" />
								</li>
								<li className="flex items-center gap-2 px-2 py-1.5">
									<FileText className="size-3.5 text-stone-500" />
									<span className="truncate text-[12px] font-mono text-stone-700">
										protocol_binding_assay_new_NEW (1) (2).pptx
									</span>
									<AlertTriangle className="ml-auto size-3.5 text-amber-600" />
								</li>
								<li className="flex items-center gap-2 px-2 py-1.5">
									<FileText className="size-3.5 text-stone-500" />
									<span className="truncate text-[12px] font-mono text-stone-700">
										notes - Anna (old).docx
									</span>
									<Link2Off className="ml-auto size-3.5 text-stone-400" />
								</li>
							</ul>
						</div>
						<ul className="mt-2 list-disc pl-4 text-sm space-y-1">
							<li>Spreadsheets, slides, shared drives, generic notebooks.</li>
							<li>Creates Data Debt. Each experiment adds to the chaos.</li>
							<li>
								6 months: hard to reproduce. 12 months: diligence becomes
								archaeology.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);

	const right = (
		<div className="flex flex-col h-full">
			<div className="flex-1 flex items-end">
				<div className="w-full">
					<div className="rounded-md border border-emerald-200/60 bg-emerald-50 p-3">
						<div className="text-[12px] font-medium text-emerald-800">
							Path B — The Path of Intentional Design
						</div>
						<div className="mt-2 overflow-hidden rounded border border-stone-200/60 bg-white/90 ring-1 ring-foreground/10">
							<div className="bg-foreground/5 px-2 py-1 text-[10px] font-mono text-stone-700">
								records
							</div>
							<table className="w-full text-[12px]">
								<thead className="bg-foreground/[0.04]">
									<tr className="*:px-2 *:py-1 *:text-left *:font-medium *:text-stone-800">
										<th>Record</th>
										<th>Type</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-stone-200/60">
									<tr className="*:px-2 *:py-1">
										<td className="font-mono text-stone-800">
											Binding Assay · AF45
										</td>
										<td className="text-stone-600">Assay</td>
										<td>
											<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
												<CheckCircle className="size-3" /> validated
											</span>
										</td>
									</tr>
									<tr className="*:px-2 *:py-1">
										<td className="font-mono text-stone-800">
											Compound · BX12
										</td>
										<td className="text-stone-600">Compound</td>
										<td>
											<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
												<CheckCircle className="size-3" /> validated
											</span>
										</td>
									</tr>
									<tr className="*:px-2 *:py-1">
										<td className="font-mono text-stone-800">
											Protocol · v1.3
										</td>
										<td className="text-stone-600">Protocol</td>
										<td>
											<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">
												<CheckCircle className="size-3" /> validated
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<ul className="mt-2 list-disc pl-4 text-sm space-y-1 pt-10">
							<li>
								Build a foundation where data becomes a compounding asset.
							</li>
							<li>Every experiment increases structure, context, and value.</li>
							<li>Clean, reproducible, diligence‑ready from day zero.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<GridSlide
			className="bg-zinc-50"
			gridClassName="grid-cols-2 auto-rows-fr"
			gridInnerClassName="divide-foreground/10"
			items={[
				{ id: "left-content", padded: true, content: left },
				{ id: "right-visual", padded: true, content: right },
			]}
		/>
	);
}

function WhatIfSlide() {
	return (
		<TextOnlySlide
			className="bg-zinc-50"
			align="center"
			title={
				<span>
					What if the path of least resistance
					<br />
					built a compounding asset by default?
				</span>
			}
		/>
	);
}

// Slide 3 — Vision with minimal lab/connection illustration
function VisionSlide() {
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
						<SlideHeader
							eyebrow="The Vision"
							title="A New Standard for R&D: Velocity and Integrity by Design"
						/>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<SlideBody as="ul" className="space-y-3 text-stone-500">
							<li>
								<span className="font-medium text-zinc-900">
									Your scientists are freed from manual data entry.
								</span>{" "}
								The system observes protocols, files, and notes; context is
								captured automatically.
							</li>
							<li>
								<span className="font-medium text-zinc-900">
									Everything is linked to its origin.
								</span>{" "}
								Trace any result to assay, batch, sequence, and the notebook
								entry that spawned it.
							</li>
							<li>
								<span className="font-medium text-zinc-900">
									Your history becomes a queryable brain.
								</span>{" "}
								Ask: “Show experiments with protein X vs cell line Y with
								&gt;20% viability drop. Generate dose–response curves and
								compare to last quarter.”
							</li>
							<li>
								{" "}
								<span className="font-medium text-zinc-900">
									The lab becomes an automated engine for discovery.
								</span>{" "}
								A new gene sequence automatically triggers structure prediction
								and primer design.
							</li>
						</SlideBody>
					),
				},
			]}
		/>
	);
}

function NewParadigmSlide() {
	return (
		<TextOnlySlide
			className="bg-background"
			title={<span>Introducing: The AI-Native Lab Operating System</span>}
		>
			<ul className="space-y-3">
				<li>A single source of truth that powers your entire R&D lifecycle.</li>
				<li>It doesn&apos;t replace every tool; it unifies them.</li>
				<li>
					Designed from first principles for humans and AI agents to collaborate
					on pristine data.
				</li>
				<li>Foundation for automated, reproducible, and compliant science.</li>
			</ul>
		</TextOnlySlide>
	);
}

function PillarAiNativeSlide() {
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
								eyebrow="Pillar 2 — Intelligence Layer"
								title="AI as a Core Team Member, Not a Gadget."
							/>
							<SlideBody as="ul" className="space-y-3 pt-4">
								<li>
									LLMs are woven into the fabric of the OS—never an
									afterthought.
								</li>
								<li>
									Agents read, write, and reason about your data to enforce
									structure and automate tasks.
								</li>
								<li>
									The Assistant becomes your command line to query, analyze, and
									visualize in natural language.
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
							<LimsAiChatDemo
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

function PillarIngestSlide() {
	return (
		<GridSlide
			className="bg-background"
			gridClassName="grid-cols-2 auto-rows-fr h-[72vh]"
			gridInnerClassName="divide-foreground/10"
			items={[
				{
					id: "left-content",
					padded: true,
					content: (
						<div className="space-y-6">
							<SlideHeader
								eyebrow="Pillar 2a — AI-Native Ingest"
								title="Notes Become Structured Metadata Automatically."
							/>
							<SlideBody as="ul" className="space-y-3 pt-4">
								<li>
									Scientists capture intent in natural language; the OS extracts
									entities, timestamps, and provenance automatically.
								</li>
								<li>
									Structured records sync to the Golden Record with confidence
									scores and complete audit trails.
								</li>
								<li>
									No re-keying. Data is diligence-ready the moment it&apos;s written.
								</li>
							</SlideBody>
							<div className="rounded-lg border border-foreground/10 bg-white/70 p-4 text-[12px] text-stone-600">
								<div className="font-mono text-xs uppercase tracking-wide text-stone-500">
									Why it matters
								</div>
								<ul className="mt-2 list-disc space-y-1 pl-4">
									<li>Zero-copy ingestion safeguards integrity.</li>
									<li>
										Audit-ready records satisfy 21 CFR Part 11 and partners.
									</li>
									<li>
										LLMs have structured context to automate downstream actions.
									</li>
								</ul>
							</div>
						</div>
					),
				},
				{
					id: "right-demo",
					padded: true,
					content: (
						<div className="h-full">
							<NoteToMetadataDemo className="h-full" />
						</div>
					),
				},
			]}
		/>
	);
}

function PillarBranchingSlide() {
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
								eyebrow="Pillar 3 — Collaboration Layer"
								title="Git-Style Branching for Science."
							/>
							<SlideBody as="ul" className="space-y-3 pt-4">
								<li>
									Explore hypotheses in isolated branches without corrupting
									validated data.
								</li>
								<li>Enable true parallel work across humans and AI agents.</li>
								<li>
									Transparent approval and merge with an audit trail ensures 21
									CFR Part 11 compliance.
								</li>
							</SlideBody>
							<div className="pt-2 text-[12px] text-stone-600">
								<div className="font-mono">Example:</div>
								<ul className="ml-4 list-disc space-y-1">
									<li>
										Human branch: tweak protocol — adds note, adjusts incubation
										time.
									</li>
									<li>Agent branch: auto-calculates IC50 and flags outlier.</li>
									<li>Merge: review, approve, and update the Golden Record.</li>
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

function PillarEventDrivenSlide() {
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
								eyebrow="Pillar 4 — Event-Driven Workflows"
								title="Your lab shouldn&apos;t just store data; it should act on it."
							/>

							<SlideBody className="space-y-4 pt-4">
								<p>
									Our platform uses an event-driven architecture to automate the
									Design-Build-Test-Learn cycle.
								</p>
								<div className="space-y-3">
									<div>
										<p className="font-medium text-zinc-900">
											When a new event happens...
										</p>
										<ul className="mt-1 list-disc space-y-0.5 pl-5 text-stone-600">
											<li>A scientist uploads a new protein sequence...</li>
											<li>A plate reader finishes an assay run...</li>
											<li>An AI flags an anomalous result...</li>
										</ul>
									</div>
									<div>
										<p className="font-medium text-zinc-900">
											...an automated workflow can trigger.
										</p>
										<ul className="mt-1 list-disc space-y-0.5 pl-5 text-stone-600">
											<li>
												...automatically order primers, run a structure
												prediction, and log the results.
											</li>
											<li>
												...automatically parse the raw data, perform QC,
												calculate IC50 values, and update the experiment&apos;s
												status.
											</li>
											<li>
												...automatically create a ticket for review and link it
												to the relevant data.
											</li>
										</ul>
									</div>
								</div>
								<p className="pt-4">
									This is your digital lab technician, working 24/7 to reduce
									manual work and accelerate the pace of discovery.
								</p>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<div className="flex h-full items-center justify-center">
							<EventWorkflowIllustration />
						</div>
					),
				},
			]}
		/>
	);
}

function PillarApiSlide() {
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
								eyebrow="Pillar 5 — API-First Platform"
								title="Developer‑first SDK for your custom lab models."
							/>
							<SlideBody as="ul" className="space-y-3 pt-4 text-zinc-900">
								<li>
									API‑first means everything is scriptable. Read, query, and
									write lab data in a few lines of Python.
								</li>
								<li>
									Your custom schemas—Compounds, Assays, Sequences—are
									first‑class types in the SDK.
								</li>
								<li>
									Fast iteration: fetch runs, analyze, and push results.
									Validation and audit trail handled for you.
								</li>
								<li>
									Full CRUD on your models with built‑in validation and audit
									trail.
								</li>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<div className="flex h-full items-center justify-center">
							<PythonSdkIllustration />
						</div>
					),
				},
			]}
		/>
	);
}

// Compact integrations mosaic inspired by `components/integrations-9.tsx`
const MiniIntegrationCard = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"bg-background ring-foreground/10 flex aspect-square size-full rounded-md border border-transparent shadow-sm ring-1 *:m-auto",
				className,
			)}
		>
			{children}
		</div>
	);
};

const MiniIntegrationsGroup = ({
	children,
	label,
	className,
}: {
	children?: React.ReactNode;
	label?: string;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"ring-foreground/5 relative z-10 uppercase font-mono grid grid-rows-[auto_1fr] gap-1 rounded-xl border border-transparent bg-white/70 p-1.5 shadow ring-1",
				className,
			)}
		>
			<span className="text-stone-600 p-0.5 text-center text-[10px] leading-none">
				{label}
			</span>
			{children}
		</div>
	);
};

const MiniIntegrationsMosaic = () => {
	return (
		<div className="relative p-3">
			<div
				aria-hidden
				className="mask-radial-to-85% absolute inset-0 m-auto bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] opacity-5 [background-size:12px_12px]"
			/>
			<div className="relative space-y-4">
				<div className="text-center">
					<span className="font-mono text-[11px] text-stone-700 tracking-tight">
						MODULES
					</span>
				</div>

				<div className="grid grid-cols-3 gap-2">
					<MiniIntegrationsGroup label="Data Models">
						<div className="grid grid-cols-2 gap-1">
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">
									Sequences
								</span>
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">
									Assays
								</span>
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">
									Images
								</span>
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">
									Compounds
								</span>
							</MiniIntegrationCard>
						</div>
					</MiniIntegrationsGroup>
					<MiniIntegrationsGroup label="Workflows">
						<div className="grid grid-cols-2 gap-1">
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">
									Events
								</span>
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">
									LLM
								</span>
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">QC</span>
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<span className="font-mono text-[10px] text-stone-700">
									Audit
								</span>
							</MiniIntegrationCard>
						</div>
					</MiniIntegrationsGroup>
					<MiniIntegrationsGroup label="External Data">
						<div className="grid grid-cols-2 gap-1">
							<MiniIntegrationCard>
								<OpenAI className="text-stone-600" />
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<ClaudeAI className="text-stone-600" />
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<Vercel className="text-stone-600" />
							</MiniIntegrationCard>
							<MiniIntegrationCard>
								<VisualStudioCode className="text-stone-600" />
							</MiniIntegrationCard>
						</div>
					</MiniIntegrationsGroup>
				</div>
				<p className="text-center text-[10px] text-stone-600">
					Unified OS layer for models, workflows, and integrations.
				</p>
			</div>
		</div>
	);
};
function PillarModularSlide() {
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
								eyebrow={
									<span className="font-mono">
										Pillar 1 — Modular unified data layer
									</span>
								}
								title="A Modular Single Source of Truth That Adapts to Your Science."
							/>
							<SlideBody as="ul" className="space-y-3 pt-4">
								<li>
									Define custom data models and ontologies that match your
									unique biology.
								</li>
								<li>
									Create new modules or integrate instruments and databases via
									a unified data layer.
								</li>
								<li>
									Adapt the platform as your assays and modalities
									evolve—future-proof by design.
								</li>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-mosaic",
					padded: true,
					content: (
						<div className="flex items-center justify-center h-full">
							<MiniIntegrationsMosaic />
						</div>
					),
				},
			]}
		/>
	);
}

function RealWorldSlide() {
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
								eyebrow="The OS in Action"
								title="From a New Sequence to a Key Insight in Hours."
							/>
							<SlideBody className="space-y-4 pt-4">
								<div>
									<div className="font-medium text-zinc-900">
										1. The Task (Branching):
									</div>
									<p>
										Anna branches off the Standard Binding Assay to test variant
										AF45 in a safe, versioned space.
									</p>
								</div>
								<div>
									<div className="font-medium text-zinc-900">
										2. Execution & Capture (AI-Native Ingest):
									</div>
									<p>Uploads a .csv and a photo of handwritten notes.</p>
								</div>
								<div>
									<div className="font-medium text-zinc-900">
										3. The OS at Work:
									</div>
									<ul className="space-y-1 ml-4 list-disc">
										<li>
											<span className="font-medium">
												AI-Powered Metadata Extraction:
											</span>{" "}
											Auto-populates Protein_ID, Compound_ID, etc.
										</li>
										<li>
											<span className="font-medium">Event-Based Workflow:</span>{" "}
											Triggers IC50 calculation and anomaly detection.
										</li>
										<li>
											<span className="font-medium">
												Integrated Knowledge Hub:
											</span>{" "}
											Links AF45 to internal sequences and UniProt.
										</li>
									</ul>
								</div>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-demo",
					padded: true,
					content: (
						<div className="flex items-center justify-center h-full"></div>
					),
				},
			]}
		/>
	);
}

function FlywheelSlide() {
	return (
		<TextOnlySlide
			className="bg-zinc-50"
			eyebrow="The R&D Flywheel"
			title={<span>The Lab OS Creates a Virtuous Cycle.</span>}
		>
			<div className="space-y-4">
				<ol className="list-decimal ml-5 space-y-1">
					<li>AI-Structured Data</li>
					<li>Faster, Parallel Experiments</li>
					<li>Deeper, Cross-Domain Insights</li>
					<li>Smarter, Data-Driven Hypotheses</li>
				</ol>
				<p>
					This is more than efficiency; it&apos;s a system that compounds. Better
					data → better analysis → smarter experiments → more high-quality data.
				</p>
			</div>
		</TextOnlySlide>
	);
}

function ValuationSlide() {
	return (
		<TextOnlySlide
			className="bg-background"
			eyebrow="From Day Zero to Maximum Valuation"
			title={<span>Your Data is Always Diligence-Ready.</span>}
		>
			<ul className="space-y-3">
				<li>
					<span className="font-medium text-zinc-900">Regulators:</span>{" "}
					Immutable, 21 CFR Part 11 audit trail makes filings a reporting
					exercise.
				</li>
				<li>
					<span className="font-medium text-zinc-900">Investors:</span>{" "}
					Demonstrate an R&D engine built for speed and scale.
				</li>
				<li>
					<span className="font-medium text-zinc-900">Partners:</span> Present a
					queryable, unimpeachable data asset that reduces diligence friction.
				</li>
			</ul>
		</TextOnlySlide>
	);
}

function FoundationPlanSlide() {
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
								eyebrow="Let's Build Your Foundation"
								title="Forward-Deployed Engineering, Embedded With Your Team"
							/>
							<SlideBody className="space-y-4 pt-4">
								<p>
									We partner as forward-deployed engineers, sitting with your
									scientists to ship value on day one. We co-own outcomes, not
									handoffs—integrating protocols, instruments, and analysis
									directly into your workflow.
								</p>
								<ul className="ml-4 list-disc space-y-1">
									<li>Embed alongside assay owners and ops leads</li>
									<li>
										Translate scientific intent into robust, automated workflows
									</li>
									<li>Tight loops: instrument data → OS events → decisions</li>
									<li>Audit-ready by default; designed for scalability</li>
								</ul>
								<p>
									This partnership model accelerates time-to-impact while
									building the foundation your team will iterate on.
								</p>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-visual",
					padded: true,
					content: (
						<div className="flex h-full items-center justify-center">
							<SequenceIllustration />
						</div>
					),
				},
			]}
		/>
	);
}

function TeamSlide() {
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
								eyebrow="Why Us"
								title="Built by a Team That Has Lived This Problem"
							/>
							<SlideBody as="ul" className="space-y-3 pt-4">
								<li>
									Built AI-native data systems across biotech and
									research—bridging lab workflows, knowledge graphs, and modern
									infra.
								</li>
								<li>
									Hands-on with LLMs, structured data models, and instrument
									integrations—shipping production systems end-to-end.
								</li>
								<li>
									Backgrounds from Berkeley, Recursion Pharma, Cambridge
									University, the Francis Crick Institute, and Flagship
									Pioneering.
								</li>
							</SlideBody>
						</div>
					),
				},
				{
					id: "right-logos",
					padded: true,
					content: (
						<div className="flex h-full items-center justify-center">
							<div className="w-full max-w-md">
								<LogoCloud
									logos={[
										{
											src: "/Recursion.png",
											alt: "Recursion Pharma",
											height: "32",
											className: "h-12",
										},
										{
											src: "/flagship.png",
											alt: "Flagship Pioneering",
											height: "32",
											className: "h-8 text-gray-500",
										},
										{
											src: "/Cambridge.png",
											alt: "Cambridge University",
											height: "12",
											className: "text-gray-500",
										},
										{
											src: "/crick.avif",
											alt: "Francis Crick Institute",
											className: "h-15 -mt-5 ",
										},
										{
											src: "/Berkeley.png",
											alt: "University of California, Berkeley",
											className: "h-5 text-gray-500",
										},
										{
											src: "/goldman.png",
											alt: "Goldman Sachs",
											className: "h-7 text-gray-500",
										},
									]}
								/>
							</div>
						</div>
					),
				},
			]}
		/>
	);
}

function QASlide() {
	return (
		<TextOnlySlide
			className="bg-background"
			align="center"
			title={<span>Q&A</span>}
		>
			<p className="text-stone-700">
				[Your Name] · [Title] · [email@company.com] · [Demo Link]
			</p>
		</TextOnlySlide>
	);
}

const slides = [
	{ id: 1, content: <TitleSlide /> },
	{ id: 2, content: <BiotechDilemmaSlide /> },
	{ id: 3, content: <WhatIfSlide /> },
	{ id: 4, content: <VisionSlide /> },
	{ id: 5, content: <NewParadigmSlide /> },
	{ id: 6, content: <PillarModularSlide /> },
	{ id: 7, content: <PillarAiNativeSlide /> },
	{ id: 8, content: <PillarIngestSlide /> },
	{ id: 9, content: <PillarBranchingSlide /> },
	{ id: 10, content: <PillarEventDrivenSlide /> },
	{ id: 11, content: <PillarApiSlide /> },
	{ id: 12, content: <RealWorldSlide /> },
	{ id: 13, content: <FlywheelSlide /> },
	{ id: 14, content: <ValuationSlide /> },
	{ id: 15, content: <FoundationPlanSlide /> },
	{ id: 16, content: <TeamSlide /> },
	{ id: 17, content: <QASlide /> },
];

export default function SalesDeck() {
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
