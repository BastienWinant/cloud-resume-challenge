import { Container, Center, Heading } from "@chakra-ui/react"

export default function Header({ children }) {
	return (
		<Container>
			<Center>
				<Heading as="h2" size="lg" textTransform="capitalize">{children}</Heading>
			</Center>
		</Container>
	)
}