import { Button, Card, Image, Wrap, Badge, LinkBox, LinkOverlay, For } from "@chakra-ui/react"

export default function ProjectCard({title, description, imgUrl, techStack, demoUrl, githubUrl }) {
	return (
		<Card.Root overflow="hidden" size={{ base: "md", md: "sm", lg: "md" }}>
			<Image
				src={imgUrl}
				alt="Project screenshot"
				aspectRatio={{ base: 1.25, sm: 2, md: 1.5 }}
			/>
			<Card.Body gap="2">
				<Card.Title>{title}</Card.Title>
				<Card.Description lineClamp={{ md: 3 }}>{description}</Card.Description>
				<Wrap mt="4">
					<For each={techStack}>
						{(item, index) => <Badge key={index}>{item}</Badge>}
					</For>
				</Wrap>
			</Card.Body>
			<Card.Footer gap="2">
				<LinkBox>
					<Button variant="solid" size={{ base: "sm", md: "xs", lg: "sm" }}>Live</Button>
					<LinkOverlay href={demoUrl} target="_blank" />
				</LinkBox>
				<LinkBox>
					<Button variant="ghost" size={{ base: "sm", md: "xs", lg: "sm" }}>Code</Button>
					<LinkOverlay href={githubUrl} target="_blank" />
				</LinkBox>
				{/*<Button variant="solid" size={{ base: "sm", md: "xs", lg: "sm" }}>Live</Button>*/}
				{/*<Button variant="ghost" size={{ base: "sm", md: "xs", lg: "sm" }}>Code</Button>*/}
			</Card.Footer>
		</Card.Root>
	)
}