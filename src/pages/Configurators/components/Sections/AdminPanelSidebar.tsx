import { Dispatch, FC, SetStateAction } from 'react'
import {
	Group,
	Mesh,
	MeshBasicMaterial,
	MeshMatcapMaterial,
	Texture,
	TextureLoader
} from 'three'
import AdminSidebarButton from '../UI/AdminElements/AdminPanelSidebarButton'
import Sidebar from './Sidebar'
import * as THREE from 'three'

interface AdminPanelSidebarProps {
	isShown: boolean
	setIsShown: Dispatch<SetStateAction<boolean>>
	model: Group
}

const AdminPanelSidebar: FC<AdminPanelSidebarProps> = ({
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

	enum Colors {
		'primary' = 'rgba(50, 50, 50, 0.5)',
		'secondary' = 'rgba(100, 100, 100, 0.5)',
		'tertiary' = 'rgba(150, 150, 150, 0.5)',
		'quaternary' = 'rgba(200, 200, 200, 0.5)',
		'quinary' = 'rgba(250, 250, 250, 0.5)'
	}

	return (
		<Sidebar isShown={isShown} setIsShown={setIsShown} title="Admin Panel">
			<AdminSidebarButton onClick={() => handleChangeMaterial(0, 'matcap')}>
				Siderail & Portlight (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton onClick={() => handleChangeMaterial(0, 'basic')}>
				Siderail & Portlight (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.primary}
				onClick={() => handleChangeMaterial(1, 'matcap')}
			>
				Throttle & Steering Wheel (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton
				color={Colors.primary}
				onClick={() => handleChangeMaterial(1, 'basic')}
			>
				Throttle & Steering Wheel (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.secondary}
				onClick={() => handleChangeMaterial(2, 'matcap')}
			>
				Fender (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton
				color={Colors.secondary}
				onClick={() => handleChangeMaterial(2, 'basic')}
			>
				Fender (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.tertiary}
				onClick={() => handleChangeMaterial(3, 'basic', true)}
			>
				Cockpit floor (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.tertiary}
				onClick={() => handleChangeMaterial(4, 'matcap')}
			>
				Sides (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton
				color={Colors.quaternary}
				onClick={() => handleChangeMaterial(4, 'basic')}
			>
				Sides (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.quinary}
				onClick={() => handleChangeMaterial(5, 'basic', true)}
			>
				Couch (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton onClick={() => handleChangeMaterial(6, 'matcap')}>
				Flybridge visor (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton onClick={() => handleChangeMaterial(6, 'basic')}>
				Flybrifge visor (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.primary}
				onClick={() => handleChangeMaterial(7, 'matcap')}
			>
				Windows (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton
				color={Colors.primary}
				onClick={() => handleChangeMaterial(7, 'basic')}
			>
				Windows (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.secondary}
				onClick={() => handleChangeMaterial(8, 'matcap')}
			>
				Counter (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton
				color={Colors.secondary}
				onClick={() => handleChangeMaterial(8, 'basic')}
			>
				Counter (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.tertiary}
				onClick={() => handleChangeMaterial(9, 'matcap')}
			>
				Illuminators (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton
				color={Colors.tertiary}
				onClick={() => handleChangeMaterial(9, 'basic')}
			>
				Illuminators (<b>Basic</b>)
			</AdminSidebarButton>

			<AdminSidebarButton
				color={Colors.quaternary}
				onClick={() => handleChangeMaterial(10, 'matcap')}
			>
				Cockpit steering wheel (<b>Matcap</b>)
			</AdminSidebarButton>
			<AdminSidebarButton
				color={Colors.quaternary}
				onClick={() => handleChangeMaterial(10, 'basic')}
			>
				Cockpit steering wheel (<b>Basic</b>)
			</AdminSidebarButton>
		</Sidebar>
	)
}

export default AdminPanelSidebar
