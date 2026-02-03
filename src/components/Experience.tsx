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
		<div className="py-5 flex flex-col gap-y-7 border-t border-stone-100/20">
			<div className="flex flex-col gap-y-3">
				<h3 className="font-medium capitalize">{title}</h3>
				<ul className="text-stone-400">
					<li>{company}</li>
					<li className="capitalize">{`${start} - ${end || "present"}`}</li>
					<li>{location}</li>
				</ul>
			</div>
			<ul className="list-disc flex flex-col gap-y-2 max-w-[40em] xl:max-w-[52em]">
				{accomplishments.map(entry => <li>{entry}</li>)}
			</ul>
		</div>
	)
}