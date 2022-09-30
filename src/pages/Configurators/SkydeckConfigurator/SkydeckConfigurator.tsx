import styles from './SkydeckConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import SkydeckModel from '../components/SkydeckModel'
import SkyElement from '../components/UI/SkyElement'
import SkydeckNavbar from '../components/Sections/SkydeckControls'
import OceanElement from '../components/UI/OceanElement'

const SkydeckConfigurator = () => {
	const yachtModel = useFBX('../models/skydeck.fbx')

	return (
		<>
			<SkydeckNavbar model={yachtModel} />

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
					<SkydeckModel model={yachtModel} />

					<OrbitControls maxPolarAngle={Math.PI / 2.5} maxDistance={30} />
				</Canvas>
			</div>
		</>
	)
}

export default SkydeckConfigurator
