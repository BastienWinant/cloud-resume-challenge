import { Button, Card, Image, For, Wrap, Badge } from "@chakra-ui/react"


export default function ProjectCard({ title, description, imgUrl, techStack }) {
	return (
		<Card.Root overflow="hidden">
			<Image
				src={imgUrl}
				alt="Project screenshot."
				aspectRatio={{ base: 1.5, md: 1.75}}
			/>
			<Card.Body gap="2">
				<Card.Title>{title}</Card.Title>
				<Card.Description lineClamp={{ base: "2" }}>{description}</Card.Description>
				<Wrap mt="4">
					<For each={techStack}>
						{(item, index) => <Badge key={index}>{item}</Badge>}
					</For>
				</Wrap>
			</Card.Body>
			<Card.Footer gap="2">
				<Button variant="solid">Buy now</Button>
				<Button variant="ghost">Add to cart</Button>
			</Card.Footer>
		</Card.Root>
	)
}