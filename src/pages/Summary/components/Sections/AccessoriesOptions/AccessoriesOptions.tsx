import { observer } from 'mobx-react-lite'
import { flybridgeAccessoriesStore } from '../../../../../stores/YachtAccessoriesStore'
import AccessoriesOptionsItem from '../../UI/AccessoriesItem/AccessoriesOptionsItem'
import styles from './AccessoriesOptions.module.scss'

const AccessoriesOptions = () => {
	const accessories = flybridgeAccessoriesStore.getSelectedAccessoryOptions()

	return (
		<div className={styles.container}>
			{accessories.map(accessory => (
				<AccessoriesOptionsItem
					key={accessory.id}
					img={accessory.image}
					alt={accessory.title}
					name={accessory.title}
					description={accessory.description}
          price={accessory.price}
				/>
			))}
		</div>
	)
}

export default observer(AccessoriesOptions)
