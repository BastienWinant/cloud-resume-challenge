import type { ReactNode } from "react"

type SectionProps = {
	children: ReactNode
	header: string
}

export default function Section({children, header}:SectionProps) {
	return (
		<section className="border-t">
			<header>
				<h2 className="capitalize">{header}</h2>
			</header>
			<div>{children}</div>
		</section>
	)
}