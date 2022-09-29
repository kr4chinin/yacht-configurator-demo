import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import PageLoadingIndicator from './pages/Configurators/components/UI/PageLoadingIndicator'
import { AppRoutes } from './utils/routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const LazyFlybridgeConfigurator = lazy(
	() => import('./pages/Configurators/FlybridgeConfigurator')
)
const LazySkydeckConfigurator = lazy(
	() => import('./pages/Configurators/SkydeckConfigurator')
)

const LazyLoad = () => {
	useEffect(() => {
        NProgress.configure({ showSpinner: false})
		NProgress.set(0.35)

        return () => {
            NProgress.done()
        }
	})

	return <PageLoadingIndicator />
}

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoutes.MAIN} element={<Main />} />
			<Route
				path={AppRoutes.FLYBRIDGE_CONFIGURATOR}
				element={
					<Suspense fallback={<LazyLoad />}>
						<LazyFlybridgeConfigurator />
					</Suspense>
				}
			/>
			<Route
				path={AppRoutes.SKYDECK_CONFIGURATOR}
				element={
					<Suspense fallback={<LazyLoad />}>
						<LazySkydeckConfigurator />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default AppRouter
