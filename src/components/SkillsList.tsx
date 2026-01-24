type SkillsListProps = {
	category: string
	skills: string[]
}

export default function SkillsList({category, skills}:SkillsListProps) {
	return (
		<div className="flex flex-col gap-y-4 capitalize">
			<h3 className="text-zinc-400">{category}</h3>
			<ul className="list-disc list-inside">
				{skills.map(skill => <li>{skill}</li>)}
			</ul>
		</div>
	)
}