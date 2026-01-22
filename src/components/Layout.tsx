import { Outlet } from "react-router"
import Header from "./Header"
import Aside from "./Aside"
import clsx from "clsx"

export default function Layout() {
	return (
		<div
			className={clsx(
				"min-h-dvh grid auto-rows-min grid-cols-1 md:grid-cols-[380px_1fr] gap-x-8",
				"p-5 md:p-7 pb-7 bg-zinc-950 text-zinc-100 font-light"
			)}
		>
			<Header />
			<Aside />
			<main className="flex flex-col justify-between gap-y-24 mx-3">
				<Outlet />
				<a
					className="self-start font-medium text-xl"
					href="mailto:bastien.winant@gmail.com"
				>Contact me</a>
			</main>
		</div>
	)
}