import { Button, Card, Image, Wrap, Badge, For, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa6"
import { FiExternalLink } from "react-icons/fi";


export default function ProjectCard({title, imgUrl, description, techStack, githubLink, demoLink}) {
	return (
		<Card.Root overflow="hidden" rounded="2xl">
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
				{githubLink && <LinkBox>
					<Button variant="outline" size="sm" rounded="lg">
						<FaGithub /> Code
					</Button>
					<LinkOverlay href={githubLink} target="_blank" />
				</LinkBox>}
				{demoLink && <LinkBox>
					<Button variant="solid" size="sm" rounded="lg">
						<FiExternalLink /> Live demo
					</Button>
					<LinkOverlay href={demoLink} target="_blank" />
				</LinkBox>}
			</Card.Footer>
		</Card.Root>
	)
}