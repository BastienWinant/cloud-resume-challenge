import { Box, Container } from "@chakra-ui/react"

export default function Body({children}) {
	return (
		<Box>
			<Container>{children}</Container>
		</Box>
	)
}