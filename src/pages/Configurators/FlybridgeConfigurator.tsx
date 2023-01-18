import { useFBX } from '@react-three/drei'
import { lazy, Suspense } from 'react'
import CustomCanvas from './components/Sections/CustomCanvas/CustomCanvas'
import FlybridgeControlsWrapper from './components/Sections/FlybridgeControlsWrapper'

const LazyFlybridgeModel = lazy(
	() => import('./components/UI/Models/FlybridgeModel')
)

const FlybridgeConfigurator = () => {
	const yachtModel = useFBX('../models/flybridge.fbx')

	return (
		<div style={{ height: '100vh', overflow: 'hidden !important' }}>
			<FlybridgeControlsWrapper model={yachtModel} />

			<CustomCanvas>
				{/* TODO: new loading indicator */}
				<Suspense fallback={<></>}>
					<LazyFlybridgeModel model={yachtModel} />
				</Suspense>
			</CustomCanvas>
		</div>
	)
}

export default FlybridgeConfigurator
