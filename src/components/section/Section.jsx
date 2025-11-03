import { Stack } from "@chakra-ui/react"

export default function Section({ ref, children }) {
	return (
		<Stack py="24" gap="8" ref={ref}>{children}</Stack>
	)
}