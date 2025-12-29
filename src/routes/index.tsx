import Section from "../components/resume/Section"
import Experience from "../components/resume/Experience.tsx"
import Achievement from "../components/resume/Achievement.tsx"

export default function Index() {
	return (
		<section className="flex flex-col gap-8">
			<Section title="experience">
				<div className="flex flex-col gap-12">
					<Experience
						title="senior producer"
						company="Creative Agency XYZ"
						dates="June 2022 - Present"
						location="Remote & New York, NY"
					>
						<Achievement>
							Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives.
							A catalyst for collaboration across all mediums.
						</Achievement>
						<Achievement>
							Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.
						</Achievement>
					</Experience>
					<Experience
						title="senior producer"
						company="Pixel Studios"
						dates="December 2021 - June 2022"
						location="New York, NY"
					>
						<Achievement>
							Orchestrated the creation of integrated video, motion, and photo content for multi-platform marketing
							campaigns, ensuring seamless execution and brand alignment.
						</Achievement>
						<Achievement>
							Directed all phases of production operations (pre-production, production, post-production),
							meticulously managing budgets, contracts, and legal requirements to deliver projects on time and within quality standards.
						</Achievement>
						<Achievement>
							Strategically developed and managed production schedules, creative strategies, and talent relations,
							optimizing resources to deliver high-quality content within budget parameters.
						</Achievement>
						<Achievement>
							Clients include: Nestive, Zentrox, Pollenate, Vireo and more.
						</Achievement>
					</Experience>
					<Experience
						title="content producer"
						company="Creative Hub Studio"
						dates="October 2016 - March 2018"
						location="Los Angeles, CA"
					>
						<Achievement>
							Facilitated clear and efficient communication across cross-functional teams (Marketing, Brand, Creative,
							IT, QA), ensuring seamless collaboration and project alignment.
						</Achievement>
						<Achievement>
							Proactively identified and integrated industry trends, emerging technologies, and cultural insights to
							enhance creative output and maintain brand relevance.
						</Achievement>
						<Achievement>
							Clients include: Lunethra, Forgekind and more.
						</Achievement>
					</Experience>
				</div>
			</Section>
			<Section title="skills">
				<div className="flex flex-wrap gap-16 text-sm capitalize">
					<section>
						<header className="text-secondary mb-4">Communication & Collaboration</header>
						<ul className="list-disc list-inside flex flex-col gap-1">
							<li>Cross-Functional Team Leadership</li>
							<li>Client Relationship Management</li>
							<li>Stakeholder Communication</li>
						</ul>
					</section>
					<section>
						<header className="text-secondary mb-4">project management</header>
						<ul className="list-disc list-inside flex flex-col gap-1">
							<li>Budget Management & Forecasting</li>
							<li>Timeline Development & Execution</li>
							<li>Vendor & Contract Negotiation</li>
							<li>On-Site Production Management</li>
						</ul>
					</section>
					<section>
						<header className="text-secondary mb-4">strategic & creative oversight</header>
						<ul className="list-disc list-inside flex flex-col gap-1">
							<li>Creative Strategy Development</li>
							<li>Talent Relations & Management</li>
							<li>Creative Direction Oversight</li>
							<li>Brand Alignment</li>
						</ul>
					</section>
				</div>
			</Section>
			<Section title="education">
				<div className="grid grid-rows-1 grid-cols-2 gap-6">
					<div>
						University of London, Goldsmiths
					</div>
					<div>
						<p>Bachelor of Science in Computer Science</p>
						<p className="text-secondary">Focus: Data Science</p>
					</div>
				</div>
			</Section>
		</section>
	)
}