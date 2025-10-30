import { VStack, Heading } from "@chakra-ui/react"

export default function Header({children}) {
	return (
		<VStack as="header" borderWidth="thin">
			<Heading as="h2">{children}</Heading>
		</VStack>
	)
}