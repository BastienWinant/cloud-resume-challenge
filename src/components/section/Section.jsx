import { Stack } from "@chakra-ui/react"

export default function Section({ ref, children }) {
	return (
		<Stack py="32" gap="12" ref={ref}>{ children }</Stack>
	)
}