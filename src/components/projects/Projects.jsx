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
				<SimpleGrid columns={[1, null, 3]} gap={{ base: "4", md: 3, lg: 4 }} maxW="6xl" mx="auto">
					<ProjectCard
						title="Color Scheme Generator"
						description="Wep app that lets you generate, adjust, and save color schemes. It was built from Chakra UI component to focus on React context management and user authentication."
						imgUrl="https://images.unsplash.com/photo-1761995912979-c3646524391b"
						techStack={["React", "Firebase", "The Color API", "Chakra UI"]}
					/>
					<ProjectCard
						title="Personal Dashboard"
						description="A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS."
						imgUrl="https://images.unsplash.com/photo-1761852281574-48d871a41ee4"
						techStack={["React", "Firebase", "The Color API", "Chakra UI"]}
					/>
					<ProjectCard
						title="Password Generator"
						description="An app that generates random passwords based on a few user inputs, e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript."
						imgUrl="https://images.unsplash.com/photo-1742268351289-8ef991675c79"
						techStack={["React", "Firebase", "The Color API", "Chakra UI"]}
					/>
				</SimpleGrid>
			</Section.Body>
		</Section>
	)
}