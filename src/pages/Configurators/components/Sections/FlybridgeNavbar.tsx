import { FC, useState } from 'react'
import { Group } from 'three'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface FlybridgeSidebarsProps {
	model: Group
}

const FlybridgeNavbar: FC<FlybridgeSidebarsProps> = ({ model }) => {
	const [isInteriorOverviewSidebarOpened, setIsInteriorOverviewSidebarOpened] =
		useState(false)
	const [isInteriorFrameSidebarOpened, setIsInteriorFrameSidebarOpened] =
		useState(false)

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
				yachtName="Flybridge"
				interiorOptions={mockOptions}
				exteriorOptions={mockOptions}
				engineOptions={mockOptions}
			/>

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

export default FlybridgeNavbar
