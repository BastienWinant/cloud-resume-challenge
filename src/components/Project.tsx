type ProjectProps = {
	title: string
	description: string
	techstack: string[]
	githubLink?: string
	demoLink?: string
}

export default function Project({title, description, techstack, githubLink, demoLink}: ProjectProps) {
	return (
		<article className="p-5 flex flex-col gap-y-3 border border-stone-400/20 rounded-sm max-w-96">
			<header>
				<h4 className="text-lg font-medium capitalize">{title}</h4>
			</header>
			<div className="flex flex-col gap-3">
				<p className="text-stone-400">{description}</p>
				<ul className="flex flex-wrap gap-2 items-center">
					{techstack.map(tech => (
						<li className="text-sm font-medium bg-stone-100 text-stone-950 px-1.5 py-0.5">{tech}</li>
					))}
				</ul>
				<div className="flex items-center mt-4">
					{githubLink && <a href={githubLink} target="_blank">Github</a>}
					{demoLink && <a href={demoLink} target="_blank">Demo</a>}
				</div>
			</div>
		</article>
	)
}