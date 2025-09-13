"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {motion} from "motion/react"

// Import existing components
import { Logo } from "@/components/logo"
import FeaturesSection from "@/components/features-1"
import { ChartIllustration } from "@/components/chart-illustration"
import { InvoiceIllustration } from "@/components/invoice-illustration"
import { MessageIllustration } from "@/components/message-illustration"
import LogoCloud from "@/components/logo-cloud"

interface SlideProps {
  children: React.ReactNode
  className?: string
}

function Slide({ children, className }: SlideProps) {
  return (
    <div className={cn("w-full h-screen flex flex-col justify-center items-center px-8", className)}>
      {children}
    </div>
  )
}

const slides = [
  // Slide 1: Hero/Title
  {
    id: 1,
    content: (
      <Slide className="bg-background text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-12">
            <Logo className="h-12 w-auto" />
          </div>
          <h1 className="text-6xl font-bold tracking-tight">
            Transform Your
            <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent"> Business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful analytics, streamlined workflows, and intelligent automation
            to accelerate your team's productivity.
          </p>
          <Button size="lg" className="mt-8">
            Get Started Today
          </Button>
        </div>
      </Slide>
    )
  },

  // Slide 2: Problem Statement
  {
    id: 2,
    content: (
      <Slide className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold">Scattered Data</h3>
              <p className="text-muted-foreground">Analytics spread across multiple tools making insights hard to find</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold">Manual Processes</h3>
              <p className="text-muted-foreground">Time-consuming workflows that slow down your team</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold">Poor Integration</h3>
              <p className="text-muted-foreground">Tools that don't work together, creating silos</p>
            </div>
          </div>
        </div>
      </Slide>
    )
  },

  // Slide 3: Solution Overview
  {
    id: 3,
    content: (
      <Slide className="bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-xl text-muted-foreground">Everything you need in one powerful platform</p>
          </div>
          <FeaturesSection />
        </div>
      </Slide>
    )
  },

  // Slide 4: Key Features
  {
    id: 4,
    content: (
      <Slide className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Real-time Analytics</h3>
                <p className="text-muted-foreground text-lg">
                  Track performance metrics with live data visualization and customizable dashboards
                  that help you make informed decisions faster.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Automated Workflows</h3>
                <p className="text-muted-foreground text-lg">
                  Streamline repetitive tasks and reduce manual work with intelligent automation
                  that scales with your business needs.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <ChartIllustration />
            </div>
          </div>
        </div>
      </Slide>
    )
  },

  // Slide 5: Benefits
  {
    id: 5,
    content: (
      <Slide className="bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <InvoiceIllustration />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Transform Results</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">75% Time Savings</h3>
                    <p className="text-muted-foreground">Automate manual processes and focus on what matters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">3x Faster Insights</h3>
                    <p className="text-muted-foreground">Get actionable data when you need it most</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">99.9% Uptime</h3>
                    <p className="text-muted-foreground">Reliable platform you can depend on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    )
  },

  // Slide 6: Social Proof
  {
    id: 6,
    content: (
      <Slide className="bg-muted/20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold">Trusted by Industry Leaders</h2>
          <LogoCloud />
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl italic text-muted-foreground mb-6">
              "This platform transformed how we handle our data analytics. We've seen a 300%
              improvement in our decision-making speed."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <MessageIllustration />
              <div className="text-left">
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    )
  },

  // Slide 7: Pricing
  {
    id: 7,
    content: (
      <Slide className="bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-semibold">Starter</h3>
              <div className="text-3xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li>✓ Basic analytics</li>
                <li>✓ 5 team members</li>
                <li>✓ Email support</li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </div>
            <div className="border-2 border-primary rounded-lg p-8 space-y-4 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold">Professional</h3>
              <div className="text-3xl font-bold">$99<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li>✓ Advanced analytics</li>
                <li>✓ 20 team members</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <div className="text-3xl font-bold">Custom</div>
              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li>✓ Everything in Pro</li>
                <li>✓ Unlimited users</li>
                <li>✓ 24/7 phone support</li>
                <li>✓ On-premise deployment</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </Slide>
    )
  },

  // Slide 8: Call to Action
  {
    id: 8,
    content: (
      <Slide className="bg-gradient-to-br from-purple-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to drive growth and efficiency.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm opacity-75 mt-12">
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </Slide>
    )
  }
]

export default function SlideDeck() {
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault()
        if (currentSlide < slides.length - 1) nextSlide()
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        if (currentSlide > 0) prevSlide()
      } else if (event.key >= "1" && event.key <= "8") {
        event.preventDefault()
        const slideNum = parseInt(event.key) - 1
        if (slideNum >= 0 && slideNum < slides.length) {
          goToSlide(slideNum)
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="w-full h-full">
        {slides[currentSlide].content}
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {/* Glass Background */}
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full" />

          {/* Navigation Content */}
          <div className="relative flex items-center space-x-4 px-6 py-3">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="h-8 w-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 disabled:text-white/30 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Slide Indicators */}
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

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="h-8 w-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 disabled:text-white/30 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Slide Counter */}
            <div className="text-sm text-white/70 ml-4 font-mono tracking-wider">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Keyboard Navigation */}
      <div className="sr-only">
        Press arrow keys to navigate slides
      </div>
    </div>
  )
}
