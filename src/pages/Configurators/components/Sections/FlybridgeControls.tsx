import { FC, useMemo, useState } from 'react'
import { Group, Mesh } from 'three'
import VariantsList from '../UI/VariantsList'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import FlybridgeAdminPanelSidebar from './AdminSections/FlybridgeAdminPanelSidebar'

import { Children0 } from '../../../../utils/urls/flybridge/Children[0]'
import {
	initialMaterial0,
	darkSteelMaterial0,
	erasedSteelMaterial0
} from '../../../../utils/materials/flybridge/materials[0]'

import { Children1 } from '../../../../utils/urls/flybridge/Children[1]'
import {
	initialMaterial1,
	midnightSkyMaterial1
} from '../../../../utils/materials/flybridge/materials[1]'

import { Children2 } from '../../../../utils/urls/flybridge/Children[2]'
import {
	initialMaterial2,
	paperWhiteMaterial2,
	redCarbonMaterial2
} from '../../../../utils/materials/flybridge/materials[2]'

import { Children3 } from '../../../../utils/urls/flybridge/Children[3]'
import {
	initialMaterial3,
	crystalGrayPlanksMaterial3,
	darkOakPlanksMaterial3,
	darkWoodPlanksMaterial3,
	gentleWhitePlanksMaterial3,
	spruceWoodPlanksMaterial3
} from '../../../../utils/materials/flybridge/materials[3]'

import { Children4 } from '../../../../utils/urls/flybridge/Children[4]'
import {
	initialMaterial4,
	asphaltGrayMaterial4,
	darkCloudsMaterial4,
	papyrusGreenMaterial4,
	skyBlackMaterial4,
	sunnyGreenMaterial4,
	wildGreenMaterial4
} from '../../../../utils/materials/flybridge/materials[4]'

import { Children5 } from '../../../../utils/urls/flybridge/Children[5]'
import {
	initialMaterial5,
	mildLeatherMaterial5,
	oistrichLeatherMaterial5,
	orangeLeatherMaterial5,
	redBlanketMaterial5,
	redCarbonMaterial5,
	sandyLeatherMaterial5,
	stitchedLeatherMaterial5
} from '../../../../utils/materials/flybridge/materials[5]'

import { Children6 } from '../../../../utils/urls/flybridge/Children[6]'
import {
	initialMaterial6,
	asphaltGrayMaterial6,
	brownRedMaterial6,
	grayCarbonMaterial6,
	redCarbonMaterial6,
	sunnyGreenMaterial6
} from '../../../../utils/materials/flybridge/materials[6]'

import { Children7 } from '../../../../utils/urls/flybridge/Children[7]'
import {
	initialMaterial7,
	blueMaterial7,
	dirtyMaterial7
} from '../../../../utils/materials/flybridge/materials[7]'

import { Children8 } from '../../../../utils/urls/flybridge/Children[8]'
import {
	initialMaterial8,
	asphaltGrayMaterial8,
	erasedSteelMaterial8
} from '../../../../utils/materials/flybridge/materials[8]'

import { Children9 } from '../../../../utils/urls/flybridge/Children[9]'
import {
	initialMaterial9,
	blueMaterial9,
	dirtyMaterial9
} from '../../../../utils/materials/flybridge/materials[9]'

import { Children10 } from '../../../../utils/urls/flybridge/Children[10]'
import {
	initialMaterial10,
	midnightSkyMaterial10,
	redCarbonMaterial10
} from '../../../../utils/materials/flybridge/materials[10]'

import { Engines } from '../../../../utils/urls/Engines'

interface FlybridgeControlsProps {
	model: Group
	isFullscreenShown: boolean
}

const FlybridgeControls: FC<FlybridgeControlsProps> = ({
	model,
	isFullscreenShown
}) => {
	// Exterior elements
	const [isSiderailAndPortlightsOpened, setIsSiderailAndPortlightsOpened] =
		useState(false)
	const [isFenderOpened, setIsFenderOpened] = useState(false)
	const [isSidesOpened, setIsSidesOpened] = useState(false)
	const [isVisorOpened, setIsVisorOpened] = useState(false)
	const [isWindowsOpened, setIsWindowsOpened] = useState(false)
	const [isCounterOpened, setIsCounterOpened] = useState(false)
	const [isIlluminatorsOpened, setIsIlluminatorsOpened] = useState(false)

	const exteriorOptions = useMemo(
		() => [
			{
				title: 'Admin',
				onClick: () => setIsAdminOpened(prev => !prev)
			},
			{
				title: 'Siderails & Portlights',
				onClick: () => setIsSiderailAndPortlightsOpened(prev => !prev)
			},
			{
				title: 'Fender',
				onClick: () => setIsFenderOpened(prev => !prev)
			},
			{
				title: 'Sides',
				onClick: () => setIsSidesOpened(prev => !prev)
			},
			{
				title: 'Flybridge Visor',
				onClick: () => setIsVisorOpened(prev => !prev)
			},
			{ title: 'Windows', onClick: () => setIsWindowsOpened(prev => !prev) },
			{ title: 'Counter', onClick: () => setIsCounterOpened(prev => !prev) },
			{
				title: 'Illuminators',
				onClick: () => setIsIlluminatorsOpened(prev => !prev)
			}
		],
		[]
	)

	// Interior elements
	const [
		isThrottleAndSteeringWheelOpened,
		setIsThrottleAndSteeringWheelOpened
	] = useState(false)
	const [isCockpitFloorOpened, setIsCockpitFloorOpened] = useState(false)
	const [isCouchOpened, setIsCouchOpened] = useState(false)
	const [isCockpitSteeringWheelOpened, setIsCockpitSteeringWheelOpened] =
		useState(false)

	const interiorOptions = useMemo(
		() => [
			{
				title: 'Throttle & Steering Wheel',
				onClick: () => setIsThrottleAndSteeringWheelOpened(prev => !prev)
			},
			{
				title: 'Cockpit Floor',
				onClick: () => setIsCockpitFloorOpened(prev => !prev)
			},
			{ title: 'Couch', onClick: () => setIsCouchOpened(prev => !prev) },
			{
				title: 'Cockpit Steering Wheel',
				onClick: () => setIsCockpitSteeringWheelOpened(prev => !prev)
			}
		],
		[]
	)

	const [isAdminOpened, setIsAdminOpened] = useState(false)

	const [isEngineSidebarOpened, setIsEngineSidebarOpened] = useState(false)

	const toggleEngineSidebar = () => {
		setIsEngineSidebarOpened(prev => !prev)
	}

	return (
		<>
			<Navbar
				yachtName="Flybridge"
				interiorOptions={interiorOptions}
				exteriorOptions={exteriorOptions}
				toggleEngineSidebar={toggleEngineSidebar}
				isHidden={isFullscreenShown}
			/>

			{/* Admin panel sidebar START*/}

			<FlybridgeAdminPanelSidebar
				isShown={isAdminOpened}
				setIsShown={setIsAdminOpened}
				model={model}
			/>

			{/* Admin panel sidebar END */}

			{/* Siderails and Portlights Sidebars START */}

			<Sidebar
				title="Siderails & Portlights"
				isShown={isSiderailAndPortlightsOpened}
				setIsShown={setIsSiderailAndPortlightsOpened}
			>
				<VariantsList
					type="primary"
					variants={[
						{
							id: 1,
							title: 'Stainless steel',
							price: 4100,
							image: Children0.variant1,
							onClick: () => {
								;(model.children[0] as Mesh).material = initialMaterial0
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Erased steel',
							price: 3200,
							image: Children0.variant2,
							onClick: () => {
								;(model.children[0] as Mesh).material = erasedSteelMaterial0
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Dark steel',
							price: 5100,
							image: Children0.variant3,
							onClick: () => {
								;(model.children[0] as Mesh).material = darkSteelMaterial0
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Siderail & Portlights Sidebar END */}

			{/* Fender Sidebar START */}

			<Sidebar
				title="Fender"
				isShown={isFenderOpened}
				setIsShown={setIsFenderOpened}
			>
				<VariantsList
					type="primary"
					variants={[
						{
							id: 1,
							title: 'White marble',
							price: 2600,
							image: Children2.variant2,
							onClick: () => {
								;(model.children[2] as Mesh).material = initialMaterial2
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Red carbon',
							price: 3500,
							image: Children2.variant1,
							onClick: () => {
								;(model.children[2] as Mesh).material = redCarbonMaterial2
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Paper white',
							price: 1500,
							image: Children2.variant3,
							onClick: () => {
								;(model.children[2] as Mesh).material = paperWhiteMaterial2
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Fender Sidebar END */}

			{/* Sides Sidebar START */}

			<Sidebar
				title="Sides"
				isShown={isSidesOpened}
				setIsShown={setIsSidesOpened}
			>
				<VariantsList
					type="primary"
					variants={[
						{
							id: 1,
							title: 'Pacific ocean',
							price: 2600,
							image: Children4.variant7,
							onClick: () => {
								;(model.children[4] as Mesh).material = initialMaterial4
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Wild green',
							price: 3500,
							image: Children4.variant1,
							onClick: () => {
								;(model.children[4] as Mesh).material = wildGreenMaterial4
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Sunny green',
							price: 1500,
							image: Children4.variant2,
							onClick: () => {
								;(model.children[4] as Mesh).material = sunnyGreenMaterial4
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Night sky black',
							price: 1500,
							image: Children4.variant3,
							onClick: () => {
								;(model.children[4] as Mesh).material = skyBlackMaterial4
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Papyrus green',
							price: 1500,
							image: Children4.variant4,
							onClick: () => {
								;(model.children[4] as Mesh).material = papyrusGreenMaterial4
							},
							isDefault: false
						},
						{
							id: 6,
							title: 'Dark clouds',
							price: 1500,
							image: Children4.variant5,
							onClick: () => {
								;(model.children[4] as Mesh).material = darkCloudsMaterial4
							},
							isDefault: false
						},
						{
							id: 7,
							title: 'Asphalt gray',
							price: 1500,
							image: Children4.variant6,
							onClick: () => {
								;(model.children[4] as Mesh).material = asphaltGrayMaterial4
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Sides Sidebar END */}

			{/* Flybridge Visor Sidebar START */}

			<Sidebar
				title="Flybridge Visor"
				isShown={isVisorOpened}
				setIsShown={setIsVisorOpened}
			>
				<VariantsList
					type="primary"
					variants={[
						{
							id: 1,
							title: 'Andesite',
							price: 2600,
							image: Children6.variant5,
							onClick: () => {
								;(model.children[6] as Mesh).material = initialMaterial6
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Sunny green',
							price: 3500,
							image: Children6.variant2,
							onClick: () => {
								;(model.children[6] as Mesh).material = sunnyGreenMaterial6
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Brown red',
							price: 1500,
							image: Children6.variant3,
							onClick: () => {
								;(model.children[6] as Mesh).material = brownRedMaterial6
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Asphalt gray',
							price: 1500,
							image: Children6.variant6,
							onClick: () => {
								;(model.children[6] as Mesh).material = asphaltGrayMaterial6
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Gray carbon',
							price: 1500,
							image: Children6.variant4,
							onClick: () => {
								;(model.children[6] as Mesh).material = grayCarbonMaterial6
							},
							isDefault: false
						},
						{
							id: 6,
							title: 'Red carbon',
							price: 1500,
							image: Children6.variant1,
							onClick: () => {
								;(model.children[6] as Mesh).material = redCarbonMaterial6
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Flybridge Visor Sidebar END */}

			{/* Windows Sidebar START */}

			<Sidebar
				title="Windows"
				isShown={isWindowsOpened}
				setIsShown={setIsWindowsOpened}
			>
				<VariantsList
					type="primary"
					variants={[
						{
							id: 1,
							title: 'Shiny glass',
							price: 2600,
							image: Children7.variant1,
							onClick: () => {
								;(model.children[7] as Mesh).material = initialMaterial7
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Blue glass',
							price: 3500,
							image: Children7.variant2,
							onClick: () => {
								;(model.children[7] as Mesh).material = blueMaterial7
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Dirty glass',
							price: 1500,
							image: Children7.variant3,
							onClick: () => {
								;(model.children[7] as Mesh).material = dirtyMaterial7
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Windows Sidebar END */}

			{/* Counter Sidebar START */}

			<Sidebar
				title="Counter"
				isShown={isCounterOpened}
				setIsShown={setIsCounterOpened}
			>
				<VariantsList
					type="primary"
					variants={[
						{
							id: 1,
							title: 'Erased steel',
							price: 2600,
							image: Children8.variant2,
							onClick: () => {
								;(model.children[8] as Mesh).material = initialMaterial8
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Stainless steel',
							price: 3500,
							image: Children8.variant1,
							onClick: () => {
								;(model.children[8] as Mesh).material = erasedSteelMaterial8
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Asphalt gray',
							price: 1500,
							image: Children8.variant3,
							onClick: () => {
								;(model.children[8] as Mesh).material = asphaltGrayMaterial8
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Counter Sidebar END */}

			{/* Illuminators Sidebar START */}

			<Sidebar
				title="Illuminators"
				isShown={isIlluminatorsOpened}
				setIsShown={setIsIlluminatorsOpened}
			>
				<VariantsList
					type="primary"
					variants={[
						{
							id: 1,
							title: 'Shiny glass',
							price: 2600,
							image: Children9.variant1,
							onClick: () => {
								;(model.children[9] as Mesh).material = initialMaterial9
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Blue glass',
							price: 3500,
							image: Children9.variant2,
							onClick: () => {
								;(model.children[9] as Mesh).material = blueMaterial9
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Dirty glass',
							price: 1500,
							image: Children9.variant3,
							onClick: () => {
								;(model.children[9] as Mesh).material = dirtyMaterial9
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Illuminators Sidebar END */}

			{/* Throttle & Steering Wheel Sidebar START */}

			<Sidebar
				isShown={isThrottleAndSteeringWheelOpened}
				setIsShown={setIsThrottleAndSteeringWheelOpened}
				title="Throttle & Steering Wheel"
				width="450px"
			>
				<VariantsList
					type="tertiary"
					variants={[
						{
							id: 1,
							title: 'White andesite',
							price: 2600,
							image: Children1.variant2,
							onClick: () => {
								;(model.children[1] as Mesh).material = initialMaterial1
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Midnight sky',
							price: 3500,
							image: Children1.variant1,
							onClick: () => {
								;(model.children[1] as Mesh).material = midnightSkyMaterial1
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Throttle & Steering Wheel Sidebar END */}

			{/* Cockpit Floor Sidebar START */}

			<Sidebar
				isShown={isCockpitFloorOpened}
				setIsShown={setIsCockpitFloorOpened}
				title="Cockpit Floor"
			>
				<VariantsList
					type="tertiary"
					variants={[
						{
							id: 1,
							title: 'Diamond white planks',
							price: 2400,
							image: Children3.variant4,
							onClick: () => {
								;(model.children[3] as Mesh).material = initialMaterial3
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Gentle white planks',
							price: 3110,
							image: Children3.variant1,
							onClick: () => {
								;(model.children[3] as Mesh).material =
									gentleWhitePlanksMaterial3
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Dark wood planks',
							price: 2300,
							image: Children3.variant2,
							onClick: () => {
								;(model.children[3] as Mesh).material = darkWoodPlanksMaterial3
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Spruce wood planks',
							price: 2670,
							image: Children3.variant3,
							onClick: () => {
								;(model.children[3] as Mesh).material =
									spruceWoodPlanksMaterial3
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Crystal gray planks',
							price: 4200,
							image: Children3.variant5,
							onClick: () => {
								;(model.children[3] as Mesh).material =
									crystalGrayPlanksMaterial3
							},
							isDefault: false
						},
						{
							id: 6,
							title: 'Dark oak planks',
							price: 3445,
							image: Children3.variant6,
							onClick: () => {
								;(model.children[3] as Mesh).material = darkOakPlanksMaterial3
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Cockpit Floor Sidebar END */}

			{/* Couch Sidebar START */}

			<Sidebar
				isShown={isCouchOpened}
				setIsShown={setIsCouchOpened}
				title="Couch"
			>
				<VariantsList
					type="tertiary"
					variants={[
						{
							id: 1,
							title: 'Royal gray leather',
							price: 2400,
							image: Children5.variant2,
							onClick: () => {
								;(model.children[5] as Mesh).material = initialMaterial5
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Red carbon',
							price: 2400,
							image: Children5.variant1,
							onClick: () => {
								;(model.children[5] as Mesh).material = redCarbonMaterial5
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Oistrich leather',
							price: 2400,
							image: Children5.variant3,
							onClick: () => {
								;(model.children[5] as Mesh).material = oistrichLeatherMaterial5
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Red blanket',
							price: 2400,
							image: Children5.variant4,
							onClick: () => {
								;(model.children[5] as Mesh).material = redBlanketMaterial5
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Stitched leather',
							price: 2400,
							image: Children5.variant5,
							onClick: () => {
								;(model.children[5] as Mesh).material = stitchedLeatherMaterial5
							},
							isDefault: false
						},
						{
							id: 6,
							title: 'Orange leather',
							price: 2400,
							image: Children5.variant6,
							onClick: () => {
								;(model.children[5] as Mesh).material = orangeLeatherMaterial5
							},
							isDefault: false
						},
						{
							id: 7,
							title: 'Sandy leather',
							price: 2400,
							image: Children5.variant7,
							onClick: () => {
								;(model.children[5] as Mesh).material = sandyLeatherMaterial5
							},
							isDefault: false
						},
						{
							id: 8,
							title: 'Mild leather',
							price: 2400,
							image: Children5.variant8,
							onClick: () => {
								;(model.children[5] as Mesh).material = mildLeatherMaterial5
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Couch Sidebar END */}

			{/* Cockpit Steering Wheel START */}

			<Sidebar
				isShown={isCockpitSteeringWheelOpened}
				setIsShown={setIsCockpitSteeringWheelOpened}
				title="Cockpit Steering Wheel"
			>
				<VariantsList
					type="tertiary"
					variants={[
						{
							id: 1,
							title: 'White andesite',
							price: 2400,
							image: Children10.variant3,
							onClick: () => {
								;(model.children[10] as Mesh).material = initialMaterial10
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Red carbon',
							price: 2400,
							image: Children10.variant1,
							onClick: () => {
								;(model.children[10] as Mesh).material = redCarbonMaterial10
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Midnight sky',
							price: 2400,
							image: Children10.variant2,
							onClick: () => {
								;(model.children[10] as Mesh).material = midnightSkyMaterial10
							},
							isDefault: false
						}
					]}
				/>
			</Sidebar>

			{/* Cockpit Steering Wheel END */}

			{/* Engine Sidebar START */}

			<Sidebar
				isShown={isEngineSidebarOpened}
				setIsShown={setIsEngineSidebarOpened}
				title="Engines"
				isEngineFlag={true}
			>
				<VariantsList
					type="secondary"
					variants={[
						{
							id: 1,
							title: 'Volvo Penta D3-200',
							price: 12200,
							image: Engines.variant1,
							onClick: () => {},
							isDefault: true,
							description:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, aliquam nisl nisl eu nunc. Euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, aliquam nisl nisl eu nunc.'
						},
						{
							id: 2,
							title: 'Volvo Penta D6-300',
							price: 14500,
							image: Engines.variant2,
							onClick: () => {},
							isDefault: false,
							description:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, aliquam nisl nisl eu nunc. Euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, aliquam nisl nisl eu nunc.'
						},
						{
							id: 3,
							title: 'Volvo Penta D11-670 ',
							price: 22300,
							image: Engines.variant3,
							onClick: () => {},
							isDefault: false,
							description:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, aliquam nisl nisl eu nunc. Euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, aliquam nisl nisl eu nunc.'
						}
					]}
				/>
			</Sidebar>

			{/* Engine Sidebar END */}
		</>
	)
}

export default FlybridgeControls
