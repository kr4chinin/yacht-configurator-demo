import { FC, useState } from 'react'
import { Group } from 'three'
import ShowFullscreenButton from '../UI/ShowFullscreenButton'
import FlybridgeControls from './FlybridgeControls'
import Footer from './Footer'

interface FlybridgeControlsWrapper {
	model: Group
}

const FlybridgeControlsWrapper: FC<FlybridgeControlsWrapper> = ({ model }) => {
	const [isFullscreenShown, setIsFullscreenShown] = useState(false)

	return (
		<>
			<FlybridgeControls model={model} isFullscreenShown={isFullscreenShown} />

			<ShowFullscreenButton
				isFullscreenShown={isFullscreenShown}
				toggleFullscreen={() => setIsFullscreenShown(prev => !prev)}
			/>

			<Footer isHidden={isFullscreenShown} />
		</>
	)
}

export default FlybridgeControlsWrapper
