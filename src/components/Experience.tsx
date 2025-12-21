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
		<article className="flex flex-col">
			<header>
				{/*TITLE*/}
				<h3 className="flex flex-col gap-1 capitalize font-medium mb-2">{title}</h3>
				<ul className="text-secondary">
					<li>{company}</li>
					<li className="capitalize">{dates}</li>
					<li>{location}</li> {/*location*/}
				</ul>
			</header>
			<div>
				<ul>
					{children}
				</ul>
			</div>
		</article>
	)
}