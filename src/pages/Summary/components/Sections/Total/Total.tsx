import { observer } from 'mobx-react-lite'
import { useIsLessThanWindowWidth } from '../../../../../hooks/useIsMobile'
import { currencyFormatter } from '../../../../../models/CurrencyFormatter'
import { flybridgeAccessoriesStore } from '../../../../../stores/YachtAccessoriesStore'
import { flybridgeEngineConfigStore } from '../../../../../stores/YachtEngineConfigStore'
import { flybridgeExteriorConfigStore } from '../../../../../stores/YachtExteriorConfigStore'
import { flybridgeInteriorConfigStore } from '../../../../../stores/YachtInteriorConfigStore'
import styles from './Total.module.scss'

const Total = () => {
	const modelPrice = 400000
	const interiorPrice = flybridgeInteriorConfigStore.getTotalPrice()
	const exteriorPrice = flybridgeExteriorConfigStore.getTotalPrice()
	const enginePrice = flybridgeEngineConfigStore.getTotalPrice()
	const accessoriesPrice = flybridgeAccessoriesStore.getTotalPrice()

	const isMobile = useIsLessThanWindowWidth(1200)

	const handleScrollToTop = () => {
		if (!isMobile) {
			window.scrollTo({
				top: 200,
				behavior: 'smooth'
			})
		}
	}

	return (
		<div className={styles.container}>
			<p className={styles.title}>
				Total price:
				<span>
					{currencyFormatter.format(
						modelPrice +
							interiorPrice +
							exteriorPrice +
							enginePrice +
							accessoriesPrice
					)}
				</span>
			</p>
			<button className={styles['contact-btn']} onClick={handleScrollToTop}>
				Contact Dealer
			</button>
		</div>
	)
}

export default observer(Total)
