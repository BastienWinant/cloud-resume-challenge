import { Container, Center, Heading } from "@chakra-ui/react"

export default function Header({ children }) {
	return (
		<Container>
			<Center>
				<Heading as="h2" textTransform="capitalize">
					{children}
				</Heading>
			</Center>
		</Container>
	)
}