import { Sky } from '@react-three/drei'

const SkyElement = () => {
	return (
		<Sky
			distance={45000}
			sunPosition={[1, 1, 0]}
			inclination={0}
			azimuth={0.25}
			rayleigh={0.1}
			turbidity={0.1}
			mieCoefficient={0.02}
		/>
	)
}

export default SkyElement
