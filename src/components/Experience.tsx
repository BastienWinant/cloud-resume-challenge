type ExperienceProps = {
	title: string
	company: string
	dates: string
	location: string
	accomplishments: string[]
}

export default function Experience({title, company, dates, location, accomplishments}:ExperienceProps) {
	return (
		<div className="flex flex-col gap-y-7 lg:flex-row py-5 border-t border-zinc-100/10 text-sm lg:text-base">
			<div className="flex flex-col gap-y-3">
				<h3 className="capitalize font-medium">{title}</h3>
				<ul className="text-zinc-400">
					<li>{company}</li>
					<li className="capitalize">{dates}</li>
					<li className="capitalize">{location}</li>
				</ul>
			</div>
			<ul className="list-disc flex flex-col gap-2">
				{accomplishments.map(entry => <li>{entry}</li>)}
			</ul>
		</div>
	)
}