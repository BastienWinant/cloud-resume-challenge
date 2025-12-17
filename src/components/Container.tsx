import type { ReactNode } from "react"
import clsx from "clsx"

type ContainerProps = {
	children: ReactNode,
	className: string
}

export default function Container ({children, className}:ContainerProps) {
	return (
		<div className={clsx("h-full px-5 md:px-8", className)}>
			{children}
		</div>
	)
}