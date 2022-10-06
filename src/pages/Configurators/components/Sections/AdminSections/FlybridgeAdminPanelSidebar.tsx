import { Dispatch, FC, SetStateAction } from 'react'
import {
	Group,
	Mesh,
	MeshBasicMaterial,
	MeshMatcapMaterial,
	Texture,
	TextureLoader
} from 'three'
import AdminSidebarButton from '../../UI/AdminElements/AdminPanelSidebarButton'
import Sidebar from '../Sidebar'
import * as THREE from 'three'
import PrimaryListElement from '../../UI/AdminElements/PrimaryListElement'
import PrimaryList from '../../UI/AdminElements/PrimaryList'
import PrimaryHr from '../../UI/PrimaryHr'
import PrimarySliderInput from '../../UI/AdminElements/PrimarySliderInput'

interface FlybridgeAdminPanelSidebarProps {
	isShown: boolean
	setIsShown: Dispatch<SetStateAction<boolean>>
	model: Group
}

const FlybridgeAdminPanelSidebar: FC<FlybridgeAdminPanelSidebarProps> = ({
	isShown,
	setIsShown,
	model
}) => {
	async function handleChangeMaterial(
		childNumber: number,
		type: 'matcap' | 'basic',
		isTextureConfig: boolean = false,
		repeatCount: number | null = 0.5,
		opacity: number = 0.7
	) {
		let url: string | null = ''
		let texture: Texture | null = null

		if (isTextureConfig) {
			url = prompt('Enter basic texture url: ')

			if (url) {
				// Checking whether it is possible to get this texture by URL
				try {
					await fetch(url)
				} catch (e) {
					alert(
						'Something went wrong while loading this texture. Seems like image server has forbidden to get pictures by URL or you have entered incorrect one!'
					)
				}
				texture = new TextureLoader().load(url)
				if (type === 'basic' && childNumber !== 7 && childNumber !== 9) {
					texture.wrapS = texture.wrapT = THREE.RepeatWrapping
					if (repeatCount) {
						texture.repeat.set(repeatCount, repeatCount)
					} else {
						texture.repeat.set(0.5, 0.5)
					}
				}
			}
		}

		// Default texture loading
		if (!isTextureConfig) {
			url = prompt(
				`Enter ${type === 'matcap' ? 'matcap' : 'basic'} texture URL:`
			)
			if (url) {
				// Checking whether it is possible to get this texture by URL
				try {
					await fetch(url)
				} catch (e) {
					alert(
						'Something went wrong while loading this texture. Seems like image server has forbidden to get pictures by URL or you have entered incorrect one!'
					)
				}
				texture = new TextureLoader().load(url)
			} else {
				alert('URL was not provided!')
			}
		}

		let material: MeshMatcapMaterial | MeshBasicMaterial

		// Handle different material types
		switch (type) {
			case 'matcap': {
				material = new MeshMatcapMaterial({ matcap: texture })
				break
			}
			case 'basic': {
				material = new MeshBasicMaterial({ map: texture })
				break
			}
			default: {
				material = new MeshBasicMaterial({ map: texture })
			}
		}

		// Set opacity to windows and illuminators
		if (childNumber === 7) {
			material.transparent = true
			material.opacity = opacity
		}

		if (childNumber === 9) {
			material.transparent = true
			material.opacity = opacity
		}

		;(model.children[childNumber] as Mesh).material = material
	}

	function handleChangeFloorTextureRepeat(value: number) {
		handleChangeMaterial(3, 'basic', true, value)
	}

	function handleChangeCouchTextureRepeat(value: number) {
		handleChangeMaterial(5, 'basic', true, value)
	}

	function handleChangeMatcapWindowsOpacity(value: number) {
		handleChangeMaterial(7, 'matcap', true, null, value)
	}

	function handleChangeBasicWindowsOpacity(value: number) {
		handleChangeMaterial(7, 'basic', true, null, value)
	}

	function handleChangeMatcapIlluminatorsOpacity(value: number) {
		handleChangeMaterial(9, 'matcap', true, null, value)
	}

	function handleChangeBasicIlluminatorsOpacity(value: number) {
		handleChangeMaterial(9, 'basic', true, null, value)
	}

	return (
		<Sidebar
			isShown={isShown}
			setIsShown={setIsShown}
			title="Admin Panel"
			width="450px"
		>
			<div>
				<PrimaryList title="Exterior">
					<PrimaryListElement title="Siderail & Portlights">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(0, 'matcap')}
						/>
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(0, 'basic')}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Fender">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(2, 'matcap')}
						/>
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(2, 'basic')}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Sides">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(4, 'matcap')}
						/>
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(4, 'basic')}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Flybridge Visor">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(6, 'matcap')}
						/>
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(6, 'basic')}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Windows">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(7, 'matcap')}
						/>
						<PrimarySliderInput
							title="Opacity (matcap)"
							defaultValue={0.7}
							onApply={handleChangeMatcapWindowsOpacity}
							min={0.1}
							max={1}
							step={0.1}
							marginBottom="10px"
						/>

						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(7, 'basic')}
						/>
						<PrimarySliderInput
							title="Opacity (basic)"
							defaultValue={0.7}
							onApply={handleChangeBasicWindowsOpacity}
							min={0.1}
							max={1}
							step={0.1}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Counter">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(8, 'matcap')}
						/>

						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(8, 'basic')}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Illuminators">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(9, 'matcap')}
						/>
						<PrimarySliderInput
							title="Opacity (basic)"
							defaultValue={0.7}
							onApply={handleChangeMatcapIlluminatorsOpacity}
							min={0.1}
							max={1}
							step={0.1}
							marginBottom="10px"
						/>

						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(9, 'basic')}
						/>
						<PrimarySliderInput
							title="Opacity (basic)"
							defaultValue={0.7}
							onApply={handleChangeBasicIlluminatorsOpacity}
							min={0.1}
							max={1}
							step={0.1}
						/>
					</PrimaryListElement>
				</PrimaryList>

				<PrimaryHr />

				<PrimaryList title="Interior">
					<PrimaryListElement title="Throttle & Steering Wheel">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(1, 'matcap')}
						/>
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(1, 'basic')}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Cockpit Floor">
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(3, 'basic', true)}
						/>
						<PrimarySliderInput
							title="Repeat"
							defaultValue={0.5}
							onApply={handleChangeFloorTextureRepeat}
							min={0.1}
							max={1.5}
							step={0.1}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Couch">
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(5, 'basic', true)}
						/>
						<PrimarySliderInput
							title="Repeat"
							defaultValue={2}
							onApply={handleChangeCouchTextureRepeat}
							min={0.1}
							max={3}
							step={0.1}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Cockpit Steering Wheel">
						<AdminSidebarButton
							primary
							onClick={() => handleChangeMaterial(10, 'matcap')}
						/>
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(10, 'basic')}
						/>
					</PrimaryListElement>
				</PrimaryList>
			</div>
		</Sidebar>
	)
}

export default FlybridgeAdminPanelSidebar
