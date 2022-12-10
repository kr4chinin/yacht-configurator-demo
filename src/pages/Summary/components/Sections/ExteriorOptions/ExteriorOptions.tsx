import { observer } from 'mobx-react-lite'
import { flybridgeExteriorConfigStore } from '../../../../../stores/YachtExteriorConfigStore'
import OptionsItem from '../../UI/OptionsItem'
import styles from './ExteriorOptions.module.scss'

const ExteriorOptions = () => {
	const { exterior } = flybridgeExteriorConfigStore

	return (
		<div className={styles.container}>
			{exterior.map(group => {
				const selectedOption =
					flybridgeExteriorConfigStore.getSelectedGroupOption(group.type)

				return (
					<OptionsItem
						key={group.id}
						title={group.name}
						name={selectedOption.title}
						price={selectedOption.price}
						img={selectedOption.image}
						alt={selectedOption.title}
					/>
				)
			})}
		</div>
	)
}

export default observer(ExteriorOptions)
