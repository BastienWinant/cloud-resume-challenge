import { Container } from "@chakra-ui/react"

export default function Body({ children }) {
	return (
		<Container borderWidth="thin">
			{ children }
		</Container>
	)
}