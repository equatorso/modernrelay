"use client";

import { Bell, ClipboardCheck, FileText, PenTool } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const steps = [
	{
		title: "Detect competitor signal",
		description: "New HTA update or trial result identified.",
		icon: <Bell className="size-4" />,
	},
	{
		title: "Summarize impact",
		description: "Assess payer stance and evidence deltas.",
		icon: <FileText className="size-4" />,
	},
	{
		title: "Draft counter‑position",
		description: "Propose objection responses with citations.",
		icon: <PenTool className="size-4" />,
	},
	{
		title: "Open field tasks",
		description: "Create CRM follow‑ups for review and action.",
		icon: <ClipboardCheck className="size-4" />,
	},
];

export const RecurringWorkflowIllustration = () => {
	const [currentStep, setCurrentStep] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentStep((prev) => (prev + 1) % steps.length);
		}, 1500);
		return () => clearInterval(timer);
	}, []);

	return (
		<div
			aria-hidden
			className="relative w-full select-none flex justify-center items-center h-full"
		>
			<div className="relative w-full max-w-sm space-y-8 py-4">
				<div className="absolute top-4 bottom-4 left-[1.125rem] w-px bg-stone-200/80" />

				{steps.map((step, index) => (
					<div key={index} className="relative flex items-center gap-4">
						<motion.div
							className="z-10 flex size-9 items-center justify-center rounded-full"
							animate={{
								backgroundColor:
									index === currentStep ? "rgba(16, 185, 129, 0.1)" : "#f5f5f4",
								scale: index === currentStep ? 1.05 : 1,
							}}
							transition={{ duration: 0.4, ease: "easeOut" }}
						>
							<motion.div
								className="flex size-7 items-center justify-center rounded-full text-stone-600"
								animate={{
									backgroundColor:
										index === currentStep ? "rgb(16, 185, 129)" : "#ffffff",
									color: index === currentStep ? "#ffffff" : "#57534e",
								}}
								transition={{ duration: 0.4, ease: "easeOut" }}
							>
								{step.icon}
							</motion.div>
						</motion.div>
						<motion.div
							animate={{ opacity: index === currentStep ? 1 : 0.4 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
							className="flex-1"
						>
							<div className="font-medium text-sm text-zinc-900">
								{step.title}
							</div>
							<div className="text-xs text-stone-600">{step.description}</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};
