import type { ReactNode } from "react"

export type AchievementProps = {
	children: ReactNode
}

export default function Achievement({children}:AchievementProps) {
	return (
		<li className="max-w-[95%]">
			{children}
		</li>
	)
}