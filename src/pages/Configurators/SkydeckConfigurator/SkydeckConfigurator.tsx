import styles from './SkydeckConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import SkydeckModel from '../components/SkydeckModel'
import SkyElement from '../components/UI/SkyElement'
import SkydeckNavbar from '../components/Sections/SkydeckControls'
import OceanElement from '../components/UI/OceanElement'
import CustomCanvas from '../components/UI/CustomCanvas'

const SkydeckConfigurator = () => {
	const yachtModel = useFBX('../models/skydeck.fbx')

	return (
		<>
			<SkydeckNavbar model={yachtModel} />

			<div className={styles['canvas-container']}>
				<CustomCanvas>
					<SkyElement />
					<OceanElement />
					<SkydeckModel model={yachtModel} />

					<OrbitControls maxPolarAngle={Math.PI / 2.5} maxDistance={30} />
				</CustomCanvas>
			</div>
		</>
	)
}

export default SkydeckConfigurator
