import { observer } from 'mobx-react-lite'
import { FC, useId } from 'react'
import LoadableImage from '../../../../../../components/LoadableImage/LoadableImage'
import { ConfigOption } from '../../../../../../types/ConfigOption'
import PrimaryRadioInput from '../../PrimaryRadioInput'
import styles from './ExteriorOptionsItem.module.scss'

interface ExteriorOptionsItemProps {
	option: ConfigOption
}

const ExteriorOptionsItem: FC<ExteriorOptionsItemProps> = ({ option }) => {
	const id = useId()

	function handleChange() {
		option.onSelect(option.configOptionGroupType, option.id)
	}

	return (
		<div className={styles.container}>
			<PrimaryRadioInput
				id={id}
				value={option.id}
				onChange={handleChange}
				checked={option.selected}
			/>
			<label htmlFor={id}>
				<div className={styles['image-container']}>
					<LoadableImage src={option.image} alt={option.title} />
				</div>
				{option.title}
			</label>
		</div>
	)
}

export default observer(ExteriorOptionsItem)
