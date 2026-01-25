import { NavLink, useLocation } from "react-router";

export default function Header() {
	const location = useLocation()
	const dynamicTarget = location.pathname.startsWith("/about") ? "/" : "/about"

	return (
		<header className="h-48 md:col-span-2 flex items-start justify-between text-xl lg:text-2xl capitalize">
			<hgroup>
				<h1 className="font-medium">alexandra moore,</h1>
				<p className="text-zinc-400">senior producer</p>
			</hgroup>
			<NavLink to={dynamicTarget} className="font-medium">
				{dynamicTarget === "/about" ? "about" : "back"}
			</NavLink>
		</header>
	)
}