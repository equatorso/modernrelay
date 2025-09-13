'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUp, Globe, Plus, Sparkle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { TextShimmer } from '@/components/ui/text-shimmer'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar } from 'recharts'

type LimsAiChatDemoProps = {
  className?: string
  bare?: boolean
  showUserMessage?: boolean
  showPrompt?: boolean
  scroll?: boolean
  repeat?: boolean
}

export default function LimsAiChatDemo({ className, bare = false, showUserMessage = true, showPrompt = true, scroll = true, repeat = false }: LimsAiChatDemoProps) {
  const [visibleSteps, setVisibleSteps] = useState(0)
  const timeouts = useRef<number[]>([])
  const messagesRef = useRef<HTMLDivElement | null>(null)
  const [actionIndex, setActionIndex] = useState(0)
  const spinTimeoutRef = useRef<number | null>(null)

  const actions = useMemo(() => [
    'Fetching Binding assays (7 days)…',
    'Computing IC50…',
    'Running QC checks…',
  ], [])

  const bindingCurveData = useMemo(
    () => [
      { x: -9, response: 98 },
      { x: -8.5, response: 92 },
      { x: -8, response: 81 },
      { x: -7.5, response: 62 },
      { x: -7, response: 41 },
      { x: -6.5, response: 24 },
      { x: -6, response: 12 },
    ],
    []
  )

  const residualsData = useMemo(
    () => [
      { i: 1, r: -1.2 },
      { i: 2, r: 0.5 },
      { i: 3, r: 0.9 },
      { i: 4, r: -0.3 },
      { i: 5, r: -2.4 },
      { i: 6, r: 1.1 },
      { i: 7, r: 0.2 },
    ],
    []
  )

  useEffect(() => {
    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay)
      timeouts.current.push(id)
    }

    const play = () => {
      // Reset
      setVisibleSteps(0)
      // 1) User asks a high-value LIMS question
      schedule(() => setVisibleSteps(1), 600)
      // 2) AI typing indicator
      schedule(() => setVisibleSteps(2), 2000)
      // 3) AI first response chunk (analysis + IC50)
      schedule(() => setVisibleSteps(3), 6200)
      // 4) AI follow-up (QC + merge prepared)
      schedule(() => setVisibleSteps(4), 9000)
      // 5) Replay (if enabled)
      if (repeat) {
        schedule(() => play(), 22000)
      }
    }

    play()
    return () => {
      timeouts.current.forEach((id) => window.clearTimeout(id))
      timeouts.current = []
    }
  }, [repeat])

  // Auto-scroll to bottom when new steps appear
  useEffect(() => {
    const container = messagesRef.current
    if (!container) return
    // Ensure dependency is used; triggers on step changes
    void visibleSteps
    // Use rAF to ensure DOM is painted
    const id = window.requestAnimationFrame(() => {
      container.scrollTop = container.scrollHeight
    })
    return () => window.cancelAnimationFrame(id)
  }, [visibleSteps])

  // Cycle shimmer actions during typing stage with slot-machine (one-armed bandit) deceleration
  useEffect(() => {
    if (visibleSteps !== 2) {
      if (spinTimeoutRef.current) {
        window.clearTimeout(spinTimeoutRef.current)
        spinTimeoutRef.current = null
      }
      return
    }
    setActionIndex(0)
    let tick = 0
    const totalTicks = 7
    const minDelayMs = 280
    const maxDelayMs = 1100

    const spin = () => {
      setActionIndex((prev) => (prev + 1) % actions.length)
      tick += 1
      if (tick >= totalTicks) {
        // Land on the final action to signal readiness
        setActionIndex(actions.length - 1)
        spinTimeoutRef.current = null
        return
      }
      const t = tick / totalTicks
      const easeOutQuad = 1 - Math.pow(1 - t, 2)
      const delay = Math.round(minDelayMs + (maxDelayMs - minDelayMs) * easeOutQuad)
      spinTimeoutRef.current = window.setTimeout(spin, delay)
    }

    spin()
    return () => {
      if (spinTimeoutRef.current) {
        window.clearTimeout(spinTimeoutRef.current)
        spinTimeoutRef.current = null
      }
    }
  }, [visibleSteps, actions.length])

  // Auto-scroll on action change as well
  useEffect(() => {
    if (visibleSteps !== 2) return
    const container = messagesRef.current
    if (!container) return
    void actionIndex
    const id = window.requestAnimationFrame(() => {
      container.scrollTop = container.scrollHeight
    })
    return () => window.cancelAnimationFrame(id)
  }, [actionIndex, visibleSteps])

  return (
    <div className={cn(
      bare ? 'relative h-full flex flex-col px-4 py-2' : 'relative rounded-2xl border bg-white/70 p-4 shadow-sm ring-1 ring-foreground/10 h-full flex flex-col',
      className
    )}>
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
              <span className="text-[13px] font-medium text-foreground">Mist AI</span>
            </div>
            <p className="text-foreground/70 mx-auto mt-1 max-w-64 text-[12px] leading-tight">AI Workflow Assistant for your LIMS</p>
            <div className="border-background mx-auto mt-2 h-0.5 w-16 border-b" />
          </div>
        </>
      )}

      <div
        ref={messagesRef}
        className={cn(
          'space-y-3 px-3',
          !bare && 'mt-4',
          scroll && 'flex-1 min-h-0 overflow-y-auto pb-3 pt-2'
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
              Compute IC50 across Binding assays from the last 7 days, flag outliers (&gt;3× MAD),
              generate a QC report, and prepare a merge into the Golden Record.
            </div>
            <span className="text-muted-foreground block pr-1 pt-1 text-right text-[10px]">Now</span>
          </motion.div>
        )}

        {/* Typing indicator with shimmering actions (no chat bubble) */}
        {visibleSteps >= 2 && visibleSteps < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-[82%]"
          >
            <div className="p-1" style={{ perspective: '800px' }}>
              <div className="text-[12px] text-foreground/60">Working…</div>
              <div className="relative mt-1 h-5 overflow-hidden">
                <motion.div
                  key={actionIndex}
                  initial={{ opacity: 0, rotateX: -90, y: 6 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ transformOrigin: 'bottom' }}
                >
                  <TextShimmer as="div" className="text-[13px] font-medium" duration={0.5}>
                    {actions[actionIndex]}
                  </TextShimmer>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* AI response: analysis + IC50 */}
        {visibleSteps >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-[82%]"
          >
            <div className="rounded-r-2xl rounded-t-2xl rounded-bl bg-white/90 p-3 ring-1 ring-foreground/10">
              <div className="text-[13px] text-foreground/90">
                <div className="font-medium text-foreground">Analysis complete</div>
                <ul className="ml-4 mt-1 list-disc space-y-1">
                  <li>Parsed 128 assay runs; 4 instruments; 2 protocols.</li>
                  <li>IC50 computed for 37 compounds (nonlinear regression; r² ≥ 0.96).</li>
                </ul>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
                <div className="rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
                  <div className="text-foreground/70">Median IC50</div>
                  <div className="text-foreground font-mono text-sm font-semibold tabular-nums">12.4 nM</div>
                </div>
                <div className="rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
                  <div className="text-foreground/70">Outliers</div>
                  <div className="text-foreground font-mono text-sm font-semibold tabular-nums">3 flagged</div>
                </div>
              </div>
              <div className="mt-3 rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
                <div className="text-[11px] font-mono text-foreground/70">Binding curve · Compound AF45</div>
                <div className="mt-1" style={{ height: 100 }}>
                  <ChartContainer
                    className="h-full"
                    config={{ response: { label: 'Response', color: 'hsl(var(--color-foreground))' } }}
                  >
                    <LineChart data={bindingCurveData} margin={{ left: 8, right: 8, top: 4, bottom: 4 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="x" tick={{ fontSize: 10 }} stroke="currentColor" />
                      <YAxis tick={{ fontSize: 10 }} stroke="currentColor" />
                      <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
                      <Line type="monotone" dataKey="response" stroke="var(--color-response)" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* AI response: QC + merge prepared */}
        {visibleSteps >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-[82%]"
          >
            <div className="rounded-r-2xl rounded-t-2xl rounded-bl bg-white/90 p-3 ring-1 ring-foreground/10">
              <div className="text-[13px]">
                <div className="font-medium text-foreground">QC checks</div>
                <ul className="ml-4 mt-1 list-disc space-y-1 text-foreground/90">
                  <li>Drift detected on PlateReader-02 (Δ baseline = 7.2%).</li>
                  <li>Two replicates excluded for CV &gt; 20%.</li>
                  <li>Audit trail linked to raw files and instrument logs.</li>
                </ul>
              </div>
              <div className="mt-3 overflow-hidden rounded-md ring-1 ring-foreground/10">
                <table className="w-full text-[12px]">
                  <thead className="bg-foreground/[0.04]">
                    <tr className="*:p-2 *:text-left">
                      <th className="font-medium text-foreground/70">Compound</th>
                      <th className="font-medium text-foreground/70">IC50</th>
                      <th className="font-medium text-foreground/70">MAD×</th>
                      <th className="font-medium text-foreground/70">Flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="*:p-2">
                      <td className="font-mono">AF45</td>
                      <td className="font-mono tabular-nums">58.2 nM</td>
                      <td className="font-mono tabular-nums">3.4</td>
                      <td className="font-mono text-amber-700">outlier</td>
                    </tr>
                    <tr className="*:p-2">
                      <td className="font-mono">BX12</td>
                      <td className="font-mono tabular-nums">7.9 nM</td>
                      <td className="font-mono tabular-nums">0.8</td>
                      <td className="font-mono text-emerald-700">ok</td>
                    </tr>
                    <tr className="*:p-2">
                      <td className="font-mono">CT07</td>
                      <td className="font-mono tabular-nums">92.1 nM</td>
                      <td className="font-mono tabular-nums">3.1</td>
                      <td className="font-mono text-amber-700">outlier</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
                <div className="text-[11px] font-mono text-foreground/70">Residuals (σ)</div>
                <div className="mt-1" style={{ height: 88 }}>
                  <ChartContainer
                    className="h-full"
                    config={{ r: { label: 'Residual', color: 'hsl(var(--color-foreground))' } }}
                  >
                    <BarChart data={residualsData} margin={{ left: 8, right: 8, top: 4, bottom: 4 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="i" tick={{ fontSize: 10 }} stroke="currentColor" />
                      <YAxis tick={{ fontSize: 10 }} stroke="currentColor" />
                      <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
                      <Bar dataKey="r" fill="var(--color-r)" radius={2} />
                    </BarChart>
                  </ChartContainer>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-md bg-white/60 p-2 ring-1 ring-foreground/10">
                <div>
                  <div className="text-[12px] text-foreground/70">Merge Request</div>
                  <div className="font-mono text-sm font-medium text-foreground">#412 · Binding Assay · Golden Record</div>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-500/20">ready</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {showPrompt && (
        <div className={cn(
          'space-y-3 rounded-lg border border-foreground/10',
          bare ? 'mt-3 p-2 bg-foreground/5' : 'bg-foreground/5 -mx-3 -mb-3 mt-4 p-3'
        )}>
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
  )
}


