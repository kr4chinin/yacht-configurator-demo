import { FC, useEffect, useMemo, useState } from 'react'
import { Group, Mesh } from 'three'
import { v4 } from 'uuid'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { observer } from 'mobx-react-lite'
import { flybridgeExteriorConfigStore } from '../../../../stores/YachtExteriorConfigStore'
import { flybridgeInteriorConfigStore } from '../../../../stores/YachtInteriorConfigStore'
import { flybridgeEngineConfigStore } from '../../../../stores/YachtEngineConfigStore'
import { ConfigOptionGroupType } from '../../../../types/ConfigOptionGroup'
import { Option } from '../../../../types/Option'
// import FlybridgeAdminPanelSidebar from './AdminSections/FlybridgeAdminPanelSidebar'

import {
	blackSteelMaterial0,
	goldenHorizonMaterial0,
	stainlessSteelMaterial0
} from '../../../../utils/materials/flybridge/materials_0'
import { ChildrenPreview0 } from '../../../../utils/urls/flybridge/Children_0'

import {
	acquanettaMaterial1,
	andesiteMaterial1,
	blackSapphireMaterial1,
	redCarbonMaterial1
} from '../../../../utils/materials/flybridge/materials_1'
import {
	Children1,
	ChildrenPreview1
} from '../../../../utils/urls/flybridge/Children_1'

import {
	andesiteMaterial2,
	blueMarlineMaterial2
} from '../../../../utils/materials/flybridge/materials_2'
import {
	Children2,
	ChildrenPreview2
} from '../../../../utils/urls/flybridge/Children_2'

import {
	burnedTeakMaterial3,
	darkOakMaterial3,
	demiSeasonTeakMaterial3,
	oakPlanksMaterial3,
	redWoodMaterial3
} from '../../../../utils/materials/flybridge/materials_3'
import { Children3 } from '../../../../utils/urls/flybridge/Children_3'

import {
	acquanettaMaterial4,
	bloodyRedMaterial4,
	neonBlueMaterial4,
	pacificOceanMaterial4,
	sunriseMaterial4
} from '../../../../utils/materials/flybridge/materials_4'
import {
	Children4,
	ChildrenPreview4
} from '../../../../utils/urls/flybridge/Children_4'

import {
	beigeLeatherMaterial5,
	bourbonLeatherMaterial5,
	brownLeatherMaterial5,
	darkCashemereMaterial5,
	tannedLeatherMaterial5
} from '../../../../utils/materials/flybridge/materials_5'
import { Children5 } from '../../../../utils/urls/flybridge/Children_5'

import {
	andesiteMaterial6,
	neonBlueMaterial6,
	redCarbonMaterial6,
	stainlessSteelMaterial6
} from '../../../../utils/materials/flybridge/materials_6'
import {
	Children6,
	ChildrenPreview6
} from '../../../../utils/urls/flybridge/Children_6'

import {
	clearGlassMaterial7,
	tonedGlassMaterial7
} from '../../../../utils/materials/flybridge/materials_7'
import { ChildrenPreview7 } from '../../../../utils/urls/flybridge/Children_7'

import {
	blackSteelMaterial8,
	goldenHorizonMaterial8,
	stainlessSteelMaterial8
} from '../../../../utils/materials/flybridge/materials_8'
import { ChildrenPreview8 } from '../../../../utils/urls/flybridge/Children_8'

import {
	clearGlassMaterial9,
	tonedGlassMaterial9
} from '../../../../utils/materials/flybridge/materials_9'
import { ChildrenPreview9 } from '../../../../utils/urls/flybridge/Children_9'

import {
	acquanettaMaterial10,
	andesiteMaterial10,
	blackSapphireMaterial10,
	redCarbonMaterial10
} from '../../../../utils/materials/flybridge/materials_10'
import {
	Children10,
	ChildrenPreview10
} from '../../../../utils/urls/flybridge/Children_10'
import { Engines } from '../../../../utils/urls/Engines'
import OptionsList from '../UI/OptionsList'

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

	const exteriorOptions: Option[] = useMemo(
		() => [
			// {
			// 	title: 'Admin',
			// 	onSelect: () => setIsAdminOpened(prev => !prev)
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

	const interiorOptions: Option[] = useMemo(
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

	const handleSelectExteriorGroupOptionById = (
		configOptionGroupType: ConfigOptionGroupType,
		optionId: string
	) => {
		flybridgeExteriorConfigStore.selectGroupOptionById(
			configOptionGroupType,
			optionId
		)
	}

	const handleSelectInteriorGroupOptionById = (
		configOptionGroupType: ConfigOptionGroupType,
		optionId: string
	) => {
		flybridgeInteriorConfigStore.selectGroupOptionById(
			configOptionGroupType,
			optionId
		)
	}

	useEffect(() => {
		function initExterior() {
			flybridgeExteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS,
				name: 'Siderails & Portlights',
				options: [
					{
						id: v4(),
						title: 'Stainless steel',
						price: 0,
						image: ChildrenPreview0.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[0] as Mesh).material = stainlessSteelMaterial0
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType:
							ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS
					},
					{
						id: v4(),
						title: 'Black steel',
						price: 2000,
						image: ChildrenPreview0.matcap2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[0] as Mesh).material = blackSteelMaterial0
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType:
							ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS
					},
					{
						id: v4(),
						title: 'Golden horizon',
						price: 6000,
						image: ChildrenPreview0.matcap3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[0] as Mesh).material = goldenHorizonMaterial0
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType:
							ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS
					}
				]
			})

			flybridgeExteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.FENDER,
				name: 'Fender',
				options: [
					{
						id: v4(),
						title: 'Andesite',
						price: 0,
						image: Children2.basic1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[2] as Mesh).material = andesiteMaterial2
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.FENDER
					},
					{
						id: v4(),
						title: 'Blue marline',
						price: 4000,
						image: ChildrenPreview2.matcap2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[2] as Mesh).material = blueMarlineMaterial2
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.FENDER
					}
				]
			})

			flybridgeExteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.SIDES,
				name: 'Sides',
				options: [
					{
						id: v4(),
						title: 'Andesite',
						price: 0,
						image: ChildrenPreview4.matcap4,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[4] as Mesh).material = andesiteMaterial2
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.SIDES
					},
					{
						id: v4(),
						title: 'Neon blue',
						price: 8000,
						image: ChildrenPreview4.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[4] as Mesh).material = neonBlueMaterial4
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.SIDES
					},
					{
						id: v4(),
						title: 'Acquanetta',
						price: 7000,
						image: ChildrenPreview4.matcap2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[4] as Mesh).material = acquanettaMaterial4
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.SIDES
					},
					{
						id: v4(),
						title: 'Bloody red',
						price: 7000,
						image: ChildrenPreview4.matcap3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[4] as Mesh).material = bloodyRedMaterial4
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.SIDES
					},
					{
						id: v4(),
						title: 'Sunrise',
						price: 7000,
						image: ChildrenPreview4.matcap5,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[4] as Mesh).material = sunriseMaterial4
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.SIDES
					},
					{
						id: v4(),
						title: 'Pacific ocean',
						price: 10000,
						image: Children4.basic6,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[4] as Mesh).material = pacificOceanMaterial4
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.SIDES
					}
				]
			})

			flybridgeExteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.FLYBRIDGE_VISOR,
				name: 'Flybridge Visor',
				options: [
					{
						id: v4(),
						title: 'Andesite',
						price: 0,
						image: ChildrenPreview6.matcap3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[6] as Mesh).material = andesiteMaterial6
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.FLYBRIDGE_VISOR
					},
					{
						id: v4(),
						title: 'Neon blue',
						price: 6000,
						image: ChildrenPreview6.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[6] as Mesh).material = neonBlueMaterial6
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.FLYBRIDGE_VISOR
					},
					{
						id: v4(),
						title: 'Bloody red',
						price: 5000,
						image: ChildrenPreview6.matcap2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[6] as Mesh).material = bloodyRedMaterial4
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.FLYBRIDGE_VISOR
					},
					{
						id: v4(),
						title: 'Stainless steel',
						price: 1500,
						image: ChildrenPreview6.matcap4,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[6] as Mesh).material = stainlessSteelMaterial6
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.FLYBRIDGE_VISOR
					},
					{
						id: v4(),
						title: 'Red carbon',
						price: 5000,
						image: Children6.basic5,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[6] as Mesh).material = redCarbonMaterial6
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.FLYBRIDGE_VISOR
					}
				]
			})

			flybridgeExteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.WINDOWS,
				name: 'Windows',
				options: [
					{
						id: v4(),
						title: 'Clear glass',
						price: 0,
						image: ChildrenPreview7.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[7] as Mesh).material = clearGlassMaterial7
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.WINDOWS
					},
					{
						id: v4(),
						title: 'Toned glass',
						price: 4500,
						image: ChildrenPreview7.basic2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[7] as Mesh).material = tonedGlassMaterial7
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.WINDOWS
					}
				]
			})

			flybridgeExteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.COUNTER,
				name: 'Counter',
				options: [
					{
						id: v4(),
						title: 'Stainless steel',
						price: 0,
						image: ChildrenPreview8.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[8] as Mesh).material = stainlessSteelMaterial8
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.COUNTER
					},
					{
						id: v4(),
						title: 'Black steel',
						price: 2000,
						image: ChildrenPreview8.matcap2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[8] as Mesh).material = blackSteelMaterial8
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COUNTER
					},
					{
						id: v4(),
						title: 'Golden horizon',
						price: 6000,
						image: ChildrenPreview8.matcap3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[8] as Mesh).material = goldenHorizonMaterial8
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COUNTER
					}
				]
			})

			flybridgeExteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.ILLUMINATORS,
				name: 'Illuminators',
				options: [
					{
						id: v4(),
						title: 'Clear glass',
						price: 0,
						image: ChildrenPreview9.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[9] as Mesh).material = clearGlassMaterial9
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.ILLUMINATORS
					},
					{
						id: v4(),
						title: 'Toned glass',
						price: 2500,
						image: ChildrenPreview9.basic2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[9] as Mesh).material = tonedGlassMaterial9
							handleSelectExteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.ILLUMINATORS
					}
				]
			})
		}

		function initInterior() {
			flybridgeInteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL,
				name: 'Throttle & Steering Wheel',
				options: [
					{
						id: v4(),
						title: 'Andesite',
						price: 0,
						image: ChildrenPreview1.matcap3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[1] as Mesh).material = andesiteMaterial1
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType:
							ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL
					},
					{
						id: v4(),
						title: 'Black sapphire',
						price: 2000,
						image: ChildrenPreview1.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[1] as Mesh).material = blackSapphireMaterial1
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType:
							ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL
					},
					{
						id: v4(),
						title: 'Acquanetta',
						price: 4000,
						image: ChildrenPreview1.matcap2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[1] as Mesh).material = acquanettaMaterial1
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType:
							ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL
					},
					{
						id: v4(),
						title: 'Red carbon',
						price: 5000,
						image: Children1.basic4,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[1] as Mesh).material = redCarbonMaterial1
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType:
							ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL
					}
				]
			})

			flybridgeInteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.COCKPIT_FLOOR,
				name: 'Cockpit Floor',
				options: [
					{
						id: v4(),
						title: 'Oak planks',
						price: 0,
						image: Children3.basic1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[3] as Mesh).material = oakPlanksMaterial3
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_FLOOR
					},
					{
						id: v4(),
						title: 'Demi season teak',
						price: 1500,
						image: Children3.basic2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[3] as Mesh).material = demiSeasonTeakMaterial3
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_FLOOR
					},
					{
						id: v4(),
						title: 'Burned teak',
						price: 3000,
						image: Children3.basic3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[3] as Mesh).material = burnedTeakMaterial3
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_FLOOR
					},
					{
						id: v4(),
						title: 'Red wood',
						price: 5000,
						image: Children3.basic4,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[3] as Mesh).material = redWoodMaterial3
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_FLOOR
					},
					{
						id: v4(),
						title: 'Dark oak',
						price: 2000,
						image: Children3.basic5,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[3] as Mesh).material = darkOakMaterial3
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_FLOOR
					}
				]
			})

			flybridgeInteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.COUCH,
				name: 'Couch',
				options: [
					{
						id: v4(),
						title: 'Bourbon leather',
						price: 0,
						image: Children5.basic1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[5] as Mesh).material = bourbonLeatherMaterial5
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.COUCH
					},
					{
						id: v4(),
						title: 'Dark cashmere',
						price: 6000,
						image: Children5.basic2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[5] as Mesh).material = darkCashemereMaterial5
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COUCH
					},
					{
						id: v4(),
						title: 'Brown leather',
						price: 5000,
						image: Children5.basic3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[5] as Mesh).material = brownLeatherMaterial5
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COUCH
					},
					{
						id: v4(),
						title: 'Tanned leather',
						price: 5000,
						image: Children5.basic4,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[5] as Mesh).material = tannedLeatherMaterial5
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COUCH
					},
					{
						id: v4(),
						title: 'Blue marline',
						price: 7000,
						image: Children5.basic5,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[5] as Mesh).material = blueMarlineMaterial2
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COUCH
					},
					{
						id: v4(),
						title: 'Beige leather',
						price: 7000,
						image: Children5.basic6,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[5] as Mesh).material = beigeLeatherMaterial5
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COUCH
					}
				]
			})

			flybridgeInteriorConfigStore.addConfigOptionGroup({
				id: v4(),
				type: ConfigOptionGroupType.COCKPIT_STEERING_WHEEL,
				name: 'Cockpit Steering Wheel',
				options: [
					{
						id: v4(),
						title: 'Black saphire',
						price: 0,
						image: ChildrenPreview10.matcap1,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[10] as Mesh).material = blackSapphireMaterial10
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: true,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_STEERING_WHEEL
					},
					{
						id: v4(),
						title: 'Acquanetta',
						price: 4000,
						image: ChildrenPreview10.matcap2,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[10] as Mesh).material = acquanettaMaterial10
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_STEERING_WHEEL
					},
					{
						id: v4(),
						title: 'Andesite',
						price: 4000,
						image: ChildrenPreview10.matcap3,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[10] as Mesh).material = andesiteMaterial10
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_STEERING_WHEEL
					},
					{
						id: v4(),
						title: 'Red carbon',
						price: 7000,
						image: Children10.basic4,
						onSelect: (configOptionGroupType, optionId) => {
							;(model.children[10] as Mesh).material = redCarbonMaterial10
							handleSelectInteriorGroupOptionById(
								configOptionGroupType,
								optionId
							)
						},
						selected: false,
						configOptionGroupType: ConfigOptionGroupType.COCKPIT_STEERING_WHEEL
					}
				]
			})
		}

		function initEngines() {
			flybridgeEngineConfigStore.addConfigOption({
				id: v4(),
				title: 'Volvo Penta D3-200',
				price: 15000,
				image: Engines.variant1,
				onSelect: optionId => {
					flybridgeEngineConfigStore.selectOptionById(optionId)
				},
				selected: true,
				description:
					'Modern, high-tech motor with high torque and increased power on both shafts, providing fast boat acceleration and subsequent high maneuverability of any vessel.'
			})

			flybridgeEngineConfigStore.addConfigOption({
				id: v4(),
				title: 'Volvo Penta D6-300',
				price: 20000,
				image: Engines.variant2,
				onSelect: optionId => {
					flybridgeEngineConfigStore.selectOptionById(optionId)
				},
				selected: false,
				description:
					'5.5-liter diesel engine for recreational and commercial watercraft with direct fuel injection via the Common-Rail system. The technology is double camshaft and turbocharged, which ensures high reliability in various modes.'
			})

			flybridgeEngineConfigStore.addConfigOption({
				id: v4(),
				title: 'Volvo Penta D11-670 ',
				price: 25000,
				image: Engines.variant3,
				onSelect: optionId => {
					flybridgeEngineConfigStore.selectOptionById(optionId)
				},
				selected: false,
				description:
					'Built with the latest systems and electronic controls. The engine design uses a large amount of high-precision equipment to remove maximum power at the lowest possible weight.'
			})
		}

		if (flybridgeExteriorConfigStore.exterior.length === 0) {
			initExterior()
		}

		if (flybridgeInteriorConfigStore.interior.length === 0) {
			initInterior()
		}

		if (flybridgeEngineConfigStore.engines.length === 0) {
			initEngines()
		}
	}, [])

	return (
		<>
			<Navbar
				yachtName="Flybridge"
				interiorOptions={interiorOptions}
				exteriorOptions={exteriorOptions}
				toggleEngineSidebar={toggleEngineSidebar}
				isHidden={isFullscreenShown}
			/>

			{/* <FlybridgeAdminPanelSidebar
				isShown={isAdminOpened}
				setIsShown={setIsAdminOpened}
				model={model}
			/> */}

			{/* INTERIOR START */}

			<Sidebar
				title="Siderails & Portlights"
				isShown={isSiderailAndPortlightsOpened}
				setIsShown={setIsSiderailAndPortlightsOpened}
			>
				<OptionsList
					type="exterior"
					options={
						flybridgeExteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				title="Fender"
				isShown={isFenderOpened}
				setIsShown={setIsFenderOpened}
			>
				<OptionsList
					type="exterior"
					options={
						flybridgeExteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.FENDER
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				title="Sides"
				isShown={isSidesOpened}
				setIsShown={setIsSidesOpened}
			>
				<OptionsList
					type="exterior"
					options={
						flybridgeExteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.SIDES
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				title="Flybridge Visor"
				isShown={isVisorOpened}
				setIsShown={setIsVisorOpened}
			>
				<OptionsList
					type="exterior"
					options={
						flybridgeExteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.FLYBRIDGE_VISOR
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				title="Windows"
				isShown={isWindowsOpened}
				setIsShown={setIsWindowsOpened}
			>
				<OptionsList
					type="exterior"
					options={
						flybridgeExteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.WINDOWS
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				title="Counter"
				isShown={isCounterOpened}
				setIsShown={setIsCounterOpened}
			>
				<OptionsList
					type="exterior"
					options={
						flybridgeExteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.COUNTER
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				title="Illuminators"
				isShown={isIlluminatorsOpened}
				setIsShown={setIsIlluminatorsOpened}
			>
				<OptionsList
					type="exterior"
					options={
						flybridgeExteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.ILLUMINATORS
						)?.options || []
					}
				/>
			</Sidebar>

			{/* EXTERIOR END */}

			{/* INTERIOR START */}

			<Sidebar
				isShown={isThrottleAndSteeringWheelOpened}
				setIsShown={setIsThrottleAndSteeringWheelOpened}
				title="Throttle & Steering Wheel"
				width="450px"
			>
				<OptionsList
					type="interior"
					options={
						flybridgeInteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				isShown={isCockpitFloorOpened}
				setIsShown={setIsCockpitFloorOpened}
				title="Cockpit Floor"
			>
				<OptionsList
					type="interior"
					options={
						flybridgeInteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.COCKPIT_FLOOR
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				isShown={isCouchOpened}
				setIsShown={setIsCouchOpened}
				title="Couch"
			>
				<OptionsList
					type="interior"
					options={
						flybridgeInteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.COUCH
						)?.options || []
					}
				/>
			</Sidebar>

			<Sidebar
				isShown={isCockpitSteeringWheelOpened}
				setIsShown={setIsCockpitSteeringWheelOpened}
				title="Cockpit Steering Wheel"
			>
				<OptionsList
					type="interior"
					options={
						flybridgeInteriorConfigStore.getConfigOptionGroupByType(
							ConfigOptionGroupType.COCKPIT_STEERING_WHEEL
						)?.options || []
					}
				/>
			</Sidebar>

			{/* INTERIOR END */}

			{/* ENGINE START */}

			<Sidebar
				isShown={isEngineSidebarOpened}
				setIsShown={setIsEngineSidebarOpened}
				title="Engines"
				isEngineFlag={true}
			>
				<OptionsList
					type="engine"
					options={flybridgeEngineConfigStore.engines}
				/>
			</Sidebar>

			{/* ENGINE END */}
		</>
	)
}

export default observer(FlybridgeControls)
