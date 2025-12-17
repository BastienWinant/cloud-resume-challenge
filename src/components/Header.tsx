import Container from "./Container"
import { NavLink, useLocation } from "react-router"

export default function Header() {
	const location = useLocation()

	const dynamicTarget =
		location.pathname.startsWith("/about") ? "/" : "/about"

	return (
		<header className="h-[11.5em] lg:h-[10em] text-xl lg:text-2xl capitalize">
			<Container className="py-5 flex items-start justify-between">
				<hgroup>
					<h1 className="font-medium">bastien winant,</h1>
					<p className="font-light text-secondary">front-end developer</p>
				</hgroup>
				<NavLink className="font-medium focus:outline-none" to={dynamicTarget}>
					{dynamicTarget === "/about" ? "About" : "Back"}
				</NavLink>
			</Container>
		</header>
	)
}