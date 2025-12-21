import Experience from "../components/Experience"

export default function Index() {
	return (
		<section>
			<h2 className="text-xs font-semibold capitalize">experience</h2>

			<div className="flex flex-col gap-12">
				<Experience
					title="senior producer"
					company="Creative Agency XYZ"
					dates="June 2022 - Present"
					location="Remote & New York, NY"
				>
					<li>
						Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives.
						A catalyst for collaboration across all mediums.
					</li>
					<li>
						Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.
					</li>
				</Experience>
				<Experience
					title="senior producer"
					company="Pixel Studios"
					dates="December 2021 - June 2022"
					location="New York, NY"
				>
					<li>
						Orchestrated the creation of integrated video, motion, and photo content for multi-platform marketing
						campaigns, ensuring seamless execution and brand alignment.
					</li>
					<li>
						Directed all phases of production operations (pre-production, production, post-production),
						meticulously managing budgets, contracts, and legal requirements to deliver projects on time and within quality standards.
					</li>
					<li>
						Strategically developed and managed production schedules, creative strategies, and talent relations,
						optimizing resources to deliver high-quality content within budget parameters.
					</li>
					<li>
						Clients include: Nestive, Zentrox, Pollenate, Vireo and more.
					</li>
				</Experience>
			</div>
		</section>
	)
}