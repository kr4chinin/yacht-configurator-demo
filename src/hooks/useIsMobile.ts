import { useEffect, useState } from 'react'

export function useIsLessThanWindowWidth(width: number) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < width)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < width)
		}

		window.addEventListener('resize', () => {
			checkMobile()
		})

		return () => {
			window.removeEventListener('resize', () => {
				checkMobile()
			})
		}
	}, [])

	return isMobile
}
