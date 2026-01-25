import Section from "../components/Section"
import SkillSet from "../components/SkillSet"
import Experience from "../components/Experience"

export default function Index() {
	return (
		<div className="flex flex-col gap-y-9">
			<Section title="experience">
				<Experience
					title="senior producer"
					company="Creative Agency XYZ"
					start="june 2022"
					location="Remote & New York, NY"
					accomplishments={[
						'Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.',
						'Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.'
					]}
				/>
				<Experience
					title="senior producer"
					company="Pixel Studios"
					start="december 2021"
					end="june 2022"
					location="New York, NY"
					accomplishments={[
						'Orchestrated the creation of integrated video, motion, and photo content for multi-platform marketing campaigns, ensuring seamless execution and brand alignment.',
						'Directed all phases of production operations (pre-production, production, post-production), meticulously managing budgets, contracts, and legal requirements to deliver projects on time and within quality standards.',
						'Strategically developed and managed production schedules, creative strategies, and talent relations, optimizing resources to deliver high-quality content within budget parameters.',
						'Clients include: Nestive, Zentrox, Pollenate, Vireo and more.'
					]}
				/>
				<Experience
					title="content producer"
					company="Creative Hub Studio"
					start="october 2016"
					end="march 2018"
					location="Los Angeles, CA"
					accomplishments={[
						'Facilitated clear and efficient communication across cross-functional teams (Marketing, Brand, Creative, IT, QA), ensuring seamless collaboration and project alignment.',
						'Proactively identified and integrated industry trends, emerging technologies, and cultural insights to enhance creative output and maintain brand relevance.',
						'Clients include: Lunethra, Forgekind and more.'
					]}
				/>
			</Section>
			<Section title="skills">
				<div className="flex gap-x-[10vw] gap-y-10 flex-wrap">
					<SkillSet
						category="product management"
						skills={[
							'budgement management & forecasting',
							'timeline development & execution',
							'vendor & contract negotiation',
							'on-site production management'
						]}
					/>
					<SkillSet
						category="communication & collaboration"
						skills={[
							'cross-functional team leadership',
							'client relationship management',
							'stakeholder communication'
						]}
					/>
					<SkillSet
						category="strategic & creative oversight"
						skills={[
							'creative strategy development',
							'talent relations & management',
							'creative direction oversight',
							'brand alignment'
						]}
					/>
				</div>
			</Section>
			<Section title="education">
				<div className="grid grid-rows-1 grid-cols-2 gap-x-9">
					<p>University of California, Los Angeles (UCLA)</p>
					<div>
						<p>Bachelor of Fine Arts in Graphic Design</p>
						<span className="text-zinc-400">Minor: Studio Photography</span>
					</div>
				</div>
			</Section>
		</div>
	)
}