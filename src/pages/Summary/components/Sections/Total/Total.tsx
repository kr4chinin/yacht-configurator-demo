import styles from './Total.module.scss'
import { observer } from 'mobx-react-lite'
import { flybridgeInteriorConfigStore } from '../../../../../stores/YachtInteriorConfigStore'
import { flybridgeExteriorConfigStore } from '../../../../../stores/YachtExteriorConfigStore'
import { flybridgeAccessoriesStore } from '../../../../../stores/YachtAccessoriesStore'
import { flybridgeEngineConfigStore } from '../../../../../stores/YachtEngineConfigStore'
import { currencyFormatter } from '../../../../../models/CurrencyFormatter'

const Total = () => {
	const modelPrice = 400000
	const interiorPrice = flybridgeInteriorConfigStore.getTotalPrice()
	const exteriorPrice = flybridgeExteriorConfigStore.getTotalPrice()
	const enginePrice = flybridgeEngineConfigStore.getTotalPrice()
	const accessoriesPrice = flybridgeAccessoriesStore.getTotalPrice()

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
			<button className={styles['contact-btn']}>Contact Dealer</button>
		</div>
	)
}

export default observer(Total)
