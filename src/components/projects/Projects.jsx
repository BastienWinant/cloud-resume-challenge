import Section from "@/components/section/index.js"
import ProjectCard from "@/components/projects/ProjectCard.jsx"
import { SimpleGrid } from "@chakra-ui/react"

export default function Projects() {
	return (
		<Section>
			<Section.Header>features projects</Section.Header>
			<Section.Body>
				<SimpleGrid
					gap="6"
					justifyItems="center"
					minChildWidth="xs"
				>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</SimpleGrid>
			</Section.Body>
		</Section>
	)
}