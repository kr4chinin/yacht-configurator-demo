import styles from './SkydeckConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import SkydeckModel from '../components/SkydeckModel'
import Navbar from '../components/Sections/Navbar'
import Footer from '../components/Sections/Footer'
import SkyElement from '../components/UI/SkyElement'

const SkydeckConfigurator = () => {
	const yachtModel = useFBX('../models/skydeck.fbx')

	return (
		<>
			<Navbar model={yachtModel} yachtName='Skydeck'/>
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
