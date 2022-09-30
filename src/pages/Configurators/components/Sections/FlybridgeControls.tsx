import { FC, useState } from 'react'
import { Group, Mesh } from 'three'
import PrimaryVariantsList from '../UI/PrimaryVariantsList'
import ShowFullscreenButton from '../UI/ShowFullscreenButton'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Children2 } from '../../../../utils/urls/flybridge/children[2]'
import { initialMaterial2 } from '../../../../utils/materials/flybridge/materials[2]'
import { redCarbonMaterial2 } from '../../../../utils/materials/flybridge/materials[2]'
import { paperWhiteMaterial2 } from '../../../../utils/materials/flybridge/materials[2]'

interface FlybridgeControlsProps {
	model: Group
}

const FlybridgeControls: FC<FlybridgeControlsProps> = ({ model }) => {
	const [isSiderailAndPortlightsOpened, setIsSiderailAndPortlightsOpened] =
		useState(false)
	const [isFenderOpened, setIsFenderOpened] = useState(false)

	const [isFullscreenShown, setIsFullscreenShown] = useState(false)

	const mockOptions = [
		{
			title: 'Overview',
			onClick: () => setIsSiderailAndPortlightsOpened(prev => !prev)
		},
		{
			title: 'Frame',
			onClick: () => setIsFenderOpened(prev => !prev)
		},
		{ title: 'Finishing', onClick: () => {} },
		{ title: 'Floor', onClick: () => {} },
		{ title: 'Lights', onClick: () => {} },
		{ title: 'Windows', onClick: () => {} }
	]

	const exteriorOptions = [
		{
			title: 'Siderails & Portlights',
			onClick: () => setIsSiderailAndPortlightsOpened(prev => !prev)
		},
		{
			title: 'Fender',
			onClick: () => setIsFenderOpened(prev => !prev)
		},
		{ title: 'Sides', onClick: () => {} },
		{ title: 'Flybridge Visor', onClick: () => {} },
		{ title: 'Windows', onClick: () => {} },
		{ title: 'Counter', onClick: () => {} },
		{ title: 'Illuminators', onClick: () => {} }
	]

	return (
		<>
			<Navbar
				model={model}
				yachtName="Flybridge"
				interiorOptions={mockOptions}
				exteriorOptions={exteriorOptions}
				engineOptions={mockOptions}
				isHidden={isFullscreenShown}
			/>

			<ShowFullscreenButton
				isFullscreenShown={isFullscreenShown}
				toggleFullscreen={() => setIsFullscreenShown(prev => !prev)}
			/>

			<Footer isHidden={isFullscreenShown} />

			<Sidebar
				isShown={isSiderailAndPortlightsOpened}
				setIsShown={setIsSiderailAndPortlightsOpened}
			>
				<PrimaryVariantsList variants={[]} />
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
		</>
	)
}

export default FlybridgeControls
