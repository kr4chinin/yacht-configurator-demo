import styles from './AccessoriesItem.module.scss'
import { Accessory } from '../AccessoriesList/AccessoriesList'
import { FC } from 'react'
import { ReactComponent as EuroSymbol } from '../../../../../assets/icons/euro-symbol.svg'
import { convertPrice } from '../../../../../helpers/convertPrice'

interface AccessoriesItemProps {
	accessory: Accessory
}

const AccessoriesItem: FC<AccessoriesItemProps> = ({ accessory }) => {
	return (
		<div className={styles.container}>
			<h5>{accessory.name}</h5>
			<div className={styles['image-container']}>
				<img src={accessory.image} alt={accessory.name} />
				<div className={styles.description}>{accessory.description}</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.price}>
					<EuroSymbol />
					<p>{convertPrice(accessory.price.toString())}</p>
				</div>
				<button className={styles['add-btn']}>Add</button>
			</div>
		</div>
	)
}

export default AccessoriesItem
