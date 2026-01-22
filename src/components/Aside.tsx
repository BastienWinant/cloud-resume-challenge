export default function Aside() {
	return (
		<aside className="self-start md:sticky md:top-0 mx-3 py-7 flex flex-col gap-y-24 border-t-2 border-zinc-100/10">
			<p className="w-[85%] lg:w-[80%] max-w-96 text-sm lg:text-base">
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</p>

			<nav className="flex flex-col text-xs">
				<a className="px-1 py-3 border-t border-zinc-100/10 hover:bg-zinc-100 hover:text-zinc-900" href="mailto:bastien.winant@gmail.com">hello@figma.com</a>
				<p className="px-1 py-3 border-t border-zinc-100/10 hover:bg-zinc-100 hover:text-zinc-900">+352 691 223 827</p>
				<a className="px-1 py-3 border-t border-zinc-100/10 hover:bg-zinc-100 hover:text-zinc-900" href="https://www.xing.com/profile/Bastien_Winant" target="_blank">Xing</a>
				<a className="px-1 py-3 border-t border-zinc-100/10 hover:bg-zinc-100 hover:text-zinc-900" href="https://www.github.com/BastienWinant" target="_blank">GitHub</a>
			</nav>
		</aside>
	)
}