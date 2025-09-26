"use client";
import { Terminal } from "lucide-react";
import CodeBlock from "@/components/code-block";

const PYTHON_SDK_EXAMPLE = `# pip install eqtr
from eqtr import Client

eq = Client(api_key="YOUR_API_KEY")

# Create
compound = eq.compounds.create(name="BX12", smiles="CC(=O)O")

# Read
assay = eq.assays.get("AF45")

# Update
assay.update(status="validated")

# List
runs = eq.runs.list(assay=assay.id, limit=3)

# Delete
eq.runs.delete(runs[0].id)

print(compound.id, assay.status, [r.id for r in runs])`;

export default function PythonSdkIllustration() {
	return (
		<div className="ring-foreground/10 bg-[--code-background] relative z-10 overflow-hidden rounded-xl border border-transparent px-1 pb-1 shadow-lg shadow-black/10 ring-1 backdrop-blur [--code-background:color-mix(in_oklab,var(--color-zinc-900)35%,var(--color-zinc-950))] [--code-editor-background:color-mix(in_oklab,var(--color-zinc-900)75%,var(--color-zinc-950))]">
			<div className="relative flex h-8 items-center gap-1.5 rounded-t-lg px-3 font-mono text-xs text-white/90">
				<Terminal className="size-3.5" />
				<span>eqtr_demo.py</span>
			</div>
			<div className="bg-[--code-editor-background] h-96 rounded-b-lg border-t">
				<div className="h-full overflow-auto">
					<CodeBlock
						code={PYTHON_SDK_EXAMPLE}
						lang="python"
						theme="one-dark-pro"
						className="[&_pre]:!bg-transparent [&_pre]:border-none [&_pre]:p-4"
					/>
				</div>
			</div>
		</div>
	);
}
