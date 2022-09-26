import { FC, useEffect } from 'react'

interface EscapeListenerProps {
	onClose: () => void
	children: React.ReactNode
}

const EscapeListener: FC<EscapeListenerProps> = ({ children, onClose }) => {
	useEffect(() => {
		function handleEscape(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscape)

		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	})

	return <>{children}</>
}

export default EscapeListener
