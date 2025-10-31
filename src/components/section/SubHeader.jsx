import { Container, Text } from "@chakra-ui/react"

export default function SubHeader({children}) {
	return (
		<Container maxW="2xl" my="2">
			<Text textAlign="center">{children}</Text>
		</Container>
	)
}