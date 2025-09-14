"use client";

import { GridSlide } from "@/components/slides/grid-slide";
import BrandLogosGrid from "@/components/brand-logos-grid";

const LOGO_URLS = [
	{ url: "https://cdn.simpleicons.org/openai", alt: "OpenAI" },
	{ url: "https://cdn.simpleicons.org/google", alt: "Google (Gemini)" },
	{ url: "https://cdn.simpleicons.org/bolt", alt: "Bolt" },
	{ url: "https://cdn.simpleicons.org/supabase", alt: "Supabase" },
	{ url: "https://cdn.simpleicons.org/cloudflare", alt: "Cloudflare" },
	{ url: "https://cdn.simpleicons.org/vercel", alt: "Vercel" },
	{ url: "https://cdn.simpleicons.org/stripe", alt: "Stripe" },
	{ url: "https://cdn.simpleicons.org/paypal", alt: "PayPal" },
	{ url: "https://cdn.simpleicons.org/spotify", alt: "Spotify" },
	{ url: "https://cdn.simpleicons.org/hulu", alt: "Hulu" },
];

export default function TeamWhyUs() {
	return (
		<GridSlide
			className="bg-background"
			gridClassName="grid-cols-2 auto-rows-fr"
			gridInnerClassName="divide-foreground/10"
			items={[
				{
					id: "left-content",
					padded: true,
					content: (
						<div className="space-y-3">
							<div className="text-xs font-medium uppercase tracking-wide text-stone-500">Why Us</div>
							<h3 className="text-xl font-semibold text-zinc-900">Two founders. AI × Data Infrastructure.</h3>
							<ul className="space-y-3 text-stone-700 pt-6">
								<li>
									Built AI-native data systems across biotech and research—bridging lab workflows,
									knowledge graphs, and modern infra.
								</li>
								<li>
									Hands-on with LLMs, structured data models, and instrument integrations—shipping
									production systems end-to-end.
								</li>
								<li>
									Backgrounds from Berkeley, Recursion Pharma, Cambridge University, the Francis Crick Institute,
									and Flagship Pioneering.
								</li>
							</ul>
						</div>
					),
				},
				{
					id: "right-logos",
					padded: true,
					content: (
						<div className="flex h-full items-center justify-center">
							<div className="w-full max-w-md">
								<BrandLogosGrid logos={LOGO_URLS} />
							</div>
						</div>
					),
				},
			]}
		/>
	);
}



