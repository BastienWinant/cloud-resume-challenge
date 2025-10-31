import { Container, Text } from "@chakra-ui/react"

export default function SubHeader({children}) {
	return (
		<Container maxW="2xl" mt="2" mb="4">
			<Text textAlign="center" color="fg.muted">{children}</Text>
		</Container>
	)
}