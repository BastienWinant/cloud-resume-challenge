import { Outlet } from "react-router"
import Header from "./Header"
import Aside from "./Aside"
import clsx from "clsx"

export default function Layout() {
	return (
		<div
			className={clsx(
				"min-h-dvh grid auto-rows-min grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr]",
				"p-4 bg-stone-900 text-zinc-50"
			)}
		>
			<Header />
			<Aside />
			<main className="flex flex-col justify-between gap-y-24 border-2 border-gray-900">
				<Outlet />
				<a
					className="self-start"
					href="mailto:bastien.winant@gmail.com"
				>Contact me</a>
			</main>
		</div>
	)
}