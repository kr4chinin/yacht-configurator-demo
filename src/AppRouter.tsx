import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProgressLoadingIndicator from './pages/Configurators/components/UI/Loaders/ProgressLoadingIndicator'
import Main from './pages/Main'
import { AppRoutes } from './utils/AppRoutes'
import FlybridgeSummary from './pages/Summary/FlybridgeSummary'
import AboutUs from './pages/AboutUs'
import YachtsFlybridge from './pages/Yachts/YachtsFlybridge'
import YachtsSkydeck from './pages/Yachts/YachtsSkydeck'

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
			<Route path={AppRoutes.ABOUT_US} element={<AboutUs />} />
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
			<Route
				path={AppRoutes.FLYBRIDGE_SUMMARY}
				element={<FlybridgeSummary />}
			/>
      <Route
        path={AppRoutes.YACHTS_FLYBRIDGE}
        element={<YachtsFlybridge />}
      />
      <Route
        path={AppRoutes.YACHTS_SKYDECK}
        element={<YachtsSkydeck />}
      />
		</Routes>
	)
}

export default AppRouter
