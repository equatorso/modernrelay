"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Zap, Sparkles, GitBranch, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Logo } from "@/components/logo"
import { ChartIllustration } from "@/components/chart-illustration"
import { InvoiceIllustration } from "@/components/invoice-illustration"
import { IntegrationsIllustration } from "@/components/integrations-illustration"
import { DropdownIllustration } from "@/components/dropdown-illustration"
import LogoCloud from "@/components/logo-cloud"
import { Table } from "@/components/table"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SlideProps {
  children: React.ReactNode
  className?: string
}

function Slide({ children, className }: SlideProps) {
  return (
    <div className={cn("w-full h-screen flex flex-col justify-center items-center p-8", className)}>
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  )
}

// --- Individual Slide Components ---

function TitleSlide() {
  return (
    <Slide className="bg-background text-center">
      <div className="space-y-8">
        <Logo className="h-12 w-auto mx-auto mb-12" />
        <h1 className="text-6xl font-bold tracking-tight">
          The Foundation for AI-Powered Biotechnology
        </h1>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          Your single source of truth for clean, reproducible, and collaborative science.
        </p>
      </div>
    </Slide>
  );
}

function ProblemSlide() {
  return (
    <Slide className="bg-muted/30">
      <div className="text-center space-y-16">
        <h2 className="text-5xl font-bold">The Hidden Cost of Data Debt</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-full h-48 flex items-center justify-center"><ChartIllustration /></div>
            <h3 className="text-2xl font-semibold">Fragmented Data</h3>
            <p className="text-lg text-muted-foreground">Silos in spreadsheets and disconnected tools cripple your ability to see the bigger picture.</p>
          </div>
          <div className="space-y-4">
            <div className="w-full h-48 flex items-center justify-center"><InvoiceIllustration /></div>
            <h3 className="text-2xl font-semibold">Metadata Chaos</h3>
            <p className="text-lg text-muted-foreground">Manual, inconsistent metadata makes results hard to reproduce and AI models impossible to train.</p>
          </div>
          <div className="space-y-4">
            <div className="w-full h-48 flex items-center justify-center"><IntegrationsIllustration /></div>
            <h3 className="text-2xl font-semibold">Team Friction</h3>
            <p className="text-lg text-muted-foreground">High-friction tools take scientists away from the bench, slowing the pace of discovery.</p>
          </div>
        </div>
      </div>
    </Slide>
  )
}

function FoundationSlide() {
    return (
        <Slide className="bg-background">
            <div className="text-center space-y-12">
                <h2 className="text-5xl font-bold">A Living System of Record, Built for Biology</h2>
                <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
                    Introducing a unified platform where your data is born structured, connected, and AI-ready—making compliance and reproducibility byproducts of great science, not chores.
                </p>
                <div className="pt-8">
                    <Table />
                </div>
            </div>
        </Slide>
    )
}

function CollaborationSlide() {
  return (
    <Slide className="bg-muted/20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">Capture Every Detail, Effortlessly</h2>
          <p className="text-xl text-muted-foreground">
            Our modular repositories adapt to your science. From protein sequences to imaging data, define your data models once. Then, let your team (and our AI) capture data from anywhere with near-zero friction.
          </p>
            <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3"><BadgeCheck className="text-primary size-6" /> Custom data models & ontologies</li>
                <li className="flex items-center gap-3"><BadgeCheck className="text-primary size-6" /> Ingest from notes, CSVs, voice, and code</li>
                <li className="flex items-center gap-3"><BadgeCheck className="text-primary size-6" /> Granular permissions and audit trails</li>
            </ul>
        </div>
        <div>
            <Card className="p-8">
                 <h3 className="font-semibold mb-4">Example: Protein Sequence Repository</h3>
                 <div className="space-y-2 font-mono text-sm">
                    <p><span className="text-primary">Entry ID:</span> PXN_0012</p>
                    <p><span className="text-primary">Sequence:</span> MTEYKLVVVGAG... </p>
                    <p><span className="text-primary">Source:</span> Lab Protocol #42</p>
                    <p><span className="text-primary">Extracted By:</span> AI Agent (GPT-4)</p>
                    <p><span className="text-primary">Timestamp:</span> 2025-09-13T14:00:00Z</p>
                 </div>
            </Card>
        </div>
      </div>
    </Slide>
  )
}

function AiCopilotSlide() {
    return (
        <Slide className="bg-background">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <DropdownIllustration />
                </div>
                <div className="space-y-6">
                    <h2 className="text-5xl font-bold">Your Data's Intelligent Partner</h2>
                    <p className="text-xl text-muted-foreground">
                        Don't just store data; collaborate with it. Our AI copilot understands your scientific context to automate metadata extraction, generate insights, and help you query your entire knowledge base in plain English.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="space-y-2">
                           <Sparkles className="text-primary" />
                           <h3 className="font-semibold text-lg">Automated Metadata</h3>
                           <p className="text-muted-foreground">Extracts key info from protocols, scripts, and notes.</p>
                        </div>
                        <div className="space-y-2">
                           <Zap className="text-primary" />
                           <h3 className="font-semibold text-lg">Instant Analysis</h3>
                           <p className="text-muted-foreground">Generate plots, summaries, and new hypotheses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

const BranchingIllustration = () => (
    <div className="relative w-full h-64 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-muted-foreground/30 rounded-full" />
        <div className="absolute top-1/2 left-0 w-1/4 h-1 bg-primary rounded-full" />

        <div className="absolute left-1/4 w-3/4 h-24 border-b-2 border-l-2 border-dashed border-primary rounded-bl-full" />
        <div className="absolute left-1/4 w-3/4 h-24 border-t-2 border-l-2 border-dashed border-sky-500 rounded-tl-full" />
        
        <div className="absolute top-4 right-20 flex items-center gap-2 bg-background p-2 rounded-lg">
            <Avatar className="size-8"><AvatarImage src="/avatars/shadcn.jpg" /><AvatarFallback>SC</AvatarFallback></Avatar>
            <span className="font-semibold text-sky-500">Scientist's Branch</span>
        </div>

        <div className="absolute bottom-4 right-20 flex items-center gap-2 bg-background p-2 rounded-lg">
            <Sparkles className="text-primary size-8" />
            <span className="font-semibold text-primary">AI Agent's Branch</span>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center gap-2 p-3 bg-green-500/10 text-green-600 rounded-lg border border-green-500/20">
            <BadgeCheck />
            <span className="font-semibold">Merge Approved</span>
        </div>
    </div>
);


function ReproducibilitySlide() {
    return (
        <Slide className="bg-muted/20">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-5xl font-bold">Experiment in Parallel. Merge with Confidence.</h2>
                    <p className="text-xl text-muted-foreground">
                        Our Git-inspired branching model allows your team and AI agents to work in parallel. Propose changes, run virtual experiments, and merge back to the main dataset with a full audit trail and approval process.
                    </p>
                    <p className="text-xl text-muted-foreground">This ensures both innovation speed and scientific rigor.</p>
                </div>
                <div>
                    <BranchingIllustration />
                </div>
            </div>
        </Slide>
    )
}

function EcosystemSlide() {
    return (
        <Slide className="bg-background">
            <div className="text-center space-y-12">
                <h2 className="text-5xl font-bold">An Automated, Connected Lab</h2>
                <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
                    Automate routine tasks with event-based workflows and connect to a universe of public databases and your existing lab software.
                </p>
                <LogoCloud />
            </div>
        </Slide>
    );
}

function CtaSlide() {
  return (
    <Slide className="bg-gradient-to-br from-purple-600 to-teal-600 text-white">
      <div className="text-center space-y-8">
        <h2 className="text-5xl font-bold">Build on a Foundation of Clean, Collaborative Data</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Ensure reproducibility, accelerate your AI roadmap, and get ready for the future of discovery.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center pt-8">
          <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
            Schedule a Demo
          </Button>
        </div>
         <div className="flex justify-center items-center space-x-8 text-sm opacity-75 pt-8">
            <span>✓ Built for Compliance</span>
            <span>✓ Deploys in Your Cloud</span>
            <span>✓ Dedicated Onboarding</span>
          </div>
      </div>
    </Slide>
  )
}

const slides = [
  { id: 1, content: <TitleSlide /> },
  { id: 2, content: <ProblemSlide /> },
  { id: 3, content: <FoundationSlide /> },
  { id: 4, content: <CollaborationSlide /> },
  { id: 5, content: <AiCopilotSlide /> },
  { id: 6, content: <ReproducibilitySlide /> },
  { id: 7, content: <EcosystemSlide /> },
  { id: 8, content: <CtaSlide /> },
]

export default function SalesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
        if (currentSlide < slides.length - 1) nextSlide()
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        if (currentSlide > 0) prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide])

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
              {slides.map((_, index) => (
                <button
                  key={index}
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
