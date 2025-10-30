import { Text } from "@chakra-ui/react"

export default function SubHeader({children}) {
	return (
		<Text fontSize="md" color="fg.muted">{children}</Text>
	)
}