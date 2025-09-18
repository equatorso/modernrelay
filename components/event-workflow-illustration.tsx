"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FilePlus, Zap, Bot } from "lucide-react";

const steps = [
	{
		title: "Event: New Sequence Added",
		description: "A scientist uploads a new protein sequence.",
		icon: <FilePlus className="size-4" />,
	},
	{
		title: "Trigger: Automated Workflow",
		description: "Design primers & predict structure via API.",
		icon: <Zap className="size-4" />,
	},
	{
		title: "Action: Notify Scientist",
		description: "Results sent to Slack for review.",
		icon: <Bot className="size-4" />,
	},
];

export const EventWorkflowIllustration = () => {
	const [currentStep, setCurrentStep] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentStep((prev) => (prev + 1) % steps.length);
		}, 1500);
		return () => clearInterval(timer);
	}, []);

	return (
		<div aria-hidden className="relative w-full select-none flex justify-center items-center h-full">
			<div className="relative w-full max-w-sm space-y-8 py-4">
				{/* Vertical line */}
				<div className="absolute top-4 bottom-4 left-[1.125rem] w-px bg-stone-200/80" />

				{steps.map((step, index) => (
					<div key={index} className="relative flex items-center gap-4">
						<motion.div
							className="z-10 flex size-9 items-center justify-center rounded-full"
							animate={{
								backgroundColor: index === currentStep ? "rgba(16, 185, 129, 0.1)" : "#f5f5f4", // stone-100
								scale: index === currentStep ? 1.05 : 1,
							}}
							transition={{ duration: 0.4, ease: "easeOut" }}
						>
							<motion.div
								className="flex size-7 items-center justify-center rounded-full text-stone-600"
								animate={{
									backgroundColor: index === currentStep ? "rgb(16, 185, 129)" : "#ffffff", // emerald-500 vs white
									color: index === currentStep ? "#ffffff" : "#57534e", // white vs stone-600
								}}
								transition={{ duration: 0.4, ease: "easeOut" }}
							>
								{step.icon}
							</motion.div>
						</motion.div>
						<motion.div
							animate={{
								opacity: index === currentStep ? 1 : 0.4,
							}}
							transition={{ duration: 0.4, ease: "easeOut" }}
							className="flex-1"
						>
							<div className="font-medium text-sm text-zinc-900">{step.title}</div>
							<div className="text-xs text-stone-600">{step.description}</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};


