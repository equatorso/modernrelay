import { cn } from "@/lib/utils"
import { motion } from "motion/react"

type DiffVariant = "add" | "remove" | "neutral"

type TableIllustrationProps = {
  className?: string
  label?: string
  // 3x3 matrix of cell variants
  diffPattern?: DiffVariant[][]
  // Optional timing controls for animating only diff cells
  baseDelayMs?: number
  cellStaggerMs?: number
}

export function TableIllustration({
  className,
  label,
  diffPattern,
  baseDelayMs = 150,
  cellStaggerMs = 50,
}: TableIllustrationProps) {
  const body: DiffVariant[][] = diffPattern ?? [
    ["neutral", "neutral", "neutral"],
    ["neutral", "neutral", "neutral"],
    ["neutral", "neutral", "neutral"],
  ]

  const ringClassFor = (v: DiffVariant) => {
    if (v === "add") return "ring-emerald-500/30"
    if (v === "remove") return "ring-rose-500/30"
    return "ring-transparent"
  }

  const targetColorFor = (v: DiffVariant) => {
    if (v === "add") return "rgba(16,185,129,0.70)" // emerald-500/70
    if (v === "remove") return "rgba(244,63,94,0.70)" // rose-500/70
    return "rgba(0,0,0,0.10)" // foreground/10 approx
  }

  return (
    <div className={cn("relative inline-flex flex-col items-stretch", className)}>
      {label ? (
        <div className="mb-1 text-center text-[10px] font-medium leading-none text-stone-600">
          {label}
        </div>
      ) : null}
      <div className="bg-background w-28 rounded-md p-2 shadow-sm ring-1 ring-foreground/10">
        <div className="mb-1 grid grid-cols-3 gap-1">
          <div className="h-[6px] rounded bg-foreground/15" />
          <div className="h-[6px] rounded bg-foreground/15" />
          <div className="h-[6px] rounded bg-foreground/15" />
        </div>
        <div className="space-y-1">
          {body.slice(0, 3).map((row, rIdx) => (
            <div key={rIdx} className="grid grid-cols-3 gap-1">
              {row.slice(0, 3).map((variant, cIdx) => {
                const idx = rIdx * 3 + cIdx
                if (variant === "neutral") {
                  return (
                    <div
                      key={cIdx}
                      className={cn("h-[4px] rounded bg-foreground/10", ringClassFor(variant))}
                    />
                  )
                }
                return (
                  <motion.div
                    key={cIdx}
                    initial={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                    animate={{ backgroundColor: targetColorFor(variant) }}
                    transition={{ duration: 0.35, delay: (baseDelayMs + idx * cellStaggerMs) / 1000, ease: "easeOut" }}
                    className={cn("h-[4px] rounded", ringClassFor(variant))}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


