import { NavLink, useLocation } from "react-router"

export default function Header() {
	const location = useLocation()
	const dynamicTarget = location.pathname.startsWith("/about") ? "/" : "/about"

	return (
		<header className="h-52 xl:h-56 md:col-span-2 flex items-start justify-between text-xl capitalize xl:text-2xl">
			<hgroup>
				<h1 className="font-medium">alexandra moore,</h1>
				<p className="text-stone-400">senior producer</p>
			</hgroup>
			<NavLink to={dynamicTarget} className="font-medium">
				{dynamicTarget === "/about" ? "about" : "back"}
			</NavLink>
		</header>
	)
}