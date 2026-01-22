import Section from "../components/Section"

export default function Index() {
	return (
		<div className="flex flex-col">
			<Section header="experience">
				<div className="flex flex-col lg:flex-row py-5 border-t border-zinc-100/20 text-sm lg:text-base">
					<div className="flex flex-col gap-y-3">
						<p className="capitalize font-medium">senior producer</p>
						<ul className="text-zinc-400">
							<li>Creative Agency XYZ</li>
							<li className="capitalize">June 2022 – Present</li>
							<li className="capitalize">Remote & New York, NY</li>
						</ul>
					</div>
					<ul className="list-disc flex flex-col gap-2">
						<li>Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.</li>
						<li>Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.</li>
					</ul>
				</div>
			</Section>
			<Section header="skills">
				this is the skills section
			</Section>
			<Section header="education">
				<div className="grid grid-rows-1 grid-cols-2 gap-x-10">
					<p>University of California, Los Angeles (UCLA)</p>
					<div>
						<p>Bachelor of Fine Arts in Graphics Design</p>
						<p className="font-light text-zinc-400">Minor: Studio Photography</p>
					</div>
				</div>
			</Section>
		</div>
	)
}