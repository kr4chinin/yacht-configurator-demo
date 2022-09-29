import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { FC } from 'react'

interface SkydeckModelProps {
	model: Group
}

const SkydeckModel: FC<SkydeckModelProps> = ({ model }) => {
	// Позиционируем и анимируем яхту
	model.scale.set(0.08, 0.08, 0.08)
	model.position.set(0, 0, 0)
	model.rotation.set(0, 0, 0)

	useFrame(() => {
		model.rotation.y += 0.001
	})

	return <primitive object={model} />
}

export default SkydeckModel
