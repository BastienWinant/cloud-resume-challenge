export default function Aside() {
	return (
		<aside className="py-8 xl:px-2 flex flex-col gap-24 border-t-2 border-t-secondary/20 font-light">
			<p className="text-sm xl:text-base w-[80%] max-w-md md:w-[85%]">
				A seasoned Senior Producer with 10+ years of experience, I excel in leading complex marketing and design projects from concept to completion.
			</p>
			<nav className="flex flex-col text-xs">
				<a
					className="border-t border-t-secondary/20 py-3 px-1 xl:px-2 hover:bg-primary hover:text-background"
					href="mailto:m.bluth@example.com"
				>bastien.winant@gmail.com</a>
				<a
					className="border-t border-t-secondary/20 py-3 px-1 xl:px-2 hover:bg-primary hover:text-background"
					href="https://github.com/BastienWinant"
					target="_blank"
				>Github</a>
				<a
					className="border-t border-t-secondary/20 py-3 px-1 xl:px-2 hover:bg-primary hover:text-background"
					href="https://www.xing.com/profile/Bastien_Winant"
					target="_blank"
				>Xing</a>
			</nav>
		</aside>
	)
}