import styles from './AccessoriesItem.module.scss'
import { Accessory } from '../AccessoriesList/AccessoriesList'
import { FC } from 'react'

interface AccessoriesItemProps {
	accessory: Accessory
}

const AccessoriesItem: FC<AccessoriesItemProps> = ({ accessory }) => {
	return (
		<div className={styles.container}>
			<h5>{accessory.name}</h5>
			<div className={styles['image-container']}>
				<img src={accessory.image} alt={accessory.name} />
			</div>
			<div className={styles.content}>
				<p>{accessory.price}</p>
				<p>{accessory.description}</p>
			</div>
			<button className={styles['add-btn']}>Add</button>
		</div>
	)
}

export default AccessoriesItem
