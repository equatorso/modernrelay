"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function ProposalPage() {
	return (
		<main className="bg-background text-foreground font-sans text-[14px] leading-relaxed print:text-[10pt] print:leading-snug">
			{/* Toolbar (hidden when printing) */}
			<div className="print:hidden sticky top-0 z-10 w-full border-b border-foreground/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
					<div className="flex items-center justify-center gap-2">
						<Logo className="h-5 w-auto" />
						<span className="font-mono text-[10px] uppercase tracking-widest text-stone-600">Proposal</span>
					</div>
					<Button onClick={() => window.print()} className="font-mono uppercase tracking-wider text-xs">
						Export PDF
					</Button>
				</div>
			</div>

			{/* Document body */}
			<div className="proposal-content mx-auto max-w-2xl px-6 py-10 print:max-w-none print:px-0 print:py-0">
				<header className="mb-8">
					<div className="flex items-center gap-3">
						<Logo className="h-7 w-auto" />
						<span className="font-mono text-[11px] uppercase tracking-widest text-stone-500">Proposal</span>
		</div>

		{/* Footer (print: fixed on every page, minimal) */}
		<footer className="proposal-print-footer hidden print:block font-mono text-[10px] text-stone-600">
			<div className="mx-auto max-w-5xl px-4">
				<div className="border-t border-foreground/10 py-3 text-center">
					<span className="uppercase tracking-widest">EQTR, Inc</span>
					<span className="mx-2">·</span>
					<span>1345 Avenue of the Americas, New York City, NY 10105</span>
					<span className="mx-2">·</span>
					<span className="text-[9px] italic tracking-wide text-stone-500">Confidential</span>
				</div>
			</div>
		</footer>
				</header>

				{/* Table of Contents */}
				<nav className="mb-8 print:mb-8">
					<div className="rounded-md border border-foreground/10 bg-white/60 p-3">
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
							<ul className="space-y-1 text-[13px] text-stone-700">
								<li><a href="#part-1" className="font-mono hover:underline">01 — On R&D Velocity</a></li>
								<li><a href="#part-2" className="font-mono hover:underline">02 — Architectured From First Principles</a></li>
								<li><a href="#part-3" className="font-mono hover:underline">03 — The EQTR OS: Capabilities &amp; Features</a></li>
								<li><a href="#part-4" className="font-mono hover:underline">04 — Embedded Engineering Partnership</a></li>
							</ul>
							<ul className="space-y-1 text-[13px] text-stone-700">
								<li><a href="#part-5" className="font-mono hover:underline">05 — OS for Velocity &amp; Integrity</a></li>
								<li><a href="#part-6" className="font-mono hover:underline">06 — Strategic Investment</a></li>
								<li><a href="#part-7" className="font-mono hover:underline">07 — Our Commitments</a></li>
								<li><a href="#part-8" className="font-mono hover:underline">08 — 90‑Day Pilot</a></li>
							</ul>
						</div>
					</div>
				</nav>

				<section id="part-1" className="space-y-4">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">
						01 — On R&D Velocity
					</h2>
					<p className="text-stone-700">
						A scientific organization's rate of discovery is not limited by the brilliance of its people, but by the friction inherent in its operational loops.
					</p>
					<p className="text-stone-700">
						At its core, R&D is a cycle: <strong>Hypothesize → Design → Execute → Analyze → Learn</strong>. The velocity of this cycle dictates the pace of progress. In most organizations, the connections between these stages are manual, lossy, and untracked.
					</p>
					<ul className="list-disc space-y-1.5 pl-6 text-stone-700">
						<li>
							A protocol <strong>designed</strong> in a document is decoupled from its <strong>execution</strong> in the lab.
						</li>
						<li>
							Results from an instrument are <strong>executed</strong> into a CSV, while the critical context of <em>why</em> and <em>how</em> remains trapped in a scientist's notebook or a slide deck.
						</li>
						<li>
							<strong>Analysis</strong> requires a heroic effort of data archaeology to join disparate files and reconstruct experimental history.
						</li>
						<li>
							The <strong>learnings</strong> from one experiment rarely compound programmatically to inform the next hypothesis.
						</li>
					</ul>
					<p className="text-stone-700">
						This friction is a tax on discovery. Each manual transfer of information bleeds context and introduces latency. The result is an R&D history that is a write-only ledger - a graveyard of disconnected facts rather than a queryable, living brain.
					</p>
					<p className="text-stone-700">
						EQTR is engineered from first principles to solve this. Our premise is that a lab's operating system should be an isomorphic representation of the R&D process itself. Its purpose is to programmatically wire together the stages of the discovery cycle, making the connections explicit, automated, and lossless.
					</p>
				</section>

				<hr className="my-8 border-foreground/10 print:hidden" />

				<section id="part-2" className="space-y-4 print:mt-8 print:break-before-page">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">
						02 — Architectured From First Principles
					</h2>
					<p className="text-stone-700/90">
						To solve this fundamental problem, EQTR is an operating system with a specific set of architectural principles. Each is a direct response to a fundamental limitation of traditional R&amp;D software.
					</p>
					<ol className="list-decimal space-y-3 pl-6 text-stone-700">
					<li>
					<p className="font-bold text-zinc-900 pl-2 border-l-2 border-zinc-300">Principle 01 — Schema Bends to the Science</p>
							<ul className="mt-1 list-disc pl-6">
								<li>
									<span className="font-medium">The Problem:</span> Science is fluid, but software is rigid. Traditional LIMS force biology into a fixed schema, creating friction the moment your research evolves.
								</li>
								<li>
									<span className="font-medium">Our Solution:</span> We treat the <strong>schema as data</strong>. Your data models are versioned entities within the system, not immutable tables in a database. This allows for safe, auditable evolution of your scientific language without breaking changes or costly migrations.
								</li>
							</ul>
						</li>
					<li>
					<p className="font-bold text-zinc-900 pl-2 border-l-2 border-zinc-300">Principle 02 — System Is Infinitely Extensible</p>
							<ul className="mt-1 list-disc pl-6">
								<li>
									<span className="font-medium">The Problem:</span> Most software is a walled garden where the UI is the only door. This creates a hard ceiling on what an ambitious technical team can achieve.
								</li>
								<li>
									<span className="font-medium">Our Solution:</span> An <strong>API/SDK-first design</strong>. Our own UI is just one client of the same robust, versioned API/SDK that you will use. Every action is programmatically accessible. This empowers your engineers to build custom applications and bespoke automations.
								</li>
							</ul>
						</li>
					<li>
					<p className="font-bold text-zinc-900 pl-2 border-l-2 border-zinc-300">Principle 03 — Automate the Structured, Liberate the Scientist</p>
							<ul className="mt-1 list-disc pl-6">
								<li>
									<span className="font-medium">The Problem:</span> Forcing creative scientists to perform tedious, structured data entry is a primary source of R&amp;D friction.
								</li>
								<li>
									<span className="font-medium">Our Solution:</span> <strong>AI as a Translation Layer</strong>. We weave AI into the OS to translate unstructured human output (notes, files) into structured, machine-readable data, and machine data back into human insight (natural language queries, plots, summaries).
								</li>
							</ul>
						</li>
					<li>
					<p className="font-bold text-zinc-900 pl-2 border-l-2 border-zinc-300">Principle 04 — Parallelism Without Chaos</p>
							<ul className="mt-1 list-disc pl-6">
								<li>
									<span className="font-medium">The Problem:</span> Collaboration on a single dataset is dangerous. Multiple actors (human or AI) editing a single source of truth leads to data corruption and lost history.
								</li>
								<li>
									<span className="font-medium">Our Solution:</span> <strong>"Git for Data."</strong> This branching model provides a framework for safe, concurrent work. Changes are proposed, reviewed, and merged, creating an immutable, auditable history without risk to the canonical data.
								</li>
							</ul>
						</li>
					<li>
					<p className="font-bold text-zinc-900 pl-2 border-l-2 border-zinc-300">Principle 05 — Data Triggers Action</p>
							<ul className="mt-1 list-disc pl-6">
								<li>
									<span className="font-medium">The Problem:</span> Data in most systems is passive. It sits in a database until a human queries it. The system is a dead logbook, not a participant in discovery.
								</li>
								<li>
									<span className="font-medium">Our Solution:</span> An <strong>Event-Based Architecture</strong>. A new piece of data is an "event" that can trigger a downstream process via a pub/sub model. This transforms the system from a passive repository into an active engine.
								</li>
							</ul>
						</li>
					<li>
					<p className="font-bold text-zinc-900 pl-2 border-l-2 border-zinc-300">Principle 06 — Context Is Connectivity</p>
							<ul className="mt-1 list-disc pl-6">
								<li>
									<span className="font-medium">The Problem:</span> Your internal data is only a fraction of the relevant knowledge. Linking it to the vast world of public biological data is a manual, ad-hoc, and error-prone process.
								</li>
								<li>
									<span className="font-medium">Our Solution:</span> <strong>A Unified Data Hub</strong>. EQTR acts as a central nervous system, creating mirrors of public databases (UniProt, PubChem) to automatically enrich your internal entities, making your own data more valuable without manual effort.
								</li>
							</ul>
						</li>
					</ol>
				</section>

			

				<section id="part-3" className="space-y-4 print:break-before-page print:break-after-page">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">
						03 — The EQTR OS: Capabilities &amp; Features
					</h2>
					<p className="text-stone-700/90">
						This architecture manifests as a set of powerful, integrated capabilities.
					</p>
					<div className="proposal-table border-y border-foreground/10">
						<table className="w-full text-left text-sm">
						<thead className="bg-transparent font-mono text-zinc-700 uppercase tracking-wide text-[11px]">
								<tr className="*:px-3 *:py-2">
									<th>Core Architecture</th>
									<th>Key Features &amp; Capabilities</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-foreground/10 text-stone-700">
								<tr className="align-top *:px-3 *:py-2">
									<td className="font-medium text-zinc-900">Data Models &amp; Repositories</td>
									<td>
										<ul className="list-disc pl-5 space-y-1.5">
											<li>User-defined schemas and ontologies</li>
											<li>Schema-as-data for no-code migrations</li>
											<li>Modular repositories for team-specific ownership (LIMS, MLOps, etc.)</li>
										</ul>
									</td>
								</tr>
								<tr className="align-top *:px-3 *:py-2">
									<td className="font-medium text-zinc-900">API/SDK First</td>
									<td>
										<ul className="list-disc pl-5 space-y-1.5">
											<li>Comprehensive Python SDK for all platform actions</li>
											<li>Fully versioned and documented API</li>
											<li>UI built on the same public-facing API you use</li>
										</ul>
									</td>
								</tr>
								<tr className="align-top *:px-3 *:py-2">
									<td className="font-medium text-zinc-900">AI Collaboration Suite</td>
									<td>
										<ul className="list-disc pl-5 space-y-1.5">
											<li>Unstructured data ingestion (notes, files, PDFs) to structured records</li>
											<li>Natural language querying, plotting, and reporting</li>
											<li>AI-assisted protocol design and code generation</li>
										</ul>
									</td>
								</tr>
								<tr className="align-top *:px-3 *:py-2">
									<td className="font-medium text-zinc-900">Git-Style Collaboration</td>
									<td>
										<ul className="list-disc pl-5 space-y-1.5">
											<li>Branching for data and schema changes</li>
											<li>Review/approval workflows ("pull requests" for data)</li>
											<li>Full, immutable audit trail for every change</li>
										</ul>
									</td>
								</tr>
								<tr className="align-top *:px-3 *:py-2">
									<td className="font-medium text-zinc-900">Automation Engine</td>
									<td>
										<ul className="list-disc pl-5 space-y-1.5">
											<li>Event-driven triggers (e.g., on new record, on field update)</li>
											<li>Execution of custom Python scripts for analysis or integrations</li>
											<li>Library of pre-built scientific automations</li>
										</ul>
									</td>
								</tr>
								<tr className="align-top *:px-3 *:py-2">
									<td className="font-medium text-zinc-900">Data Hub &amp; Enrichment</td>
									<td>
										<ul className="list-disc pl-5 space-y-1.5">
											<li>Connectors to public databases (UniProt, PubChem)</li>
											<li>Automated entity enrichment</li>
											<li>Read/write sync with external software and instruments</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<br />

				<section id="part-4" className="space-y-4 print:mt-8">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">
						04 — Our Partnership Model: Embedded Engineering
					</h2>
					<p className="text-stone-700/90">
						Software alone is insufficient. To truly integrate this OS into your operations, we employ a model fundamentally different from any other vendor: we become an extension of your team. This is not a service contract; it is a deep, hands-on engineering partnership.
					</p>
					<p className="text-stone-700">
						As a founding partner, our senior team will be <strong>forward-deployed with you</strong>:
					</p>
					<ul className="list-disc space-y-1.5 pl-6 text-stone-700">
						<li>
							<strong>In your meetings:</strong> We participate in your scientific and technical planning sessions to deeply understand your goals and challenges.
						</li>
						<li>
							<strong>In your Slack:</strong> A dedicated channel for real-time collaboration, problem-solving, and design discussions.
						</li>
						<li>
							<strong>On-site:</strong> We conduct on-site workshops to co-design your core data ontologies and train your team.
						</li>
						<li>
							<strong>In your code:</strong> We co-author the initial SDK scripts and automation workflows, ensuring your team is empowered to build and extend the system independently.
						</li>
					</ul>
					<p className="text-stone-700">
						You are not just buying a product but securing dedicated, expert engineering resources to build your foundational data asset correctly from day one.
					</p>
				</section>

				<br />

				<hr className="my-8 border-foreground/10 print:hidden" />

				<section id="part-5" className="space-y-4">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">
						05 — An OS for Velocity &amp; Integrity
					</h2>
					<ul className="list-disc space-y-1.5 pl-6 text-stone-700">
						<li><strong>Your scientists are freed from manual data entry.</strong></li>
						<li>
							<strong>Everything is linked to its origin, making your data perpetually "diligence-ready."</strong>
						</li>
						<li>
							<strong>Your history becomes a queryable brain, capable of answering complex questions.</strong>
						</li>
						<li>
							<strong>The lab becomes an automated engine for discovery.</strong>
						</li>
					</ul>
				</section>

				<hr className="my-8 border-foreground/10" />

				<section id="part-6" className="space-y-4 print:break-before-page print:break-after-page">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">
						06 — The Strategic Investment
					</h2>
					<p className="text-stone-700/90">
						This is not just an operational expense for a LIMS but a capital investment in your core R&amp;D engine. The investment reflects the strategic value of this partnership and the comprehensive nature of the platform.
					</p>
					<p className="font-medium text-zinc-900">The Founding Partner Investment Model (5-Year Projection):</p>
					<div className="proposal-table overflow-hidden rounded-md border border-foreground/10">
						<table className="w-full text-left text-sm">
						<thead className="bg-foreground/[0.04] font-mono text-zinc-800 uppercase tracking-wide text-[11px]">
								<tr>
									<th className="px-3 py-2 w-[28%]">Item</th>
									<th className="px-3 py-2 w-[18%]">Year 1</th>
									<th className="px-3 py-2 w-[18%]">Years 2–5</th>
									<th className="px-3 py-2">Inclusions &amp; Notes</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-foreground/10 text-stone-700">
								<tr className="align-top">
									<td className="px-3 py-2 font-semibold text-zinc-900">Founding Partner Implementation</td>
								<td className="px-3 py-2 whitespace-nowrap font-mono tabular-nums">$400,000</td>
								<td className="px-3 py-2 font-mono">—</td>
									<td className="px-3 py-2">A one-time investment for the 6–12 month embedded engineering engagement.</td>
								</tr>
								<tr className="align-top">
									<td className="px-3 py-2 font-semibold text-zinc-900">Annual Platform License</td>
								<td className="px-3 py-2 font-mono tabular-nums">$400,000</td>
								<td className="px-3 py-2 font-mono tabular-nums">$400,000</td>
									<td className="px-3 py-2">
										<span className="font-medium">Includes the complete EQTR OS:</span>
										<ul className="mt-1 list-disc pl-4 space-y-1.5">
											<li>Core Data OS</li>
											<li>AI Collaboration Suite</li>
											<li>Automation Engine</li>
											<li>Data Hub &amp; Enrichment</li>
										</ul>
										<p className="mt-2 font-medium">Plus:</p>
										<ul className="list-disc pl-4 space-y-1.5">
											<li>Unlimited Users</li>
											<li>$100,000 Annual Usage Credit (LLM calls, compute, API)</li>
											<li>Dedicated Partner Support</li>
										</ul>
									</td>
								</tr>
								<tr className="align-top">
									<td className="px-3 py-2 font-semibold text-zinc-900">Total Annual Investment</td>
								<td className="px-3 py-2 font-mono tabular-nums font-semibold">$800,000</td>
								<td className="px-3 py-2 font-mono tabular-nums font-semibold">$400,000</td>
									<td className="px-3 py-2">Fixed investment; faster time-to-value than building in-house.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<hr className="my-8 border-foreground/10 print:hidden" />

				<section id="part-7" className="space-y-4 print:mt-8">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">07 — Our Commitments</h2>
					<ol className="list-decimal space-y-2 pl-6 text-stone-700">
						<li>
							<strong>Performance Guarantee:</strong> The <strong>$400,000 Annual Platform Fee for Year 1 will not be invoiced</strong> until the system is fully deployed and has met the jointly-defined success criteria established during the pilot program. Your success is the prerequisite for our payment.
						</li>
						<li>
							<strong>Business Continuity Guarantee:</strong> To fully de-risk business continuity, we will place our full source code in an escrow account. In the unlikely event that EQTR ceases operations, the source code and a perpetual license to use it will be released to you, guaranteeing you full control and business continuity.
						</li>
						<li>
							<strong>Regulatory & Data Protection Commitment:</strong> We will implement and attest to your required data controls as part of deployment acceptance criteria — including security controls (encryption, customer-managed keys, access controls); compliance (audit logging, exportable logs, attestations); and residency requirements (geofencing, regional deployment). Additional controls will be supported as required.
						</li>
					</ol>
					<p className="pt-2 text-[12px] text-stone-600">
						We are backed by a $3M seed round from top-tier funds including Point Nine, Index Ventures, and biotech specialists Amino Collective (backers of Seqera, Enveda & Cradle). Our angel investors include the former CCO of BioNTech and Charlie Songhurst (Board of Meta).
					</p>
				</section>

				<hr className="my-8 border-foreground/10" />

				<section id="part-8" className="space-y-4">
					<h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-indigo-700">
						08 — The Path Forward - A 90-Day Pilot
					</h2>
					<p className="text-stone-700">
						Let's prove the value quickly and decisively. We propose a 90-day, hands-on pilot focused on a mission-critical workflow.
					</p>
					<ul className="list-disc space-y-1.5 pl-6 text-stone-700">
						<li>
							<strong>Scope:</strong> We will dedicate our senior engineers to work with your core team. Together, we will define the schema for one critical assay, automate its data ingestion and QC, and build out a key analytical workflow.
						</li>
						<li>
							<strong>Investment:</strong> The investment for this 90-day pilot engagement is <strong>$100,000</strong>. This reflects the significant allocation of our senior engineering resources to your success and ensures mutual commitment. This amount will be <strong>fully credited</strong> toward your Founding Partner Implementation fee upon moving forward.
						</li>
					</ul>
				</section>
			</div>

			<style jsx global>{`
				/* Print settings */
				@page {
					size: A4;
					margin: 16mm 16mm 1mm 16mm;
				}
				@media print {
					html, body {
						background: white !important;
					}
					/* Improve color fidelity in print */
					* {
						-webkit-print-color-adjust: exact;
						print-color-adjust: exact;
					}
						/* Avoid splitting important blocks across pages */
						.proposal-table,
						.proposal-table table,
						.proposal-table thead,
						.proposal-table tbody,
						.proposal-table tr,
						.proposal-table th,
						.proposal-table td {
							break-inside: avoid;
							page-break-inside: avoid;
						}
						.proposal-table thead { display: table-header-group; }
						.proposal-table tfoot { display: table-footer-group; }
						h2 { break-after: avoid; page-break-after: avoid; }
						p, ul, ol, li, table, blockquote { orphans: 3; widows: 3; }
					/* Footer on each page */
					/* Place footer slightly into the bottom page margin for lower position */
					.proposal-print-footer { position: fixed; bottom: 0; left: 0; right: 0; }
					.proposal-content { padding-bottom: 32px !important; }
				}
			`}</style>
		</main>
	);
}


