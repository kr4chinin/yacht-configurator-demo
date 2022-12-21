import { observer } from 'mobx-react-lite'
import { lazy, Suspense } from 'react'
import Navbar from '../Common/Navbar'
import ProgressLoadingIndicator from '../Configurators/components/UI/Loaders/ProgressLoadingIndicator'
import Form from './components/Sections/Form'
import styles from './FlybridgeSummary.module.scss'

const LazyCart = lazy(() => import('./components/Sections/Cart'))

const FlybridgeSummary = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<Form />

			<Suspense fallback={<ProgressLoadingIndicator />}>
				<LazyCart />
			</Suspense>
		</div>
	)
}

export default observer(FlybridgeSummary)
