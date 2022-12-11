import styles from './EngineOption.module.scss'
import { observer } from 'mobx-react-lite'
import { flybridgeEngineConfigStore } from '../../../../../stores/YachtEngineConfigStore'
import OptionHeader from '../../UI/OptionHeader'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import { currencyFormatter } from '../../../../../models/CurrencyFormatter'

const EngineOption = () => {
	const engine = flybridgeEngineConfigStore.getSelectedOption()

	return (
		<div className={styles.container}>
			<div className={styles['info-section']}>
				<OptionHeader>{engine.title}</OptionHeader>
				<p className={styles.description}>{engine.description}</p>
				<p className={styles.price}>{currencyFormatter.format(engine.price)}</p>
			</div>

			<div className={styles['image-wrapper']}>
				<LoadableImage src={engine.image} alt={engine.title} />
			</div>
		</div>
	)
}

export default observer(EngineOption)
