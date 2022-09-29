import styles from './SkydeckConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import SkydeckModel from '../components/SkydeckModel'
import Footer from '../components/Sections/Footer'
import SkyElement from '../components/UI/SkyElement'
import SkydeckNavbar from '../components/Sections/SkydeckNavbar'

const SkydeckConfigurator = () => {
	const yachtModel = useFBX('../models/skydeck.fbx')

	return (
		<>
			<SkydeckNavbar model={yachtModel} />

			<div className={styles['canvas-container']}>
				<Canvas>
					<OrbitControls />
					<SkyElement />
					<SkydeckModel model={yachtModel} />
				</Canvas>
			</div>
			<Footer />
		</>
	)
}

export default SkydeckConfigurator
