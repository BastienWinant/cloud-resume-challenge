import { Card, Icon } from "@chakra-ui/react"

export default function ContactCard({ type, detail, logo }) {
	return (
		<Card.Root variant="subtle" overflow="hidden" rounded="2xl" w="full" maxW="xs">
			<Card.Body gap="2" alignItems="center">
				<Icon size="lg">
					{logo}
				</Icon>
				<Card.Title mt="2">{type}</Card.Title>
				<Card.Description>{detail}</Card.Description>
			</Card.Body>
		</Card.Root>
	)
}