import Header from "../components/Header"
import Container from "./Container"
import Aside from "./Aside"
import { Outlet } from "react-router"
import clsx from "clsx"

export default function Layout() {
	return (
		<div className={clsx(
			"min-h-screen flex flex-col",
			"bg-background text-primary"
		)}>
			<Header />
			<div className="h-full px-2 md:px-0">
				<Container className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[300px_1fr] md:grid-rows-1 md:gap-x-12 lg:grid-cols-[360px_1fr]">
					<Aside />
					<main className="h-full py-8 border-t-2 border-t-secondary/20">
						<Outlet />
					</main>
				</Container>
			</div>
		</div>
	)
}