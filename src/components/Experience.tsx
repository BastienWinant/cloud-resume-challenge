import type { ReactNode } from "react";

type ExperienceProps = {
	title: string
	company: string
	dates: string
	location: string
	children: ReactNode
}

export default function Experience({title, company, dates, location, children}:ExperienceProps) {
	return (
		<article className="pt-4 flex flex-col gap-8 border-t border-t-secondary/20">
			<header>
				<h3 className="flex flex-col gap-1 capitalize font-medium mb-2">{title}</h3>
				<ul className="text-secondary">
					<li>{company}</li>
					<li className="capitalize">{dates}</li>
					<li>{location}</li>
				</ul>
			</header>
			<div>
				<ul className="flex flex-col gap-3 text-sm list-disc">
					{children}
				</ul>
			</div>
		</article>
	)
}