export default function Index() {
	return (
		<section className="border border-red-600">
			<h2 className="text-xs font-semibold capitalize">experience</h2>

			<div className="flex flex-col">
				<article className="flex flex-col">
					<header>
						{/*TITLE*/}
						<h3 className="flex flex-col gap-1 capitalize font-medium mb-2">senior producer</h3>
						<ul className="text-secondary">
							<li>Creative Agency XYZ</li> {/*company*/}
							<li>June 2022 - Present</li> {/*dates*/}
							<li>Remote & New York, NY</li> {/*location*/}
						</ul>
					</header>
					<div>
						<ul className="flex flex-col gap-2 text-sm">
							<li>
								Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.
							</li>
							<li>
								Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.
							</li>
						</ul>
					</div>
				</article>
				<article>
					this is the next
				</article>
			</div>
		</section>
	)
}