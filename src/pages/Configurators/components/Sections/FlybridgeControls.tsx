import { FC, useMemo, useState } from 'react'
import { Group, Mesh } from 'three'
import VariantsList from '../UI/VariantsList'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import FlybridgeAdminPanelSidebar from './AdminSections/FlybridgeAdminPanelSidebar'

import { ChildrenPreview0 } from '../../../../utils/urls/flybridge/Children_0'
import {
	stainlessSteelMaterial0,
	blackSteelMaterial0,
	goldenHorizonMaterial0
} from '../../../../utils/materials/flybridge/materials_0'

import {
	Children1,
	ChildrenPreview1
} from '../../../../utils/urls/flybridge/Children_1'
import {
	acquanettaMaterial1,
	andesiteMaterial1,
	blackSapphireMaterial1,
	redCarbonMaterial1
} from '../../../../utils/materials/flybridge/materials_1'

import {
	Children2,
	ChildrenPreview2
} from '../../../../utils/urls/flybridge/Children_2'
import {
	andesiteMaterial2,
	blueMarlineMaterial2
} from '../../../../utils/materials/flybridge/materials_2'

import { Children3 } from '../../../../utils/urls/flybridge/Children_3'
import {
	oakPlanksMaterial3,
	demiSeasonTeakMaterial3,
	burnedTeakMaterial3,
	redWoodMaterial3,
	darkOakMaterial3
} from '../../../../utils/materials/flybridge/materials_3'

import {
	Children4,
	ChildrenPreview4
} from '../../../../utils/urls/flybridge/Children_4'
import {
	neonBlueMaterial4,
	acquanettaMaterial4,
	bloodyRedMaterial4,
	sunriseMaterial4,
	pacificOceanMaterial4
} from '../../../../utils/materials/flybridge/materials_4'

import { Children5 } from '../../../../utils/urls/flybridge/Children_5'
import {
	beigeLeatherMaterial5,
	bourbonLeatherMaterial5,
	brownLeatherMaterial5,
	darkCashemereMaterial5,
	tannedLeatherMaterial5
} from '../../../../utils/materials/flybridge/materials_5'

import {
	Children6,
	ChildrenPreview6
} from '../../../../utils/urls/flybridge/Children_6'
import {
	redCarbonMaterial6,
	andesiteMaterial6,
	neonBlueMaterial6,
	stainlessSteelMaterial6
} from '../../../../utils/materials/flybridge/materials_6'

import { ChildrenPreview7 } from '../../../../utils/urls/flybridge/Children_7'
import {
	clearGlassMaterial7,
	tonedGlassMaterial7
} from '../../../../utils/materials/flybridge/materials_7'

import { ChildrenPreview8 } from '../../../../utils/urls/flybridge/Children_8'
import {
	stainlessSteelMaterial8,
	blackSteelMaterial8,
	goldenHorizonMaterial8
} from '../../../../utils/materials/flybridge/materials_8'

import {
	Children9,
	ChildrenPreview9
} from '../../../../utils/urls/flybridge/Children_9'
import {
	clearGlassMaterial9,
	tonedGlassMaterial9
} from '../../../../utils/materials/flybridge/materials_9'

import {
	Children10,
	ChildrenPreview10
} from '../../../../utils/urls/flybridge/Children_10'
import {
	acquanettaMaterial10,
	andesiteMaterial10,
	blackSapphireMaterial10,
	redCarbonMaterial10
} from '../../../../utils/materials/flybridge/materials_10'

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
			// {
			// 	title: 'Admin',
			// 	onClick: () => setIsAdminOpened(prev => !prev)
			// },
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

	// const [isAdminOpened, setIsAdminOpened] = useState(false)

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

			{/* <FlybridgeAdminPanelSidebar
				isShown={isAdminOpened}
				setIsShown={setIsAdminOpened}
				model={model}
			/> */}

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
							image: ChildrenPreview0.matcap1,
							onClick: () => {
								;(model.children[0] as Mesh).material = stainlessSteelMaterial0
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Black steel',
							price: 3200,
							image: ChildrenPreview0.matcap2,
							onClick: () => {
								;(model.children[0] as Mesh).material = blackSteelMaterial0
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Golden horizon',
							price: 5100,
							image: ChildrenPreview0.matcap3,
							onClick: () => {
								;(model.children[0] as Mesh).material = goldenHorizonMaterial0
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
							title: 'Andesite',
							price: 2600,
							image: Children2.basic1,
							onClick: () => {
								;(model.children[2] as Mesh).material = andesiteMaterial2
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Blue marline',
							price: 3500,
							image: ChildrenPreview2.matcap2,
							onClick: () => {
								;(model.children[2] as Mesh).material = blueMarlineMaterial2
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
							title: 'Andesite',
							price: 2600,
							image: ChildrenPreview4.matcap4,
							onClick: () => {
								;(model.children[4] as Mesh).material = andesiteMaterial2
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Neon blue',
							price: 3500,
							image: ChildrenPreview4.matcap1,
							onClick: () => {
								;(model.children[4] as Mesh).material = neonBlueMaterial4
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Acquanetta',
							price: 1500,
							image: ChildrenPreview4.matcap2,
							onClick: () => {
								;(model.children[4] as Mesh).material = acquanettaMaterial4
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Bloody red',
							price: 1500,
							image: ChildrenPreview4.matcap3,
							onClick: () => {
								;(model.children[4] as Mesh).material = bloodyRedMaterial4
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Sunrise',
							price: 1500,
							image: ChildrenPreview4.matcap5,
							onClick: () => {
								;(model.children[4] as Mesh).material = sunriseMaterial4
							},
							isDefault: false
						},
						{
							id: 6,
							title: 'Pacific ocean',
							price: 1500,
							image: Children4.basic6,
							onClick: () => {
								;(model.children[4] as Mesh).material = pacificOceanMaterial4
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
							image: ChildrenPreview6.matcap3,
							onClick: () => {
								;(model.children[6] as Mesh).material = andesiteMaterial6
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Neon blue',
							price: 3500,
							image: ChildrenPreview6.matcap1,
							onClick: () => {
								;(model.children[6] as Mesh).material = neonBlueMaterial6
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Bloody red',
							price: 1500,
							image: ChildrenPreview6.matcap2,
							onClick: () => {
								;(model.children[6] as Mesh).material = bloodyRedMaterial4
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Stainless steel',
							price: 1500,
							image: ChildrenPreview6.matcap4,
							onClick: () => {
								;(model.children[6] as Mesh).material = stainlessSteelMaterial6
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Red carbon',
							price: 1500,
							image: Children6.basic5,
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
							title: 'Clear glass',
							price: 2600,
							image: ChildrenPreview7.matcap1,
							onClick: () => {
								;(model.children[7] as Mesh).material = clearGlassMaterial7
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Toned glass',
							price: 3500,
							image: ChildrenPreview7.basic2,
							onClick: () => {
								;(model.children[7] as Mesh).material = tonedGlassMaterial7
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
							title: 'Stainless steel',
							price: 2600,
							image: ChildrenPreview8.matcap1,
							onClick: () => {
								;(model.children[8] as Mesh).material = stainlessSteelMaterial8
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Black steel',
							price: 3500,
							image: ChildrenPreview8.matcap2,
							onClick: () => {
								;(model.children[8] as Mesh).material = blackSteelMaterial8
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Golden horizon',
							price: 1500,
							image: ChildrenPreview8.matcap3,
							onClick: () => {
								;(model.children[8] as Mesh).material = goldenHorizonMaterial8
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
							title: 'Clear glass',
							price: 2600,
							image: ChildrenPreview9.matcap1,
							onClick: () => {
								;(model.children[9] as Mesh).material = clearGlassMaterial9
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Toned glass',
							price: 3500,
							image: Children9.basic2,
							onClick: () => {
								;(model.children[9] as Mesh).material = tonedGlassMaterial9
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
							title: 'Andesite',
							price: 2600,
							image: ChildrenPreview1.matcap3,
							onClick: () => {
								;(model.children[1] as Mesh).material = andesiteMaterial1
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Black sapphire',
							price: 3500,
							image: ChildrenPreview1.matcap1,
							onClick: () => {
								;(model.children[1] as Mesh).material = blackSapphireMaterial1
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Acquanetta',
							price: 3500,
							image: ChildrenPreview1.matcap2,
							onClick: () => {
								;(model.children[1] as Mesh).material = acquanettaMaterial1
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Red carbon',
							price: 3500,
							image: Children1.basic4,
							onClick: () => {
								;(model.children[1] as Mesh).material = redCarbonMaterial1
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
							title: 'Oak planks',
							price: 2400,
							image: Children3.basic1,
							onClick: () => {
								;(model.children[3] as Mesh).material = oakPlanksMaterial3
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Demi season teak',
							price: 3110,
							image: Children3.basic2,
							onClick: () => {
								;(model.children[3] as Mesh).material = demiSeasonTeakMaterial3
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Burned teak',
							price: 2300,
							image: Children3.basic3,
							onClick: () => {
								;(model.children[3] as Mesh).material = burnedTeakMaterial3
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Red wood',
							price: 2670,
							image: Children3.basic4,
							onClick: () => {
								;(model.children[3] as Mesh).material = redWoodMaterial3
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Dark oak',
							price: 4200,
							image: Children3.basic5,
							onClick: () => {
								;(model.children[3] as Mesh).material = darkOakMaterial3
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
							title: 'Bourbon leather',
							price: 2400,
							image: Children5.basic1,
							onClick: () => {
								;(model.children[5] as Mesh).material = bourbonLeatherMaterial5
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Dark cashmere',
							price: 2400,
							image: Children5.basic2,
							onClick: () => {
								;(model.children[5] as Mesh).material = darkCashemereMaterial5
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Brown leather',
							price: 2400,
							image: Children5.basic3,
							onClick: () => {
								;(model.children[5] as Mesh).material = brownLeatherMaterial5
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Tanned leather',
							price: 2400,
							image: Children5.basic4,
							onClick: () => {
								;(model.children[5] as Mesh).material = tannedLeatherMaterial5
							},
							isDefault: false
						},
						{
							id: 5,
							title: 'Blue marline',
							price: 2400,
							image: Children5.basic5,
							onClick: () => {
								;(model.children[5] as Mesh).material = blueMarlineMaterial2
							},
							isDefault: false
						},
						{
							id: 6,
							title: 'Beige leather',
							price: 2400,
							image: Children5.basic6,
							onClick: () => {
								;(model.children[5] as Mesh).material = beigeLeatherMaterial5
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
							title: 'Black saphire',
							price: 2400,
							image: ChildrenPreview10.matcap1,
							onClick: () => {
								;(model.children[10] as Mesh).material = blackSapphireMaterial10
							},
							isDefault: true
						},
						{
							id: 2,
							title: 'Acquanetta',
							price: 2400,
							image: ChildrenPreview10.matcap2,
							onClick: () => {
								;(model.children[10] as Mesh).material = acquanettaMaterial10
							},
							isDefault: false
						},
						{
							id: 3,
							title: 'Andesite',
							price: 2400,
							image: ChildrenPreview10.matcap3,
							onClick: () => {
								;(model.children[10] as Mesh).material = andesiteMaterial10
							},
							isDefault: false
						},
						{
							id: 4,
							title: 'Red carbon',
							price: 2400,
							image: Children10.basic4,
							onClick: () => {
								;(model.children[10] as Mesh).material = redCarbonMaterial10
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
								'Modern, high-tech motor with high torque and increased power on both shafts, providing fast boat acceleration and subsequent high maneuverability of any vessel.'
						},
						{
							id: 2,
							title: 'Volvo Penta D6-300',
							price: 14500,
							image: Engines.variant2,
							onClick: () => {},
							isDefault: false,
							description:
								'5.5-liter diesel engine for recreational and commercial watercraft with direct fuel injection via the Common-Rail system. The technology is double camshaft and turbocharged, which ensures high reliability in various modes.'
						},
						{
							id: 3,
							title: 'Volvo Penta D11-670 ',
							price: 22300,
							image: Engines.variant3,
							onClick: () => {},
							isDefault: false,
							description:
								'Built with the latest systems and electronic controls. The engine design uses a large amount of high-precision equipment to remove maximum power at the lowest possible weight.'
						}
					]}
				/>
			</Sidebar>

			{/* Engine Sidebar END */}
		</>
	)
}

export default FlybridgeControls
