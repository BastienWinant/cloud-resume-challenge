import { Center, ButtonGroup, Button, Heading, Highlight, VStack, Text } from "@chakra-ui/react"


export default function Landing() {
	return (
		<Center h="100vh" maxH="700px">
			<VStack w="11/12" maxW="2xl" textAlign="center" gap="6">
				<Heading as="h1" size="lg">
					<Highlight ignoreCase query="bastien winant" styles={{ color: "teal.600" }}>
						Hi, I'm Bastien Winant
					</Highlight>
				</Heading>
				<Text mb="3" fontSize="md" color="fg.muted">
					Passionate about building clean, user-friendly web applications.
					I love turning ideas into reality through code and creating experiences that make a difference.
				</Text>
				<ButtonGroup>
					<Button variant="solid" size="sm" w="42">view my work</Button>
					<Button variant="outline" size="sm" w="42">get in touch</Button>
				</ButtonGroup>
			</VStack>
		</Center>
	)
}