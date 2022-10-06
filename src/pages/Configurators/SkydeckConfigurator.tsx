import { useFBX } from '@react-three/drei'
import { lazy, Suspense } from 'react'
import CustomCanvas from './components/Sections/CustomCanvas/CustomCanvas'
import SkydeckControlsWrapper from './components/Sections/SkydeckControlsWrapper'
import ModelLoadingIndicator from './components/UI/Loaders/ModelLoadingIndicator'

const LazySkydeckModel = lazy(
	() => import('./components/UI/Models/SkydeckModel')
)

const SkydeckConfigurator = () => {
	const yachtModel = useFBX('../models/skydeck.fbx')

	return (
		<>
			<SkydeckControlsWrapper model={yachtModel} />

			<CustomCanvas>
				<Suspense fallback={<ModelLoadingIndicator />}>
					<LazySkydeckModel model={yachtModel} />
				</Suspense>
			</CustomCanvas>
		</>
	)
}

export default SkydeckConfigurator
