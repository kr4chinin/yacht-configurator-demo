import styles from './FlybridgeConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FlybridgeModel from '../components/FlybridgeModel'
import SkyElement from '../components/UI/SkyElement'
import FlybridgeControls from '../components/Sections/FlybridgeControls'
import OceanElement from '../components/UI/OceanElement'

const FlybridgeConfigurator = () => {
	const yachtModel = useFBX('../models/flybridge.fbx')

	return (
		<>
			<FlybridgeControls model={yachtModel} />

			<div className={styles['canvas-container']}>
				<Canvas
					camera={{ position: [0, 3, 5] }}
					onMouseEnter={() => {
						document.body.style.cursor = 'grab'
					}}
					onMouseDown={() => {
						document.body.style.cursor = 'grabbing'
					}}
					onMouseUp={() => {
						document.body.style.cursor = 'grab'
					}}
					onMouseLeave={() => {
						document.body.style.cursor = 'default'
					}}
				>
					<SkyElement />
					<OceanElement />
					<FlybridgeModel model={yachtModel} />

					<OrbitControls maxPolarAngle={Math.PI / 2.5} maxDistance={30} />
				</Canvas>
			</div>
		</>
	)
}

export default FlybridgeConfigurator
