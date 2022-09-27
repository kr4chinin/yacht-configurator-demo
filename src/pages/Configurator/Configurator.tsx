import styles from './Configurator.module.scss'
import { useFBX, OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import YachtModel from './components/YachtModel'
import Navbar from './components/Sections/Navbar'
import Footer from './components/Sections/Footer'

const Configurator = () => {
	const yachtModel = useFBX('../models/yacht.fbx')

	return (
		<>
			<Navbar model={yachtModel} />
			<div className={styles['canvas-container']}>
				<Canvas>
					<OrbitControls />
					<Sky
						distance={45000}
						sunPosition={[1, 1, 0]}
						inclination={0}
						azimuth={0.25}
                        rayleigh={0.1}
                        turbidity={0.1}
                        mieCoefficient={0.02}
					/>
					<YachtModel model={yachtModel} />
				</Canvas>
			</div>
			<Footer />
		</>
	)
}

export default Configurator
