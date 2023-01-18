import { lazy, Suspense } from 'react'
import OptionListHeader from '../../UI/OptionListHeader'
import SectionHeader from '../../UI/SectionHeader'
import Total from '../Total'
import styles from './Cart.module.scss'

const LazyModelOption = lazy(() => import('../ModelOption'))
const LazyExteriorOptions = lazy(
	() => import('../ExteriorOptions/ExteriorOptions')
)
const LazyInteriorOptions = lazy(() => import('../InteriorOptions'))
const LazyEngineOption = lazy(() => import('../EngineOption'))
const LazyAccessoriesOptions = lazy(() => import('../AccessoriesOptions'))

const Cart = () => {
	return (
		<div className={styles.container}>
			<SectionHeader>Your configuration</SectionHeader>
			<div className={styles.content}>
				<Suspense>
					<LazyModelOption
						annotation="Flybridge Yacht"
						description="This model is currently considered the smallest of the boats that KINGDOM MARINE produces. This model offers an innovative beach mode. The yacht has been designed to provide the highest level of maneuverability and stability on the waves."
						alt="Flybridge yacht"
						src="../../../../../../images/YachtsPage/YachtsFlybridgePage/introduction.png"
					/>
				</Suspense>

				<OptionListHeader>Exterior</OptionListHeader>
				<Suspense>
					<LazyExteriorOptions />
				</Suspense>

				<OptionListHeader>Interior</OptionListHeader>
				<Suspense>
					<LazyInteriorOptions />
				</Suspense>

				<OptionListHeader>Engine</OptionListHeader>
				<Suspense>
					<LazyEngineOption />
				</Suspense>

				<OptionListHeader>Optional accessories</OptionListHeader>
				<Suspense>
					<LazyAccessoriesOptions />
				</Suspense>

				<OptionListHeader>Your total</OptionListHeader>
				<Total />
			</div>
		</div>
	)
}

export default Cart
