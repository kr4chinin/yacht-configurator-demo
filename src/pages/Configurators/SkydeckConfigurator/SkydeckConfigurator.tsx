import styles from './SkydeckConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import SkydeckModel from '../components/SkydeckModel'
import SkyElement from '../components/UI/SkyElement'
import SkydeckNavbar from '../components/Sections/SkydeckControls'

const SkydeckConfigurator = () => {
	const yachtModel = useFBX('../models/skydeck.fbx')

	return (
		<>
			<SkydeckNavbar model={yachtModel} />

			<div className={styles['canvas-container']}>
				<Canvas
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
					<OrbitControls />
					<SkyElement />
					<SkydeckModel model={yachtModel} />
				</Canvas>
			</div>
		</>
	)
}

export default SkydeckConfigurator
