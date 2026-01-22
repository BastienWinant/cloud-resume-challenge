import {NavLink, useLocation} from "react-router"

export default function Header() {
	const location = useLocation()
	const dynamicTarget = location.pathname.startsWith("/about") ? "/" : "/about"

	return (
		<header className="h-56 md:col-span-2 flex items-start justify-between capitalize font-medium text-xl md:text-2xl">
			<hgroup>
				<h1>alexandra moore,</h1>
				<p className="font-light text-zinc-400">senior producer</p>
			</hgroup>

			<NavLink
				to={dynamicTarget}
			>{dynamicTarget === "/about" ? "about" : "back"}</NavLink>
		</header>
	)
}