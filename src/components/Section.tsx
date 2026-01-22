import type { ReactNode } from "react"

type SectionProps = {
	children: ReactNode
	header: string
}

export default function Section({children, header}:SectionProps) {
	return (
		<section className="flex flex-col gap-y-10 py-7 border-t-2 border-zinc-100/20">
			<header>
				<h2 className="capitalize text-xs font-medium">{header}</h2>
			</header>
			<div>{children}</div>
		</section>
	)
}