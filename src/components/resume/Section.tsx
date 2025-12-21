import type { ReactNode } from "react"

type SectionProps = {
	title: string
	children: ReactNode
}

export default function Section({title, children}:SectionProps) {
	return (
		<section className="pb-24 border-b-2 border-b-secondary/20">
			<h2 className="text-xs font-semibold capitalize mb-8">{title}</h2>
			{children}
		</section>
	)
}