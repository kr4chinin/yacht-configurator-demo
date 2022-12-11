import { observer } from 'mobx-react-lite'
import { flybridgeAccessoriesStore } from '../../../../../stores/YachtAccessoriesStore'
import AccessoriesOptionsItem from '../../UI/AccessoriesItem/AccessoriesOptionsItem'
import styles from './AccessoriesOptions.module.scss'

const AccessoriesOptions = () => {
	const accessories = flybridgeAccessoriesStore.getSelectedAccessoryOptions()

	return (
		<div className={styles.container}>
			{accessories.map(accessory => (
				<AccessoriesOptionsItem img={accessory.image} alt={accessory.title} />
			))}
		</div>
	)
}

export default observer(AccessoriesOptions)
