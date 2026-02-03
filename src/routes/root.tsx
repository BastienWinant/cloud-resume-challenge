import Header from "../components/Header"
import Aside from "../components/Aside"
import { Outlet } from "react-router"
import clsx from "clsx"

export default function Root() {
	return (
		<div className={clsx(
			"min-h-dvh grid grid-cols-1 auto-rows-min md:grid-cols-[360px_1fr] gap-x-12 p-5 md:px-7",
			"text-stone-100 text-base"
		)}>
			<Header />
			<Aside />
			<main className="mx-3 md:mx-0 flex flex-col gap-64">
				<Outlet />
				<a className="text-xl font-semibold mb-1.5" href="mailto:bastien.winant@gmail.com">Contact me</a>
			</main>
		</div>
	)
}