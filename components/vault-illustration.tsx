import { Database, FileText, GitBranch, ShieldCheck } from "lucide-react";

export function VaultIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 400 300"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="vaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style={{ stopColor: "#f9fafb", stopOpacity: 1 }} />
					<stop
						offset="100%"
						style={{ stopColor: "#f3f4f6", stopOpacity: 1 }}
					/>
				</linearGradient>
				<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow
						dx="1"
						dy="2"
						stdDeviation="2"
						floodColor="#000"
						floodOpacity="0.08"
					/>
				</filter>
			</defs>

			{/* Central Vault */}
			<g transform="translate(150, 95)" filter="url(#shadow)">
				<path
					d="M50 0 L100 28.87 L100 86.6 L50 115.47 L0 86.6 L0 28.87 Z"
					fill="url(#vaultGradient)"
					stroke="#d1d5db"
					strokeWidth="1"
				/>
				<foreignObject x="35" y="42.5" width="30" height="30">
					<ShieldCheck className="text-stone-600" size={30} strokeWidth={1.5} />
				</foreignObject>
			</g>
			<text
				x="200"
				y="230"
				textAnchor="middle"
				fontSize="11"
				fontWeight="500"
				fill="#374151"
			>
				Unified Vault
			</text>

			{/* Asset Modules */}
			<g transform="translate(20, 20)" className="group">
				<rect width="110" height="55" rx="4" fill="#fff" stroke="#e5e7eb" />
				<foreignObject x="10" y="18" width="20" height="20">
					<FileText
						className="text-stone-500 group-hover:text-indigo-600"
						size={20}
						strokeWidth={1.5}
					/>
				</foreignObject>
				<text x="40" y="28" fontSize="10" fontWeight="500" fill="#374151">
					Brand Plans
				</text>
				<text x="40" y="43" fontSize="8" fill="#6b7280">
					Unstructured
				</text>
			</g>
			<path
				d="M100 75 Q 130 85, 160 105"
				stroke="#9ca3af"
				strokeWidth="1"
				fill="none"
				strokeDasharray="3 3"
			/>

			<g transform="translate(20, 225)" className="group">
				<rect width="110" height="55" rx="4" fill="#fff" stroke="#e5e7eb" />
				<foreignObject x="10" y="18" width="20" height="20">
					<Database
						className="text-stone-500 group-hover:text-indigo-600"
						size={20}
						strokeWidth={1.5}
					/>
				</foreignObject>
				<text x="40" y="28" fontSize="10" fontWeight="500" fill="#374151">
					Clinical Data
				</text>
				<text x="40" y="43" fontSize="8" fill="#6b7280">
					Structured
				</text>
			</g>
			<path
				d="M100 225 Q 130 215, 160 195"
				stroke="#9ca3af"
				strokeWidth="1"
				fill="none"
				strokeDasharray="3 3"
			/>

			<g transform="translate(270, 20)" className="group">
				<rect width="110" height="55" rx="4" fill="#fff" stroke="#e5e7eb" />
				<foreignObject x="10" y="18" width="20" height="20">
					<FileText
						className="text-stone-500 group-hover:text-indigo-600"
						size={20}
						strokeWidth={1.5}
					/>
				</foreignObject>
				<text x="40" y="28" fontSize="10" fontWeight="500" fill="#374151">
					Dossiers
				</text>
				<foreignObject x="85" y="5" width="16" height="16">
					<GitBranch
						className="text-stone-400 group-hover:text-indigo-600"
						size={16}
						strokeWidth={1.5}
					/>
				</foreignObject>
			</g>
			<path
				d="M300 75 Q 270 85, 240 105"
				stroke="#9ca3af"
				strokeWidth="1"
				fill="none"
				strokeDasharray="3 3"
			/>

			<g transform="translate(270, 225)" className="group">
				<rect width="110" height="55" rx="4" fill="#fff" stroke="#e5e7eb" />
				<text
					x="55"
					y="26"
					textAnchor="middle"
					fontSize="10"
					fontWeight="500"
					fill="#374151"
				>
					Veeva
				</text>
				<text
					x="55"
					y="41"
					textAnchor="middle"
					fontSize="10"
					fontWeight="500"
					fill="#374151"
				>
					Salesforce
				</text>
			</g>
			<path
				d="M300 225 Q 270 215, 240 195"
				stroke="#9ca3af"
				strokeWidth="1"
				fill="none"
				strokeDasharray="3 3"
			/>
		</svg>
	);
}

