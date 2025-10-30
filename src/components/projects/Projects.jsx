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
					<ProjectCard
						title="Color Scheme Generator"
						description="This sofa is perfect for modern tropical spaces, baroque inspired spaces."
						imgUrl="https://images.unsplash.com/photo-1761833199030-3e2c34a76523"
						techStack={["React", "Firebase", "Chakra UI"]}
						githubLink="#"
						demoLink="#"
					/>
					<ProjectCard
						title="Living room Sofa"
						description="This sofa is perfect for modern tropical spaces, baroque inspired spaces."
						imgUrl="https://plus.unsplash.com/premium_photo-1760541740387-e0af5182d805"
						techStack={["React", "TypeScript", "Tailwind CSS", "Recharts"]}
						githubLink="#"
						demoLink="#"
					/>
					<ProjectCard
						title="Living room Sofa"
						description="This sofa is perfect for modern tropical spaces, baroque inspired spaces."
						imgUrl="https://images.unsplash.com/photo-1761782623468-6374c2a887d1"
						techStack={["React", "TypeScript", "Tailwind CSS", "Recharts"]}
						githubLink="#"
						demoLink="#"
					/>
				</SimpleGrid>
			</Section.Body>
		</Section>
	)
}