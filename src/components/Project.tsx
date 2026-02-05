type ProjectProps = {
	title: string
	description: string
	techstack: string[]
	githubLink?: string
	demoLink?: string
}

export default function Project({title, description, techstack, githubLink, demoLink}: ProjectProps) {
	return (
		<article>
			<header>
				<h4 className="capitalize">{title}</h4>
			</header>
			<div>
				<p>{description}</p>
				<ul className="flex items-center">
					{techstack.map(tech => <li>{tech}</li>)}
				</ul>
				<div className="flex items-center">
					{githubLink && <a href={githubLink}></a>}
					{demoLink && <a href={demoLink}></a>}
				</div>
			</div>
		</article>
	)
}