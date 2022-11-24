import { FC, useId } from 'react'
import LoadableImage from '../../../../../../components/LoadableImage/LoadableImage'
import { Variant } from '../../../../../../types/Variant'
import PrimaryRadioInput from '../../PrimaryRadioInput'
import styles from './PrimaryVariantsItem.module.scss'
import { observer } from 'mobx-react-lite'
import { ConfigOption } from '../../../../../../types/ConfigOption'
import { ConfigOptionGroupType } from '../../../../../../types/ConfigOptionGroup'

interface PrimaryVariantsItemProps {
	option: ConfigOption
}

const PrimaryVariantsItem: FC<PrimaryVariantsItemProps> = ({ option }) => {
	const id = useId()

	if (!option) {
		return null
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(option.id)
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

export default observer(PrimaryVariantsItem)
