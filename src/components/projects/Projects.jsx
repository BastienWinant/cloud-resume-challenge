import Section from "@/components/section/index.js"
import ProjectCard from "@/components/projects/ProjectCard.jsx"
import { SimpleGrid, For } from "@chakra-ui/react"
import projects from '@/assets/projects.json';

export default function Projects() {
	return (
		<Section>
			<Section.Header>Featured Projects</Section.Header>
			<Section.SubHeader>
				Here are some of my recent projects that showcase my skills in web development.
				Each project represents a unique challenge and learning experience.
			</Section.SubHeader>
			<Section.Body>
				<SimpleGrid
					gap="6"
					justifyItems="center"
					minChildWidth="xs"
				>
					<For each={projects}>
						{(item, index) => {
							return (
								<ProjectCard
									key={index}
									title={item.title}
									description={item.description}
									imgUrl={item.imgUrl}
									techStack={item.techStack}
									githubLink={item.githubLink}
									demoLink={item.demoLink}
								/>
							)
						}}
					</For>
				</SimpleGrid>
			</Section.Body>
		</Section>
	)
}