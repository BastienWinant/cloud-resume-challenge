import { ScrollArea } from "@chakra-ui/react"

export default function Layout({ children }) {
	return (
		<ScrollArea.Root size="xs" height="100vh" variant="hover">
			<ScrollArea.Viewport
				bgBlendMode="multiply"
				bgColor="bg.panel"
				bgImage="url(https://images.unsplash.com/photo-1592770733110-738f7769188c)"
				bgSize="cover"
				bgPosition="center"
			>
				<ScrollArea.Content>
					{ children }
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	)
}