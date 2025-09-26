"use client";

import { cn } from "@/lib/utils";

export const SlideHeader = ({
	eyebrow,
	title,
	className,
}: {
	eyebrow?: React.ReactNode;
	title: React.ReactNode;
	className?: string;
}) => (
	<div className={cn("space-y-3", className)}>
		{eyebrow && (
			<div className="text-xs font-medium uppercase tracking-wide text-stone-600">
				{eyebrow}
			</div>
		)}
		<h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
	</div>
);

export const SlideBody = ({
	children,
	className,
	as: Component = "div",
}: {
	children: React.ReactNode;
	className?: string;
	as?: "div" | "ul" | "p";
}) => (
	<Component className={cn("text-stone-700", "text-sm", className)}>
		{children}
	</Component>
);
