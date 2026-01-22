import Section from "../components/Section"

export default function Index() {
	return (
		<div className="flex flex-col">
			<Section header="experience">
				this is the experience section
			</Section>
			<Section header="skills">
				this is the skills section
			</Section>
			<Section header="education">
				this is the education section
			</Section>
		</div>
	)
}