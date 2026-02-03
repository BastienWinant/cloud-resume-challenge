import type { ReactNode } from "react"

type SectionProps = {
	title: string
	children: ReactNode
}

export default function Section({title, children}:SectionProps) {
	return (
		<section className="py-7 flex flex-col gap-y-9 border-t border-stone-400/40">
			<header>
				<h2 className="text-xs font-medium capitalize">{title}</h2>
			</header>
			<div className="flex flex-col gap-y-7">
				{children}
			</div>
		</section>
	)
}