import Section from "@/components/section/index.js"
import { Stack, Text } from "@chakra-ui/react"

export default function About() {
	return (
		<Section>
			<Section.Header>about me</Section.Header>
			<Section.Body>
				<Stack gap="8" maxW="4xl" mx="auto">
					<Text>
						I'm a recent graduate with a degree in Computer Science, eager to start my career in web development.
						During my studies, I discovered my passion for creating intuitive and responsive user interfaces.
					</Text>
					<Text>
						I've spent the past year building personal projects and contributing to open-source,
						which has helped me develop a strong foundation in modern web technologies. I'm always learning and staying up-to-date with the latest trends in web development.
					</Text>
					<Text>
						When I'm not coding, you can find me exploring new coffee shops, reading tech blogs,
						or working on my latest side project. I'm excited to bring my skills and enthusiasm to a dynamic development team.
					</Text>
				</Stack>
			</Section.Body>
		</Section>
	)
}