import { Container, Center, Button, Heading, VStack, Text, ButtonGroup, Highlight } from "@chakra-ui/react"
import { useNavContext } from "@/contexts/navContext/NavContext.jsx"

export default function Landing() {
	const { projectsRef, contactRef, scrollToRef } = useNavContext()

	return (
		<Container
			height="100vh"
			maxH="700x"
			py={{ base: 4, md: 6, lg: 8 }}
		>
			<Center h="full" px={{ base: 2, sm: 12 }} bg="bg.panel">
				<VStack gap="4" maxW="3xl" textAlign="center">
					<Heading as="h1" size="2xl">
						<Highlight ignoreCase query="bastien winant" styles={{ color: "teal.600" }}>
							Hi, I'm Bastien Winant
						</Highlight>
					</Heading>
					<Text mb="3" fontSize="md" color="fg.muted">
						I am a passionate frontend developer based in Luxembourg.
						My specialities are React JS and Tailwind CSS, and I love building apps that are delightful to use.
					</Text>
					<ButtonGroup size="sm">
						<Button variant="solid" w="32" onClick={() => scrollToRef(projectsRef)}>View My Work</Button>
						<Button variant="subtle" w="32" onClick={() => scrollToRef(contactRef)}>Get In Touch</Button>
					</ButtonGroup>
				</VStack>
			</Center>
		</Container>
	)
}