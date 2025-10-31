import Section from "@/components/section/index.js"
import ContactCard from "@/components/contact/ContactCard.jsx"
import { SimpleGrid } from "@chakra-ui/react"
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6"

export default function Contact() {
	return (
		<Section>
			<Section.Header>Get In Touch</Section.Header>
			<Section.SubHeader>
				I'm currently looking for new opportunities and would love to hear from you.
				Whether you have a question or just want to say hi, feel free to reach out!
			</Section.SubHeader>
			<Section.Body>
				<SimpleGrid
					columns={[1, null, 3]}
					maxW="4xl"
					mx="auto"
					gap="6"
					justifyItems="center"
				>
					<ContactCard
						type="Email"
						detail="bastien.winant@gmail.com"
						logo={<FaEnvelope />}
					/>
					<ContactCard
						type="Phone"
						detail="+352 691 223 827"
						logo={<FaPhone />}
					/>
					<ContactCard
						type="Location"
						detail="Luxembourg, Luxembourg"
						logo={<FaLocationDot />}
					/>
				</SimpleGrid>
			</Section.Body>
		</Section>
	)
}