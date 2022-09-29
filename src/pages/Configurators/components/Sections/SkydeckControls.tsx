import { FC, useState } from 'react'
import { Group } from 'three'
import ShowFullscreenButton from '../UI/ShowFullscreenButton'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface SkydeckControlsProps {
	model: Group
}

const SkydeckControls: FC<SkydeckControlsProps> = ({ model }) => {
	const [isInteriorOverviewSidebarOpened, setIsInteriorOverviewSidebarOpened] =
		useState(false)
	const [isInteriorFrameSidebarOpened, setIsInteriorFrameSidebarOpened] =
		useState(false)

	const [isFullscreenShown, setIsFullscreenShown] = useState(false)

	const mockOptions = [
		{
			title: 'Overview',
			onClick: () => setIsInteriorOverviewSidebarOpened(prev => !prev)
		},
		{
			title: 'Frame',
			onClick: () => setIsInteriorFrameSidebarOpened(prev => !prev)
		},
		{ title: 'Finishing', onClick: () => {} },
		{ title: 'Floor', onClick: () => {} },
		{ title: 'Lights', onClick: () => {} },
		{ title: 'Windows', onClick: () => {} }
	]

	return (
		<>
			<Navbar
				model={model}
				yachtName="Skydeck"
				interiorOptions={mockOptions}
				exteriorOptions={mockOptions}
				engineOptions={mockOptions}
                isHidden={isFullscreenShown}
			/>

			<ShowFullscreenButton
				isFullscreenShown={isFullscreenShown}
				toggleFullscreen={() => setIsFullscreenShown(prev => !prev)}
			/>

			<Footer isHidden={isFullscreenShown}/>

			<Sidebar
				isShown={isInteriorOverviewSidebarOpened}
				setIsShown={setIsInteriorOverviewSidebarOpened}
			>
				Overview
			</Sidebar>

			<Sidebar
				isShown={isInteriorFrameSidebarOpened}
				setIsShown={setIsInteriorFrameSidebarOpened}
			>
				Frame
			</Sidebar>
		</>
	)
}

export default SkydeckControls
