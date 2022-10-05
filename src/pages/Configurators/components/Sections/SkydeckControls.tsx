import { FC, useMemo, useState } from 'react'
import { Group } from 'three'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface SkydeckControlsProps {
	model: Group
	isFullscreenShown: boolean
}

const SkydeckControls: FC<SkydeckControlsProps> = ({
	model,
	isFullscreenShown
}) => {
	const [isInteriorOverviewSidebarOpened, setIsInteriorOverviewSidebarOpened] =
		useState(false)
	const [isInteriorFrameSidebarOpened, setIsInteriorFrameSidebarOpened] =
		useState(false)

	const [isEngineSidebarOpened, setIsEngineSidebarOpened] = useState(false)

	const mockOptions = useMemo(
		() => [
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
		],
		[]
	)

	return (
		<>
			<Navbar
				yachtName="Skydeck"
				interiorOptions={mockOptions}
				exteriorOptions={mockOptions}
				toggleEngineSidebar={() => setIsEngineSidebarOpened(prev => !prev)}
				isHidden={isFullscreenShown}
			/>

			<Sidebar
				title="Overview"
				isShown={isInteriorOverviewSidebarOpened}
				setIsShown={setIsInteriorOverviewSidebarOpened}
			>
				Overview
			</Sidebar>

			<Sidebar
				title="Frame"
				isShown={isInteriorFrameSidebarOpened}
				setIsShown={setIsInteriorFrameSidebarOpened}
			>
				Frame
			</Sidebar>
		</>
	)
}

export default SkydeckControls
