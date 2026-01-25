export default function Aside() {
	return (
		<aside className="self-start md:sticky top-0 mx-3 py-7 border-t-2 border-zinc-400/20 flex flex-col gap-y-20">
			<p className="w-[85%] max-w-[28em]">
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</p>
			<nav className="flex flex-col text-xs lg:text-xs-lg">
				<a
					href="mailto:bastien.winant@gmail.com"
					className="px-1.5 py-3 border-t border-zinc-400/20 hover:bg-zinc-100 hover:text-zinc-950"
				>hello@figma.com</a>
				<p
					className="px-1.5 py-3 border-t border-zinc-400/20 hover:bg-zinc-100 hover:text-zinc-950"
				>+352 691 223-827</p>
				<a
					href="https://www.xing.com/profile/Bastien_Winant"
					target="_blank"
					className="px-1.5 py-3 border-t border-zinc-400/20 hover:bg-zinc-100 hover:text-zinc-950"
				>Linkedin</a>
			</nav>
		</aside>
	)
}