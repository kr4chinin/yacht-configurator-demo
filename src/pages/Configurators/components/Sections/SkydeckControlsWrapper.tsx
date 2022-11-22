import { FC, useState } from 'react'
import { Group } from 'three'
import ShowFullscreenButton from '../UI/ShowFullscreenButton'
import SkydeckControls from './SkydeckControls'

interface SkydeckControlsWrapperProps {
	model: Group
}

const SkydeckControlsWrapper: FC<SkydeckControlsWrapperProps> = ({ model }) => {
	const [isFullscreenShown, setIsFullscreenShown] = useState(false)

	return (
		<>
			<SkydeckControls model={model} isFullscreenShown={isFullscreenShown} />

			<ShowFullscreenButton
				isFullscreenShown={isFullscreenShown}
				toggleFullscreen={() => setIsFullscreenShown(prev => !prev)}
			/>
		</>
	)
}

export default SkydeckControlsWrapper
