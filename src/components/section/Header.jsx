import { VStack, Heading } from "@chakra-ui/react"

export default function Header({children}) {
	return (
		<VStack as="header">
			<Heading as="h2" size="lg" fontWeight="medium">{children}</Heading>
		</VStack>
	)
}