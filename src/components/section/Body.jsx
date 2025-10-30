import { Box, Container } from "@chakra-ui/react"

export default function Body({children}) {
	return (
		<Box>
			<Container maxW="6xl" borderWidth="thin">
				{children}
			</Container>
		</Box>
	)
}