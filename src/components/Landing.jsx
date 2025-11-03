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

export default function Landing() {
	return (
		<Container
			h="100vh"
			py={{ base: 4, md: 6, lg: 8 }}
			borderWidth="thin"
		>
			<Center h="full" bg="bg.panel">
				<VStack maxW="2xl" gap="4">
					<Heading
						as="h1"
						size={{ base: "xl", md: "2xl" }}
						fontWeight="medium"
					>
						<Highlight
							ignoreCase
							query="bastien winant"
							styles={{ color: "teal.600" }}
						>
							Hi, I'm Bastien Winant
						</Highlight>
						</Heading>
					<Text textAlign="center">
						Passionate about building clean, user-friendly web applications.
						I love turning ideas into reality through code and creating experiences that make a difference.
					</Text>
					<ButtonGroup mt="4">
						<Button w="32">view my work</Button>
						<Button w="32" variant="outline">get in touch</Button>
					</ButtonGroup>
				</VStack>
			</Center>
		</Container>
	)
}