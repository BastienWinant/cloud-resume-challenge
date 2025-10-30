import { Stack } from "@chakra-ui/react"

export default function Section({children}) {
	return (
		<Stack as="section" borderWidth="medium">{children}</Stack>
	)
}