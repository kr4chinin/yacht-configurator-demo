import styles from './InteriorOptions.module.scss'
import { observer } from 'mobx-react-lite'
import { flybridgeInteriorConfigStore } from '../../../../../stores/YachtInteriorConfigStore'
import OptionsItem from '../../UI/OptionsItem'

const InteriorOptions = () => {
	const { interior } = flybridgeInteriorConfigStore

	return (
		<div className={styles.container}>
			{interior.map(group => {
				const selectedOption =
					flybridgeInteriorConfigStore.getSelectedGroupOption(group.type)

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

export default observer(InteriorOptions)
