type SkillsProps = {
	category: string
	skills: string[]
}

export default function Skills({category, skills}:SkillsProps) {
	return (
		<div className="flex flex-col gap-y-5 capitalize">
			<h3 className="text-stone-400">{category}</h3>
			<ul className="ml-2 flex flex-col gap-y-1 list-disc list-inside">
				{skills.map(skill => <li>{skill}</li>)}
			</ul>
		</div>
	)
}