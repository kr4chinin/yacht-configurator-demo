import styles from './FlybridgeConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FlybridgeModel from '../components/FlybridgeModel'
import Footer from '../components/Sections/Footer'
import SkyElement from '../components/UI/SkyElement'
import FlybridgeControls from '../components/Sections/FlybridgeControls'

const FlybridgeConfigurator = () => {
	const yachtModel = useFBX('../models/flybridge.fbx')

	return (
		<>
			<FlybridgeControls model={yachtModel} />

			<div className={styles['canvas-container']}>
				<Canvas>
					<OrbitControls />
					<SkyElement />
					<FlybridgeModel model={yachtModel} />
				</Canvas>
			</div>
		</>
	)
}

export default FlybridgeConfigurator
