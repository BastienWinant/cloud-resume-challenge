import { Box, Container, Text } from "@chakra-ui/react"

export default function Footer() {
	return (
		<Box py="8">
			<Container>
				<Text textAlign="center">© {new Date().getFullYear()} Bastien Winant. Built with React and Tailwind CSS.</Text>
			</Container>
		</Box>
	)
}