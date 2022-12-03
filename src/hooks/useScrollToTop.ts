import { useEffect } from "react"

export function useScrollToTop() {
	useEffect(() => {
		document.body.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto'
		})
	}, [])
}
