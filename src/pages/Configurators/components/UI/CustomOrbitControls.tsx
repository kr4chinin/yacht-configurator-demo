import { OrbitControls } from '@react-three/drei'

const CustomOrbitControls = () => {
	return (
		<OrbitControls
			maxPolarAngle={Math.PI / 2.5}
			maxDistance={30}
			minDistance={2}
		/>
	)
}

export default CustomOrbitControls
