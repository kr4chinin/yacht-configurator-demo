import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import { currencyFormatter } from '../../../../../models/CurrencyFormatter'
import { flybridgeAccessoriesStore } from '../../../../../stores/YachtAccessoriesStore'
import { ConfigAccessoryOption } from '../../../../../types/ConfigOption'
import styles from './AccessoriesItem.module.scss'

interface AccessoriesItemProps {
	accessory: ConfigAccessoryOption
}

const AccessoriesItem: FC<AccessoriesItemProps> = ({ accessory }) => {
	const handleAdd = () => {
		flybridgeAccessoriesStore.selectAccessoryOptionById(accessory.id)
	}

	return (
		<div className={styles.container}>
			<h5>{accessory.title}</h5>
			<div className={styles['image-container']}>
				<LoadableImage src={accessory.image} alt={accessory.title} />
				<div className={styles.description}>{accessory.description}</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.price}>
					<p>{currencyFormatter.format(accessory.price)}</p>
				</div>
				<button
					className={cn(styles['add-btn'], {
						[styles.active]: accessory.selected
					})}
					onClick={handleAdd}
				>
					{accessory.selected ? 'Remove' : 'Add'}
				</button>
			</div>
		</div>
	)
}

export default observer(AccessoriesItem)
