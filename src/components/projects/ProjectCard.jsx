import { Button, Card, Image, Wrap, Badge, For } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa6"
import { FiExternalLink } from "react-icons/fi";


export default function ProjectCard() {
	const title = "Living room Sofa"
	const description = "This sofa is perfect for modern tropical spaces, baroque inspired spaces."
	const imgUrl = "https://images.unsplash.com/photo-1761833199030-3e2c34a76523"
	const techStack = ["React", "TypeScript", "Tailwind CSS", "Recharts"]

	return (
		<Card.Root overflow="hidden">
			<Image
				src={imgUrl}
				alt="Project screenshot."
				fit="cover"
				aspectRatio={{ base: 1.75 }}
			/>
			<Card.Body gap="2">
				<Card.Title>{title}</Card.Title>
				<Card.Description lineClamp="3">{description}</Card.Description>
				<Wrap mt="4">
					<For each={techStack}>
						{(item, index) => <Badge key={index}>{item}</Badge>}
					</For>
				</Wrap>
			</Card.Body>
			<Card.Footer gap="2">
				<Button variant="outline" size="sm">
					<FaGithub /> Code
				</Button>
				<Button variant="solid" size="sm">
					<FiExternalLink /> Live demo
				</Button>
			</Card.Footer>
		</Card.Root>
	)
}