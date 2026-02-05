import Section from "../components/Section"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Project from "../components/Project"

export default function Index() {
	return (
		<div className="flex flex-col gap-y-12">
			<Section title="experience">
				<Experience
					title="senior producer"
					company="Creative Agency XYZ"
					start="june 2022"
					location="Remote & New York, NY"
					accomplishments={[
						`Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives.
						A catalyst for collaboration across all mediums.`,
						`Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.`
					]}
				/>
				<Experience
					title="senior producer"
					company="Pixel Studios"
					start="december 2021"
					end="june 2022"
					location="New York, NY"
					accomplishments={[
						`Orchestrated the creation of integrated video, motion,
						and photo content for multi-platform marketing campaigns, ensuring seamless execution and brand alignment.`,
						`Directed all phases of production operations (pre-production, production, post-production),
						meticulously managing budgets, contracts, and legal requirements to deliver projects on time and within quality standards.`,
						`Strategically developed and managed production schedules, creative strategies, and talent relations,
						optimizing resources to deliver high-quality content within budget parameters.`,
						`Clients include: Nestive, Zentrox, Pollenate, Vireo and more.`
					]}
				/>
				<Experience
					title="content producer"
					company="Creative Hub Studio"
					start="october 2016"
					end="march 2018"
					location="Los Angeles, CA"
					accomplishments={[
						`Facilitated clear and efficient communication across cross-functional
						teams (Marketing, Brand, Creative, IT, QA), ensuring seamless collaboration and project alignment.`,
						`Proactively identified and integrated industry trends, emerging technologies, and cultural insights to
						enhance creative output and maintain brand relevance.`,
						`Clients include: Lunethra, Forgekind and more.`
					]}
				/>
			</Section>
			<Section title="projects">
				<div className="grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(18em,1fr))] gap-5">
					<Project
						title="color scheme generator"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla dolor sapien, eget maximus neque venenatis nec."
						techstack={['React', 'Firebase Realtime Database', 'Firebase Authentication', 'Chakra UI']}
						githubLink="https://github.com/BastienWinant"
					/>
					<Project
						title="color scheme generator"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla dolor sapien, eget maximus neque venenatis nec."
						techstack={['React', 'Firebase Realtime Database', 'Firebase Authentication', 'Chakra UI']}
						githubLink="https://github.com/BastienWinant"
					/>
					<Project
						title="color scheme generator"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla dolor sapien, eget maximus neque venenatis nec."
						techstack={['React', 'Firebase Realtime Database', 'Firebase Authentication', 'Chakra UI']}
						githubLink="https://github.com/BastienWinant"
					/>
				</div>
			</Section>
			<Section title="skills">
				<div className="flex flex-wrap gap-x-20 gap-y-9">
					<Skills
						category="project management"
						skills={[
							'budget management & forecasting',
							'timeline development & execution',
							'vendor & contract negotiation',
							'on-Site production management'
						]}
					/>
					<Skills
						category="strategic & creative oversight"
						skills={[
							'creative strategy development',
							'talent relations & management',
							'creative direction oversight',
							'brand alignment'
						]}
					/>
					<Skills
						category="project management"
						skills={[
							'cross-functional team leadership',
							'client relationship management',
							'stakeholder communication'
						]}
					/>
				</div>
			</Section>
			<Section title="education">
				<div className="grid grid-cols-2 gap-x-9">
					<p>University of London, Goldsmiths</p>
					<div>
						{/*<p>Bachelor of Fine Arts in Graphic Design</p>*/}
						<p>Bachelor's in Computer Science</p>
						<p className="text-stone-400">Focus: Data Science</p>
					</div>
				</div>
			</Section>
		</div>
	)
}