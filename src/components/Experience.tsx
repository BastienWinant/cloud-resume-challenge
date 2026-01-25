type ExperienceProps = {
	title: string
	company: string
	start: string
	end?: string
	location: string
	accomplishments: string[]
}

export default function Experience({title, company, start, end, location, accomplishments}:ExperienceProps) {
	return (
		<div className="py-5 grid grid-cols-1 auto-rows-min xl:grid-cols-2 gap-y-7 border-t border-zinc-400/20">
			<div className="flex flex-col gap-y-2">
				<h3 className="capitalize font-medium">{title}</h3>
				<ul className="text-zinc-400">
					<li>{company}</li>
					<li className="capitalize">{start} - {end || 'present'}</li>
					<li>{location}</li>
				</ul>
			</div>
			<ul className="list-disc flex flex-col gap-y-2">
				{accomplishments.map(accomplishment => <li>{accomplishment}</li>)}
			</ul>
		</div>
	)
}