"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Logo } from "@/components/logo"

interface SlideProps {
  children: React.ReactNode
  className?: string
}

function Slide({ children, className }: SlideProps) {
  return (
    <div className={cn("w-full h-screen flex flex-col justify-center items-center px-6", className)}>
      <div className="w-full max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  )
}

// --- Text-first Slide Components (smaller typography, black/stone palette) ---

function TitleSlide() {
  return (
    <Slide className="bg-background">
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center gap-6">
          <Logo className="h-8 w-auto" />
          <span className="text-stone-400 text-sm">×</span>
          <div className="h-8 w-20 rounded bg-stone-200/60" aria-hidden />
        </div>
        <h1 className="text-2xl font-semibold leading-tight text-zinc-900">
          The AI-native Lab Operating System
        </h1>
        <p className="text-base text-stone-600 max-w-2xl mx-auto">
          A New Foundation for [Client's Company Name]
        </p>
      </div>
    </Slide>
  )
}

function BrokenStateSlide() {
  return (
    <Slide className="bg-zinc-50">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">The Broken State</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">Your most valuable asset—your data—is scattered and dying.</h3>
        </div>
        <ul className="space-y-3 text-base text-stone-700">
          <li>Each tool holds a piece of the puzzle, but none see the whole picture.</li>
          <li>Scientists waste time on digital logistics: copying data and reconstructing experiments.</li>
          <li>Context is lost, reproducibility suffers, and compliance becomes a manual cleanup project.</li>
        </ul>
      </div>
    </Slide>
  )
}

function NewParadigmSlide() {
  return (
    <Slide className="bg-background">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">The New Paradigm</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">A Foundational OS for Human-AI Collaboration.</h3>
        </div>
        <ul className="space-y-3 text-base text-stone-700">
          <li>A single source of truth that powers your entire R&D lifecycle.</li>
          <li>It doesn't replace every tool; it unifies them.</li>
          <li>Designed from first principles for humans and AI agents to collaborate on pristine data.</li>
        </ul>
      </div>
    </Slide>
  )
}

function PillarAiNativeSlide() {
  return (
    <Slide className="bg-zinc-50">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">Pillar 1 — Intelligence Layer</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">AI as a Core Team Member, Not a Gadget.</h3>
        </div>
        <ul className="space-y-3 text-base text-stone-700">
          <li>LLMs are woven into the fabric of the OS—never an afterthought.</li>
          <li>Agents read, write, and reason about your data to enforce structure and automate tasks.</li>
          <li>The AI Cursor becomes your command line to query, analyze, and visualize in natural language.</li>
        </ul>
      </div>
    </Slide>
  )
}

function PillarBranchingSlide() {
  return (
    <Slide className="bg-background">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">Pillar 2 — Collaboration Layer</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">Git-Style Branching for Science.</h3>
        </div>
        <ul className="space-y-3 text-base text-stone-700">
          <li>Explore hypotheses in isolated branches without corrupting validated data.</li>
          <li>Enable true parallel work across humans and AI agents.</li>
          <li>Transparent approval and merge with an audit trail ensures 21 CFR Part 11 compliance.</li>
        </ul>
      </div>
    </Slide>
  )
}

function PillarModularSlide() {
  return (
    <Slide className="bg-zinc-50">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">Pillar 3 — Extensible Foundation</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">An OS That Conforms to Your Science.</h3>
        </div>
        <ul className="space-y-3 text-base text-stone-700">
          <li>Define custom data models and ontologies that match your unique biology.</li>
          <li>Create new modules or integrate instruments and databases via a unified data layer.</li>
          <li>Adapt the platform as your assays and modalities evolve—future-proof by design.</li>
        </ul>
      </div>
    </Slide>
  )
}

function RealWorldSlide() {
  return (
    <Slide className="bg-background">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">The OS in Action</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">From a New Sequence to a Key Insight in Hours.</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-base text-stone-700">
            <li><span className="font-medium text-zinc-900">1. The Task (Branching):</span> Anna branches off the Standard Binding Assay to test variant AF45 in a safe, versioned space.</li>
            <li><span className="font-medium text-zinc-900">2. Execution & Capture (AI-Native Ingest):</span> Uploads a .csv and a photo of handwritten notes.</li>
            <li><span className="font-medium text-zinc-900">3. The OS at Work:</span></li>
            <ul className="ml-5 list-disc space-y-2 text-stone-700">
              <li><span className="font-medium text-zinc-900">AI-Powered Metadata Extraction:</span> Auto-populates Protein_ID, Compound_ID, etc.</li>
              <li><span className="font-medium text-zinc-900">Event-Based Workflow:</span> Triggers IC50 calculation and anomaly detection.</li>
              <li><span className="font-medium text-zinc-900">Integrated Knowledge Hub:</span> Links AF45 to internal sequences and UniProt.</li>
            </ul>
          </ul>
          <ul className="space-y-3 text-base text-stone-700">
            <li><span className="font-medium text-zinc-900">4. Insight & Merge:</span></li>
            <ul className="ml-5 list-disc space-y-2 text-stone-700">
              <li>Use AI Cursor to compare binding curves; plot appears instantly.</li>
              <li>Submit merge request; review data, plots, and audit trail; approve to update the Golden Record.</li>
            </ul>
          </ul>
        </div>
      </div>
    </Slide>
  )
}

function FlywheelSlide() {
  return (
    <Slide className="bg-zinc-50">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">The R&D Flywheel</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">The Lab OS Creates a Virtuous Cycle.</h3>
        </div>
        <div className="space-y-4">
          <ol className="list-decimal ml-5 space-y-1 text-base text-stone-700">
            <li>AI-Structured Data</li>
            <li>Faster, Parallel Experiments</li>
            <li>Deeper, Cross-Domain Insights</li>
            <li>Smarter, Data-Driven Hypotheses</li>
          </ol>
          <p className="text-base text-stone-700">This is more than efficiency; it's a system that compounds. Better data → better analysis → smarter experiments → more high-quality data.</p>
        </div>
      </div>
    </Slide>
  )
}

function ValuationSlide() {
  return (
    <Slide className="bg-background">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">From Day Zero to Maximum Valuation</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">Your Data is Always Diligence-Ready.</h3>
        </div>
        <ul className="space-y-3 text-base text-stone-700">
          <li><span className="font-medium text-zinc-900">Regulators:</span> Immutable, 21 CFR Part 11 audit trail makes filings a reporting exercise.</li>
          <li><span className="font-medium text-zinc-900">Investors:</span> Demonstrate an R&D engine built for speed and scale.</li>
          <li><span className="font-medium text-zinc-900">Partners:</span> Present a queryable, unimpeachable data asset that reduces diligence friction.</li>
        </ul>
      </div>
    </Slide>
  )
}

function FoundationPlanSlide() {
  return (
    <Slide className="bg-zinc-50">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">Let's Build Your Foundation</h2>
          <h3 className="text-2xl font-semibold text-zinc-900">Your Partner in Building a Generational Biotech.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-base text-stone-700">
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
    </Slide>
  )
}

function QASlide() {
  return (
    <Slide className="bg-background">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">Q&A</h2>
        <p className="text-base text-stone-700">[Your Name] · [Title] · [email@company.com] · [Demo Link]</p>
      </div>
    </Slide>
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
