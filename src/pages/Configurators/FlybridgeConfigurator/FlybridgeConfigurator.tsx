import styles from './FlybridgeConfigurator.module.scss'
import { useFBX, OrbitControls } from '@react-three/drei'
import FlybridgeModel from '../components/FlybridgeModel'
import SkyElement from '../components/UI/SkyElement'
import FlybridgeControls from '../components/Sections/FlybridgeControls'
import OceanElement from '../components/UI/OceanElement'
import CustomCanvas from '../components/UI/CustomCanvas'

const FlybridgeConfigurator = () => {
	const yachtModel = useFBX('../models/flybridge.fbx')

	return (
		<>
			<FlybridgeControls model={yachtModel} />

			<div className={styles['canvas-container']}>
				<CustomCanvas>
					<SkyElement />
					<OceanElement />
					<FlybridgeModel model={yachtModel} />

					<OrbitControls maxPolarAngle={Math.PI / 2.5} maxDistance={30} />
				</CustomCanvas>
			</div>
		</>
	)
}

export default FlybridgeConfigurator
