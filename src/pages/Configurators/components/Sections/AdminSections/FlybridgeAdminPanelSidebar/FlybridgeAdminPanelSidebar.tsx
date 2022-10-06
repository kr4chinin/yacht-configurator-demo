import styles from './FlybridgeAdminPanelSidebar.module.scss'
import { Dispatch, FC, SetStateAction } from 'react'
import {
	Group,
	Mesh,
	MeshBasicMaterial,
	MeshMatcapMaterial,
	Texture,
	TextureLoader
} from 'three'
import AdminSidebarButton from '../../../UI/AdminElements/AdminPanelSidebarButton'
import Sidebar from '../../Sidebar'
import * as THREE from 'three'
import PrimaryListElement from '../../../UI/AdminElements/PrimaryListElement'
import PrimaryList from '../../../UI/AdminElements/PrimaryList'
import PrimaryHr from '../../../UI/PrimaryHr'

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
	function handleChangeMaterial(
		childNumber: number,
		type: 'matcap' | 'basic',
		isTextureConfig: boolean = false
	) {
		let url: string | null = ''
		let repeat: number | null = null

		let texture: Texture | null = null

		// To allow admin to change repeat of the texture
		if (isTextureConfig) {
			url = prompt('Enter basic texture url: ')
			repeat = Number(prompt('Enter repeat: ', '0.5'))

			if (url) {
				texture = new TextureLoader().load(url)
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping
				texture.repeat.set(repeat, repeat)
			}
		}

		// Default texture loading
		if (!isTextureConfig) {
			url = prompt(
				`Enter ${type === 'matcap' ? 'matcap' : 'basic'} texture URL:`
			)
			if (url) {
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
			material.opacity = 0.7
		}

		if (childNumber === 9) {
			material.transparent = true
			material.opacity = 0.7
		}

		;(model.children[childNumber] as Mesh).material = material
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
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(7, 'basic')}
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
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(9, 'basic')}
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

					<PrimaryListElement title="Cockpit floor">
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(3, 'basic', true)}
						/>
					</PrimaryListElement>

					<PrimaryListElement title="Couch">
						<AdminSidebarButton
							secondary
							onClick={() => handleChangeMaterial(5, 'basic', true)}
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
