import { Container, Center, Button, Heading, VStack, Text, ButtonGroup, Highlight } from "@chakra-ui/react"


export default function Landing() {
	return (
		<Container height="100vh">
			<Center h="full" borderWidth="thin">
				<VStack textAlign="center">
					<Heading as="h1" size="2xl">
						<Highlight ignoreCase query="bastien winant" styles={{ color: "teal.600" }}>
							Hi, I'm Bastien Winant
						</Highlight>
					</Heading>
					<Text mb="3" fontSize="md" color="fg.muted">
						PayMe helps startups get paid by anyone, anywhere in the world
					</Text>
					<ButtonGroup size="sm">
						<Button variant="solid" w="32">View My Work</Button>
						<Button variant="subtle" w="32">Get In Touch</Button>
					</ButtonGroup>
				</VStack>
			</Center>
		</Container>
	)
}