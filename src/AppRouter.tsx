import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import PageLoadingIndicator from './pages/Configurator/components/UI/PageLoadingIndicator'

const LazyConfigurator = lazy(() => import('./pages/Configurator'))

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route
				path="/configurator"
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
