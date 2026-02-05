import clsx from "clsx";

export default function Aside() {
	return (
		<aside className={clsx(
			"md:sticky md:top-0 self-start mx-3 md:mx-0 pt-7 pb-5 flex flex-col gap-20 border-t border-stone-100/30"
		)}>
			<p className="w-[90%] max-w-[28em] md:w-[85%]">
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</p>
			<nav className="flex flex-col text-xs">
				<a
					className="px-2 py-3 border-t border-stone-100/20 hover:bg-stone-100 hover:text-stone-950"
					href="mailto:bastien.winant@gmail.com"
				>bastien.winant@gmail.com</a>
				<p
					className="px-2 py-3 border-t border-stone-100/20 hover:bg-stone-100 hover:text-stone-950"
				>(555) 123-4567</p>
				<a
					className="px-2 py-3 border-t border-stone-100/20 hover:bg-stone-100 hover:text-stone-950"
					href="https://github.com/BastienWinant"
				>Github</a>
			</nav>
		</aside>
	)
}