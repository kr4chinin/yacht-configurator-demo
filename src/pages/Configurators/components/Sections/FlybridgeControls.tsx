import { FC, useMemo, useState } from 'react'
import { Group, Mesh } from 'three'
import PrimaryVariantsList from '../UI/PrimaryVariantsList'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import { Children0 } from '../../../../utils/urls/flybridge/children[0]'
import { initialMaterial0 } from '../../../../utils/materials/flybridge/materials[0]'
import { erasedSteelMaterial0 } from '../../../../utils/materials/flybridge/materials[0]'
import { darkSteelMaterial0 } from '../../../../utils/materials/flybridge/materials[0]'

import { Children2 } from '../../../../utils/urls/flybridge/children[2]'
import { initialMaterial2 } from '../../../../utils/materials/flybridge/materials[2]'
import { redCarbonMaterial2 } from '../../../../utils/materials/flybridge/materials[2]'
import { paperWhiteMaterial2 } from '../../../../utils/materials/flybridge/materials[2]'

import { Children4 } from '../../../../utils/urls/flybridge/children[4]'
import { initialMaterial4 } from '../../../../utils/materials/flybridge/materials[4]'
import { wildGreenMaterial4 } from '../../../../utils/materials/flybridge/materials[4]'
import { sunnyGreenMaterial4 } from '../../../../utils/materials/flybridge/materials[4]'
import { skyBlackMaterial4 } from '../../../../utils/materials/flybridge/materials[4]'
import { papyrusGreenMaterial4 } from '../../../../utils/materials/flybridge/materials[4]'
import { darkCloudsMaterial4 } from '../../../../utils/materials/flybridge/materials[4]'
import { asphaltGrayMaterial4 } from '../../../../utils/materials/flybridge/materials[4]'

import { Children6 } from '../../../../utils/urls/flybridge/children[6]'
import { initialMaterial6 } from '../../../../utils/materials/flybridge/materials[6]'
import { asphaltGrayMaterial6 } from '../../../../utils/materials/flybridge/materials[6]'
import { brownRedMaterial6 } from '../../../../utils/materials/flybridge/materials[6]'
import { grayCarbonMaterial6 } from '../../../../utils/materials/flybridge/materials[6]'
import { redCarbonMaterial6 } from '../../../../utils/materials/flybridge/materials[6]'
import { sunnyGreenMaterial6 } from '../../../../utils/materials/flybridge/materials[6]'

import { Children7 } from '../../../../utils/urls/flybridge/children[7]'
import { initialMaterial7 } from '../../../../utils/materials/flybridge/materials[7]'
import { blueMaterial7 } from '../../../../utils/materials/flybridge/materials[7]'
import { dirtyMaterial7 } from '../../../../utils/materials/flybridge/materials[7]'

import { Children8 } from '../../../../utils/urls/flybridge/children[8]'
import { initialMaterial8 } from '../../../../utils/materials/flybridge/materials[8]'
import { erasedSteelMaterial8 } from '../../../../utils/materials/flybridge/materials[8]'
import { asphaltGrayMaterial8 } from '../../../../utils/materials/flybridge/materials[8]'

import { Children9 } from '../../../../utils/urls/flybridge/children[9]'
import { initialMaterial9 } from '../../../../utils/materials/flybridge/materials[9]'
import { blueMaterial9 } from '../../../../utils/materials/flybridge/materials[9]'
import { dirtyMaterial9 } from '../../../../utils/materials/flybridge/materials[9]'

interface FlybridgeControlsProps {
	model: Group
    isFullscreenShown: boolean
}

const FlybridgeControls: FC<FlybridgeControlsProps> = ({ model, isFullscreenShown }) => {
	const [isSiderailAndPortlightsOpened, setIsSiderailAndPortlightsOpened] =
		useState(false)
	const [isFenderOpened, setIsFenderOpened] = useState(false)
	const [isSidesOpened, setIsSidesOpened] = useState(false)
	const [isVisorOpened, setIsVisorOpened] = useState(false)
	const [isWindowsOpened, setIsWindowsOpened] = useState(false)
	const [isCounterOpened, setIsCounterOpened] = useState(false)
	const [isIlluminatorsOpened, setIsIlluminatorsOpened] = useState(false)

	const mockOptions = useMemo(
		() => [
			{
				title: 'Overview',
				onClick: () => setIsSiderailAndPortlightsOpened(prev => !prev)
			},
			{ title: 'Frame', onClick: () => {} },
			{ title: 'Finishing', onClick: () => {} },
			{ title: 'Floor', onClick: () => {} },
			{ title: 'Lights', onClick: () => {} },
			{ title: 'Windows', onClick: () => {} }
		],
		[]
	)

	const exteriorOptions = useMemo(() => [
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
	], [])

	return (
		<>
			<Navbar
				yachtName="Flybridge"
				interiorOptions={mockOptions}
				exteriorOptions={exteriorOptions}
				engineOptions={mockOptions}
				isHidden={isFullscreenShown}
			/>

			<Sidebar
				isShown={isSiderailAndPortlightsOpened}
				setIsShown={setIsSiderailAndPortlightsOpened}
			>
				<PrimaryVariantsList
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

			<Sidebar isShown={isFenderOpened} setIsShown={setIsFenderOpened}>
				<PrimaryVariantsList
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

			<Sidebar isShown={isSidesOpened} setIsShown={setIsSidesOpened}>
				<PrimaryVariantsList
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

			<Sidebar isShown={isVisorOpened} setIsShown={setIsVisorOpened}>
				<PrimaryVariantsList
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

			<Sidebar isShown={isWindowsOpened} setIsShown={setIsWindowsOpened}>
				<PrimaryVariantsList
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

			<Sidebar isShown={isCounterOpened} setIsShown={setIsCounterOpened}>
				<PrimaryVariantsList
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

			<Sidebar
				isShown={isIlluminatorsOpened}
				setIsShown={setIsIlluminatorsOpened}
			>
				<PrimaryVariantsList
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
		</>
	)
}

export default FlybridgeControls
