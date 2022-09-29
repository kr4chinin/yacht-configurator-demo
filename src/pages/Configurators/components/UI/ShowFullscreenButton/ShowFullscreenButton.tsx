import styles from './ShowFullscreenButton.module.scss'
import { ReactComponent as ShowFullscreen } from '../../../../../assets/icons/show-fullscreen.svg'
import { ReactComponent as HideFullscreen } from '../../../../../assets/icons/hide-fullscreen.svg'
import { FC } from 'react'

interface ShowFullscreenButtonProps {
	isFullscreenShown: boolean
	toggleFullscreen: () => void
}

const ShowFullscreenButton: FC<ShowFullscreenButtonProps> = ({
	isFullscreenShown,
	toggleFullscreen
}) => {
	return (
		<button
			className={styles['show-fullscreen-btn']}
			onClick={toggleFullscreen}
		>
			{isFullscreenShown ? <HideFullscreen /> : <ShowFullscreen />}
		</button>
	)
}

export default ShowFullscreenButton
