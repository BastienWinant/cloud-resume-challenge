import { Outlet } from "react-router"
import Header from "./Header"
import Aside from "./Aside"
import clsx from "clsx"

export default function Layout() {
	return (
		<div className={
			clsx(
				"min-h-dvh grid auto-rows-min grid-cols-1 md:grid-cols-[360px_1fr] lg:grid-cols-[380px_1fr] gap-x-8",
				"bg-zinc-950 text-zinc-100 p-5 pb-7 md:px-7 font-light text-base lg:text-base-lg"
			)}
		>
			<Header />
			<Aside />
			<main className="flex flex-col gap-y-48 mx-3">
				<Outlet />
				<a className="text-xl font-medium" href="mailto:bastien.winant@gmail.com">Contact me</a>
			</main>
		</div>
	)
}