import Section from "@/components/section/index.js"
import { useNavContext } from "@/contexts/navContext/NavContext.jsx"

export default function Contact() {
	const { contactRef } = useNavContext()

	return (
		<Section ref={contactRef}>
			<Section.Header>get in touch</Section.Header>
			<Section.Body>
				this is the contact page
			</Section.Body>
		</Section>
	)
}