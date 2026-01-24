import Section from "../components/Section"
import Experience from "../components/Experience"
import SkillsList from "../components/SkillsList"

export default function Index() {
	return (
		<div className="flex flex-col">
			<Section header="experience">
				<div className="flex flex-col gap-y-10">
					<Experience
						title="senior producer"
						company="Creative Agency XYZ"
						dates="June 2022 – Present"
						location="Remote & New York, NY"
						accomplishments={[
							'Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.',
							'Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.'
						]}
					/>
					<Experience
						title="senior producer"
						company="Pixel Studios"
						dates="December 2021 - June 2022"
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
						dates="October 2016 - March 2018"
						location="Los Angeles, CA"
						accomplishments={[
							'Facilitated clear and efficient communication across cross-functional teams (Marketing, Brand, Creative, IT, QA), ensuring seamless collaboration and project alignment.',
							'Proactively identified and integrated industry trends, emerging technologies, and cultural insights to enhance creative output and maintain brand relevance.',
							'Clients include: Lunethra, Forgekind and more.'
						]}
					/>
				</div>
			</Section>
			<Section header="skills">
				<div className="flex items-start justify-between flex-wrap gap-x-12 gap-y-10">
					<SkillsList
						category="product management"
						skills={[
							'Budget Management & Forecasting', 'Timeline Development & Execution', 'Vendor & Contract Negotiation', 'On-Site Production Management'
						]}
					/>
					<SkillsList
						category="Strategic & Creative Oversight "
						skills={[
							'Creative Strategy Development', 'Talent Relations & Management', 'Creative Direction Oversight', 'Brand Alignment'
						]}
					/>
					<SkillsList
						category="Communication & Collaboration"
						skills={[
							'Cross-Functional Team Leadership', 'Client Relationship Management', 'Stakeholder Communication'
						]}
					/>
				</div>
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