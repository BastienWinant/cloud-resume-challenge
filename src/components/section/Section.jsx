import { Stack } from "@chakra-ui/react"

export default function Section({children}) {
	return (
		<Stack borderWidth="thin">{ children }</Stack>
	)
}