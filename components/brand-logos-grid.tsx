"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type BrandLogosGridProps = {
	logos: { url: string; alt?: string }[];
	className?: string;
	itemClassName?: string;
	imageHeight?: number;
};

export default function BrandLogosGrid({ logos, className, itemClassName, imageHeight = 24 }: BrandLogosGridProps) {
	const colClass = logos.length <= 4 ? "grid-cols-2" : "grid-cols-3";
	return (
		<div className={cn("grid gap-4", colClass, className)}>
			{logos.map((logo, idx) => (
				<div
					key={`${logo.alt ?? logo.url}-${idx}`}
					className={cn(
						"ring-foreground/5 hover:bg-foreground/5 flex items-center justify-center rounded-md border border-transparent bg-white/70 p-3 shadow-sm ring-1 transition-colors",
						itemClassName,
					)}
				>
					<Image
						src={logo.url}
						alt={logo.alt ?? deriveAltFromUrl(logo.url)}
						height={imageHeight}
						width={imageHeight * 4}
						className="grayscale opacity-80 hover:opacity-100"
						sizes="(max-width: 640px) 64px, (max-width: 1024px) 96px, 128px"
						unoptimized={false}
					/>
				</div>
			))}
		</div>
	);
}

function deriveAltFromUrl(url: string): string {
	try {
		const u = new URL(url);
		const slug = u.pathname.split("/").pop() || "logo";
		return slug.replace(/[-_]/g, " ").trim();
	} catch {
		return "logo";
	}
}


