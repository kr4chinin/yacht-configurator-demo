import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import PageLoadingIndicator from './pages/Configurators/components/UI/PageLoadingIndicator'
import { AppRoutes } from './utils/routes'

const LazyFlybridgeConfigurator = lazy(() => import('./pages/Configurators/FlybridgeConfigurator'))
const LazySkydeckConfigurator = lazy(() => import('./pages/Configurators/SkydeckConfigurator'))

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoutes.MAIN} element={<Main />} />
			<Route
				path={AppRoutes.FLYBRIDGE_CONFIGURATOR}
				element={
					<Suspense fallback={<PageLoadingIndicator />}>
						<LazyFlybridgeConfigurator />
					</Suspense>
				}
			/>
			<Route
				path={AppRoutes.SKYDECK_CONFIGURATOR}
				element={
					<Suspense fallback={<PageLoadingIndicator />}>
						<LazySkydeckConfigurator />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default AppRouter
