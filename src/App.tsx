import styles from './styles/App.module.scss'
import { useFBX, OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import YachtModel from './components/YachtModel'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
	const yachtModel = useFBX('../models/yacht.fbx')

	return (
		<>
			<Navbar model={yachtModel} />
			<div className={styles['canvas-container']}>
				<Canvas>
					<OrbitControls />
					<Sky
						distance={45000}
						sunPosition={[1, 1, 0]}
						inclination={0}
						azimuth={0.25}
					/>
					<ambientLight intensity={0.65} />
					<Suspense fallback="Loading...">
						<YachtModel model={yachtModel} />
					</Suspense>
				</Canvas>
			</div>
			<Footer />
		</>
	)
}

export default App
