import { Container } from "@chakra-ui/react"

export default function Body({ children }) {
	return (
		<Container maxW="6xl">
			{ children }
		</Container>
	)
}