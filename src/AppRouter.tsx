import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import PageLoadingIndicator from './pages/Configurator/components/UI/PageLoadingIndicator'
import { AppRoutes } from './utils/routes'

const LazyConfigurator = lazy(() => import('./pages/Configurator'))

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoutes.MAIN} element={<Main />} />
			<Route
				path={AppRoutes.CONFIGURATOR}
				element={
					<Suspense fallback={<PageLoadingIndicator />}>
						<LazyConfigurator />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default AppRouter
