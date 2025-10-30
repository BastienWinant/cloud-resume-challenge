import { VStack, Heading } from "@chakra-ui/react"

export default function Header({children}) {
	return (
		<VStack as="header">
			<Heading as="h2" size="lg">{children}</Heading>
		</VStack>
	)
}