import styles from './FlybridgeConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FlybridgeModel from '../components/FlybridgeModel'
import Navbar from '../components/Sections/Navbar'
import Footer from '../components/Sections/Footer'
import SkyElement from '../components/UI/SkyElement'

const FlybridgeConfigurator = () => {
	const yachtModel = useFBX('../models/flybridge.fbx')

	return (
		<>
			<Navbar model={yachtModel} yachtName='Flybridge'/>
			<div className={styles['canvas-container']}>
				<Canvas>
					<OrbitControls />
                    <SkyElement />
					<FlybridgeModel model={yachtModel} />
				</Canvas>
			</div>
			<Footer />
		</>
	)
}

export default FlybridgeConfigurator
