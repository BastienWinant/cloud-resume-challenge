import type { ReactNode } from "react"

export type AchievementProps = {
	className?: string
	children: ReactNode
}

export default function Achievement({className, children}:AchievementProps) {
	return (
		<li className={className}>
			{children}
		</li>
	)
}