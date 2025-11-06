import Section from "@/components/section/index.js"
import { SimpleGrid } from "@chakra-ui/react"
import ProjectCard from "@/components/projects/ProjectCard.jsx"
import { useNavContext } from "@/contexts/navContext/NavContext.jsx"

export default function Projects() {
	const { projectsRef } = useNavContext()

	return (
		<Section ref={projectsRef}>
			<Section.Header>featured projects</Section.Header>
			<Section.Body>
				<SimpleGrid columns={[1, null, 3]} gap={{ base: "8", md: 3, lg: 4 }} maxW="6xl" mx="auto">
					<ProjectCard
						title="Color Scheme Generator"
						description="An app that lets users generate, adjust and save color schemes."
						imgUrl="https://images.unsplash.com/photo-1762223749370-4d05a6023f8f"
						techStack={['React', 'Firebase', 'Chakra UI', 'The Color API']}
						demoUrl="https://github.com/BastienWinant"
						githubUrl="https://github.com/BastienWinant"
					/>
					<ProjectCard
						title="Quiz App"
						description="Quizzical is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components."
						imgUrl="https://images.unsplash.com/photo-1758968592659-11880869f06d"
						techStack={['C#', 'TypeScript', 'MongoDB']}
						demoUrl="https://github.com/BastienWinant"
						githubUrl="https://github.com/BastienWinant"
					/>
					<ProjectCard
						title="Personal Dashboard"
						description="A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS."
						imgUrl="https://images.unsplash.com/photo-1761939433931-4305ebba3ec9"
						techStack={['Django', 'PostgreSQL', 'AWS']}
						demoUrl="https://github.com/BastienWinant"
						githubUrl="https://github.com/BastienWinant"
					/>
				</SimpleGrid>
			</Section.Body>
		</Section>
	)
}