import { motion } from "motion/react"
import { User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { TableIllustration } from "@/components/table-illustration"

type BranchingIllustrationProps = {
  className?: string
}

export function BranchingIllustration({ className }: BranchingIllustrationProps) {
  return (
    <div className={cn("relative isolate h-56 w-full text-stone-600", className)}>
      {/* Base repo/table */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10"
      >
        <TableIllustration label="Main (Golden Record)" baseDelayMs={100} cellStaggerMs={40} diffPattern={[
          ["neutral","neutral","neutral"],
          ["neutral","neutral","neutral"],
          ["neutral","neutral","neutral"],
        ]} />
      </motion.div>

      {/* Fork point */}
      <div className="absolute left-[40%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/40 z-10" />

      {/* Horizontal: main -> fork */}
      <motion.div
        initial={{ right: "100%" }}
        animate={{ right: "60%" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-12 top-1/2 -translate-y-1/2 border-t border-dashed border-foreground/40 z-0 pointer-events-none"
      />

      {/* Vertical: fork -> human (up) */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="absolute left-[40%] top-[20%] -translate-x-1/2 border-l border-dashed border-foreground/40 z-0 pointer-events-none"
      />
      {/* Vertical: fork -> agent (down) */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="absolute left-[40%] bottom-[20%] -translate-x-1/4 border-l border-dashed border-foreground/40 z-0 pointer-events-none"
      />

      {/* Horizontal to branches */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "10%" }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="absolute left-[40%] top-[20%] border-t border-dashed border-foreground/40 z-0 pointer-events-none"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "10%" }}
        transition={{ duration: 0.4, delay: 0.75 }}
        className="absolute left-[40%] bottom-[20%] border-t border-dashed border-foreground/40 z-0 pointer-events-none"
      />

      {/* Branch cards */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.85 }}
        className="absolute left-[50%] top-[16%] -translate-y-1/2 z-10"
      >
        <div className="mb-1 flex items-center gap-1 text-[10px] text-stone-600">
          <User className="size-3 text-stone-600" />
          <span>Human branch</span>
        </div>
        <TableIllustration baseDelayMs={1300} cellStaggerMs={60} diffPattern={[
          ["neutral","add","neutral"],
          ["neutral","neutral","neutral"],
          ["neutral","neutral","add"],
        ]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="absolute left-[50%] bottom-[16%] translate-y-1/2 z-10"
      >
        <div className="mb-1 flex items-center gap-1 text-[10px] text-stone-600">
          <Bot className="size-3 text-stone-600" />
          <span>Agent branch</span>
        </div>
        <TableIllustration baseDelayMs={1350} cellStaggerMs={60} diffPattern={[
          ["neutral","neutral","remove"],
          ["neutral","neutral","neutral"],
          ["remove","neutral","neutral"],
        ]} />
      </motion.div>

      {/* Merge trunk at ~75% */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "68%" }}
        transition={{ duration: 0.5, delay: 1.05 }}
        className="absolute left-[75%] top-[16%] border-l border-dashed border-foreground/40 z-0 pointer-events-none"
      />

      {/* Horizontal: branches -> merge trunk */}
      <motion.div
        initial={{ right: "100%" }}
        animate={{ right: "25%" }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute left-[50%] top-[16%] -translate-y-1/2 border-t border-dashed border-foreground/40 z-0 pointer-events-none"
      />
      <motion.div
        initial={{ right: "100%" }}
        animate={{ right: "25%" }}
        transition={{ duration: 0.5, delay: 1.15 }}
        style={{ top: "84%" }}
        className="absolute left-[50%] -translate-y-1/2 border-t border-dashed border-foreground/40 z-0 pointer-events-none"
      />

      {/* Horizontal: merge trunk -> merged card */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "calc(20% - 1rem)" }}
        transition={{ duration: 0.5, delay: 1.25 }}
        className="absolute left-[75%] top-1/2 -translate-y-1/2 border-t border-dashed border-foreground/40 z-0 pointer-events-none"
      />

      {/* Merged card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.35 }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
      >
        <TableIllustration label="Merged to Main" baseDelayMs={1800} cellStaggerMs={50} diffPattern={[
          ["neutral","add","neutral"],
          ["neutral","neutral","neutral"],
          ["remove","neutral","add"],
        ]} />
      </motion.div>
    </div>
  )
}


