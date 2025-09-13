"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Logo } from "@/components/logo"
import OpenAI from "@/components/logos/open-ai"
import ClaudeAI from "@/components/logos/claude"
import { Vercel } from "@/components/logos/vercel"
import VisualStudioCode from "@/components/logos/vs-code"
import { TextOnlySlide } from "@/components/slides/text-only-slide"

import { GridSlide, twoTallTwoSmall } from "@/components/slides/grid-slide"
import { SlideFrame } from "@/components/slides/slide-frame"
import { BranchingIllustration } from "@/components/branching-illustration"

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
          The AI-native Lab Operating System
        </h1>
        <p className="text-sm text-stone-600 max-w-2xl mx-auto">
          A New Foundation for [Client's Company Name]
        </p>
      </div>
    </SlideFrame>
  )
}

function BrokenStateSlide() {
  return (
    <TextOnlySlide
      className="bg-zinc-50"
      eyebrow="The Broken State"
      title={<span>Your most valuable asset—your data—is scattered and dying.</span>}
    >
      <ul className="space-y-3">
        <li>Each tool holds a piece of the puzzle, but none see the whole picture.</li>
        <li>Scientists waste time on digital logistics: copying data and reconstructing experiments.</li>
        <li>Context is lost, reproducibility suffers, and compliance becomes a manual cleanup project.</li>
      </ul>
    </TextOnlySlide>
  )
}

function NewParadigmSlide() {
  return (
    <TextOnlySlide
      className="bg-background"
      eyebrow="The New Paradigm"
      title={<span>A Foundational OS for Human-AI Collaboration.</span>}
    >
      <ul className="space-y-3">
        <li>A single source of truth that powers your entire R&D lifecycle.</li>
        <li>It doesn't replace every tool; it unifies them.</li>
        <li>Designed from first principles for humans and AI agents to collaborate on pristine data.</li>
      </ul>
    </TextOnlySlide>
  )
}

function PillarAiNativeSlide() {
  return (
    <TextOnlySlide
      className="bg-zinc-50"
      eyebrow="Pillar 1 — Intelligence Layer"
      title={<span>AI as a Core Team Member, Not a Gadget.</span>}
    >
      <ul className="space-y-3">
        <li>LLMs are woven into the fabric of the OS—never an afterthought.</li>
        <li>Agents read, write, and reason about your data to enforce structure and automate tasks.</li>
        <li>The AI Cursor becomes your command line to query, analyze, and visualize in natural language.</li>
      </ul>
    </TextOnlySlide>
  )
}

function PillarBranchingSlide() {
  return (
    <GridSlide
      className="bg-background"
      gridClassName="grid-cols-2 auto-rows-fr"
      gridInnerClassName="divide-foreground/10"
      items={[
        {
          id: 'left-content',
          padded: true,
          content: (
            <div className="space-y-3">
              <div className="text-xs font-medium uppercase tracking-wide text-stone-500">Pillar 2 — Collaboration Layer</div>
              <h3 className="text-xl font-semibold text-zinc-900">Git-Style Branching for Science.</h3>
              <ul className="space-y-3 text-stone-700">
                <li>Explore hypotheses in isolated branches without corrupting validated data.</li>
                <li>Enable true parallel work across humans and AI agents.</li>
                <li>Transparent approval and merge with an audit trail ensures 21 CFR Part 11 compliance.</li>
              </ul>
              <div className="pt-2 text-[12px] text-stone-600">
                <div className="font-mono">Example:</div>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Human branch: tweak protocol — adds note, adjusts incubation time.</li>
                  <li>Agent branch: auto-calculates IC50 and flags outlier.</li>
                  <li>Merge: review, approve, and update the Golden Record.</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 'right-visual',
          padded: true,
          content: (
            <div className="flex h-full items-center justify-center">
              <BranchingIllustration className="max-w-[640px] w-full" />
            </div>
          ),
        },
      ]}
    />
  )
}

// Compact integrations mosaic inspired by `components/integrations-9.tsx`
const MiniIntegrationCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('bg-background ring-foreground/10 flex aspect-square size-full rounded-md border border-transparent shadow-sm ring-1 *:m-auto', className)}>
      {children}
    </div>
  )
}

const MiniIntegrationsGroup = ({ children, label, className }: { children?: React.ReactNode; label?: string; className?: string }) => {
  return (
    <div className={cn('ring-foreground/5 relative z-10 grid grid-rows-[auto_1fr] gap-1 rounded-xl border border-transparent bg-white/70 p-1.5 shadow ring-1', className)}>
      <span className="text-stone-600 text-center text-[10px] leading-none">{label}</span>
      {children}
    </div>
  )
}

const MiniIntegrationsMosaic = () => {
  return (
    <div className="relative rounded-2xl border bg-white/60 p-3">
      <div
        aria-hidden
        className="mask-radial-to-85% absolute inset-0 m-auto bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] opacity-5 [background-size:12px_12px]"
      />
      <div className="relative space-y-2">
        <div className="text-center">
          <span className="font-mono text-[11px] text-stone-700 tracking-tight">modular platform</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <MiniIntegrationsGroup label="Data Models">
            <div className="grid grid-cols-2 gap-1">
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">Sequences</span></MiniIntegrationCard>
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">Assays</span></MiniIntegrationCard>
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">Images</span></MiniIntegrationCard>
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">Compounds</span></MiniIntegrationCard>
            </div>
          </MiniIntegrationsGroup>
          <MiniIntegrationsGroup label="Workflows">
            <div className="grid grid-cols-2 gap-1">
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">Events</span></MiniIntegrationCard>
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">LLM</span></MiniIntegrationCard>
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">QC</span></MiniIntegrationCard>
              <MiniIntegrationCard><span className="font-mono text-[10px] text-stone-700">Audit</span></MiniIntegrationCard>
            </div>
          </MiniIntegrationsGroup>
          <MiniIntegrationsGroup label="External Systems">
            <div className="grid grid-cols-2 gap-1">
              <MiniIntegrationCard><OpenAI className="text-stone-600" /></MiniIntegrationCard>
              <MiniIntegrationCard><ClaudeAI className="text-stone-600" /></MiniIntegrationCard>
              <MiniIntegrationCard><Vercel className="text-stone-600" /></MiniIntegrationCard>
              <MiniIntegrationCard><VisualStudioCode className="text-stone-600" /></MiniIntegrationCard>
            </div>
          </MiniIntegrationsGroup>
        </div>
        <p className="text-center text-[10px] text-stone-600">Unified OS layer for models, workflows, and integrations.</p>
      </div>
    </div>
  )
}
function PillarModularSlide() {
  return (
    <GridSlide
      className="bg-zinc-50"
      gridClassName="grid-cols-2 auto-rows-fr"
      gridInnerClassName="divide-foreground/10"
      items={[
        {
          id: 'left-content',
          padded: true,
          content: (
            <div className="space-y-3">
              <div className="text-xs font-medium uppercase tracking-wide text-stone-500">Pillar 3 — Extensible Foundation</div>
              <h3 className="text-xl font-semibold text-zinc-900">An OS That Conforms to Your Science.</h3>
              <ul className="space-y-3 text-stone-700">
                <li>Define custom data models and ontologies that match your unique biology.</li>
                <li>Create new modules or integrate instruments and databases via a unified data layer.</li>
                <li>Adapt the platform as your assays and modalities evolve—future-proof by design.</li>
              </ul>
            </div>
          ),
        },
        {
          id: 'right-mosaic',
          padded: true,
          content: (
            <div className="flex items-center justify-center h-full">
              <MiniIntegrationsMosaic />
            </div>
          ),
        },
      ]}
    />
  )
}

function RealWorldSlide() {
  return (
    <GridSlide
      className="bg-background"
      gridClassName="grid-cols-2 auto-rows-fr"
      gridInnerClassName="divide-foreground/10"
      items={twoTallTwoSmall({
        left: {
          id: 'left-tall',
          padded: true,
          content: (
            <div className="space-y-3">
              <div className="text-xs font-medium uppercase tracking-wide text-stone-500">The OS in Action</div>
              <h3 className="text-2xl font-semibold text-zinc-900">From a New Sequence to a Key Insight in Hours.</h3>
              <ul className="space-y-3">
                <li><span className="font-medium text-zinc-900">1. The Task (Branching):</span> Anna branches off the Standard Binding Assay to test variant AF45 in a safe, versioned space.</li>
                <li><span className="font-medium text-zinc-900">2. Execution & Capture (AI-Native Ingest):</span> Uploads a .csv and a photo of handwritten notes.</li>
                <li><span className="font-medium text-zinc-900">3. The OS at Work:</span></li>
                <ul className="ml-5 list-disc space-y-2">
                  <li><span className="font-medium text-zinc-900">AI-Powered Metadata Extraction:</span> Auto-populates Protein_ID, Compound_ID, etc.</li>
                  <li><span className="font-medium text-zinc-900">Event-Based Workflow:</span> Triggers IC50 calculation and anomaly detection.</li>
                  <li><span className="font-medium text-zinc-900">Integrated Knowledge Hub:</span> Links AF45 to internal sequences and UniProt.</li>
                </ul>
              </ul>
            </div>
          ),
        },
        right: {
          id: 'right-tall',
          padded: true,
          content: (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-zinc-900">Insight & Merge</h3>
              <ul className="ml-5 list-disc space-y-2 text-stone-700">
                <li>Use AI Cursor to compare binding curves; plot appears instantly.</li>
                <li>Submit merge request; review data, plots, and audit trail; approve to update the Golden Record.</li>
              </ul>
            </div>
          ),
        },
        bottomLeft: {
          id: 'bottom-left',
          padded: true,
          content: <div className="text-sm text-stone-600">Notes: All data changes traceable and reversible.</div>,
        },
        bottomRight: {
          id: 'bottom-right',
          padded: true,
          content: <div className="text-sm text-stone-600">Metric: 3× faster to validated insight.</div>,
        },
      })}
    />
  )
}

function FlywheelSlide() {
  return (
    <TextOnlySlide
      className="bg-zinc-50"
      eyebrow="The R&D Flywheel"
      title={<span>The Lab OS Creates a Virtuous Cycle.</span>}
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div />
        <div className="space-y-4">
          <ol className="list-decimal ml-5 space-y-1">
            <li>AI-Structured Data</li>
            <li>Faster, Parallel Experiments</li>
            <li>Deeper, Cross-Domain Insights</li>
            <li>Smarter, Data-Driven Hypotheses</li>
          </ol>
          <p>This is more than efficiency; it's a system that compounds. Better data → better analysis → smarter experiments → more high-quality data.</p>
        </div>
      </div>
    </TextOnlySlide>
  )
}

function ValuationSlide() {
  return (
    <TextOnlySlide
      className="bg-background"
      eyebrow="From Day Zero to Maximum Valuation"
      title={<span>Your Data is Always Diligence-Ready.</span>}
    >
      <ul className="space-y-3">
        <li><span className="font-medium text-zinc-900">Regulators:</span> Immutable, 21 CFR Part 11 audit trail makes filings a reporting exercise.</li>
        <li><span className="font-medium text-zinc-900">Investors:</span> Demonstrate an R&D engine built for speed and scale.</li>
        <li><span className="font-medium text-zinc-900">Partners:</span> Present a queryable, unimpeachable data asset that reduces diligence friction.</li>
      </ul>
    </TextOnlySlide>
  )
}

function FoundationPlanSlide() {
  return (
    <TextOnlySlide
      className="bg-zinc-50"
      eyebrow="Let's Build Your Foundation"
      title={<span>Your Partner in Building a Generational Biotech.</span>}
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-xs font-medium uppercase tracking-wide text-stone-500">Phase 1: Foundation (Weeks 1–2)</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Onboard your team to the Lab OS.</li>
              <li>Define core data models (Proteins, Assays).</li>
              <li>Deploy AI agents for initial protocols.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-medium uppercase tracking-wide text-stone-500">Phase 2: Acceleration (Months 1–3)</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Implement event-driven workflows.</li>
              <li>Integrate external knowledge hubs and internal software.</li>
              <li>Scale Human–AI collaboration across projects.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-medium uppercase tracking-wide text-stone-500">Ongoing Partnership</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Evolve the OS with your science.</li>
              <li>From first discovery to first-in-human.</li>
            </ul>
          </div>
        </div>
      </div>
    </TextOnlySlide>
  )
}

function QASlide() {
  return (
    <TextOnlySlide className="bg-background" align="center" title={<span>Q&A</span>}>
      <p className="text-stone-700">[Your Name] · [Title] · [email@company.com] · [Demo Link]</p>
    </TextOnlySlide>
  )
}

const slides = [
  { id: 1, content: <TitleSlide /> },
  { id: 2, content: <BrokenStateSlide /> },
  { id: 3, content: <NewParadigmSlide /> },
  { id: 4, content: <PillarAiNativeSlide /> },
  { id: 5, content: <PillarBranchingSlide /> },
  { id: 6, content: <PillarModularSlide /> },
  { id: 7, content: <RealWorldSlide /> },
  { id: 8, content: <FlywheelSlide /> },
  { id: 9, content: <ValuationSlide /> },
  { id: 10, content: <FoundationPlanSlide /> },
  { id: 11, content: <QASlide /> },
]

export default function SalesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault()
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev))
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [totalSlides])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <div className="w-full h-full">
        {slides[currentSlide].content}
      </div>

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
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
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
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
