import styles from './FlybridgeConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FlybridgeModel from '../components/FlybridgeModel'
import Footer from '../components/Sections/Footer'
import SkyElement from '../components/UI/SkyElement'
import FlybridgeNavbar from '../components/Sections/FlybridgeNavbar'

const FlybridgeConfigurator = () => {
	const yachtModel = useFBX('../models/flybridge.fbx')

	return (
		<>
			<FlybridgeNavbar model={yachtModel}/>

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
