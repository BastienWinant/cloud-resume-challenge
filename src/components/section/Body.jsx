import { Box, Container } from "@chakra-ui/react"

export default function Body({children}) {
	return (
		<Box mt="6">
			<Container maxW="6xl">{children}</Container>
		</Box>
	)
}