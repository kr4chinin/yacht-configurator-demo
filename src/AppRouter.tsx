import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProgressLoadingIndicator from './pages/Configurators/components/UI/Loaders/ProgressLoadingIndicator'
import Main from './pages/Main'
import { AppRoutes } from './utils/Routes'

const LazyFlybridgeConfigurator = lazy(
	() => import('./pages/Configurators/FlybridgeConfigurator')
)
const LazySkydeckConfigurator = lazy(
	() => import('./pages/Configurators/SkydeckConfigurator')
)

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoutes.MAIN} element={<Main />} />
			<Route
				path={AppRoutes.FLYBRIDGE_CONFIGURATOR}
				element={
					<Suspense fallback={<ProgressLoadingIndicator />}>
						<LazyFlybridgeConfigurator />
					</Suspense>
				}
			/>
			<Route
				path={AppRoutes.SKYDECK_CONFIGURATOR}
				element={
					<Suspense fallback={<ProgressLoadingIndicator />}>
						<LazySkydeckConfigurator />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default AppRouter
