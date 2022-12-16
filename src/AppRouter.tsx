import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ProgressLoadingIndicator from './pages/Configurators/components/UI/Loaders/ProgressLoadingIndicator'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Main from './pages/Main'
import News from './pages/News'
import FlybridgeSummary from './pages/Summary/FlybridgeSummary'
import YachtsFlybridge from './pages/Yachts/YachtsFlybridge'
import YachtsSkydeck from './pages/Yachts/YachtsSkydeck'
import { AppRoutes } from './utils/AppRoutes'

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
			<Route path={AppRoutes.YACHTS_FLYBRIDGE} element={<YachtsFlybridge />} />
			<Route path={AppRoutes.YACHTS_SKYDECK} element={<YachtsSkydeck />} />
			<Route path={AppRoutes.EVENTS} element={<Events />} />
			<Route path={AppRoutes.CONTACT} element={<Contact />} />
			<Route path={AppRoutes.NEWS} element={<News />} />
		</Routes>
	)
}

export default AppRouter
