import { Button, Card, Image, For, Wrap, Badge } from "@chakra-ui/react"
import { RiGithubLine, RiComputerLine } from "react-icons/ri"


export default function ProjectCard({ title, description, imgUrl, techStack }) {
	return (
		<Card.Root overflow="hidden" size={{ base: "md", md: "sm", lg: "md" }}>
			<Image
				src={imgUrl}
				alt="Project screenshot."
				aspectRatio={{ base: 1.5, sm: 2, md: 1.5 }}
			/>
			<Card.Body gap="2">
				<Card.Title>{title}</Card.Title>
				<Card.Description lineClamp={{ md: 2 }}>{description}</Card.Description>
				<Wrap mt="4">
					<For each={techStack}>
						{(item, index) => <Badge key={index}>{item}</Badge>}
					</For>
				</Wrap>
			</Card.Body>
			<Card.Footer gap="2">
				<Button variant="solid" size={{ base: "sm", md: "xs", lg: "sm" }}>
					<RiComputerLine />
					Live
				</Button>
				<Button variant="ghost" size={{ base: "sm", md: "xs", lg: "sm" }}>
					<RiGithubLine />
					Code
				</Button>
			</Card.Footer>
		</Card.Root>
	)
}