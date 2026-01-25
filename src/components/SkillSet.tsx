type SkillSetProps = {
	category: string
	skills: string[]
}

export default function SkillSet({category, skills}:SkillSetProps) {
	return (
		<div className="flex flex-col gap-3">
			<h3 className="capitalize text-zinc-400">{category}</h3>
			<ul className="list-disc list-inside capitalize">
				{skills.map(skill => <li>{skill}</li>)}
			</ul>
		</div>
	)
}