import {
	Container,
	Center,
	VStack,
	Heading,
	Highlight,
	Text,
	ButtonGroup,
	Button
} from "@chakra-ui/react"
import { useNavContext } from "@/contexts/navContext/NavContext.jsx"

export default function Landing() {
	const { projectsRef, contactRef, scrollToRef } = useNavContext()

	return (
		<Container
			h="100vh"
			maxH="700x"
			py={{ base: 4, md: 6, lg: 8 }}
		>
			<Center h="full" bg="bg.panel" px="2">
				<VStack maxW="2xl" gap="4">
					<Heading
						as="h1"
						size={{ base: "xl", md: "2xl" }}
						fontWeight="medium"
					>
						<Highlight
							ignoreCase
							query="bastien winant"
							styles={{ color: "blue.600" }}
						>
							Hi, I'm Bastien Winant
						</Highlight>
						</Heading>
					<Text textAlign="center">
						Passionate about building clean, user-friendly web applications.
						I love turning ideas into reality through code and creating experiences that make a difference.
					</Text>
					<ButtonGroup mt="4">
						<Button w="32" onClick={() => scrollToRef(projectsRef)}>view my work</Button>
						<Button w="32" onClick={() => scrollToRef(contactRef)} variant="outline">get in touch</Button>
					</ButtonGroup>
				</VStack>
			</Center>
		</Container>
	)
}