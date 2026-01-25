import type { ReactNode } from "react"

type SectionProps = {
	children: ReactNode
	title: string
}

export default function Section({children, title}:SectionProps) {
	return (
		<section className="py-7 flex flex-col gap-y-10 border-t-2 border-zinc-400/20">
			<header>
				<h2 className="text-xs font-medium capitalize">{title}</h2>
			</header>
			<div className="flex flex-col gap-y-7">
				{children}
			</div>
		</section>
	)
}