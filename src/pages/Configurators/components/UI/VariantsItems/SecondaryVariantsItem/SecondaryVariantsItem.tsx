import { observer } from 'mobx-react-lite'
import { FC, useId } from 'react'
import { ReactComponent as Cog } from '../../../../../../assets/icons/cog.svg'
import { ConfigEngineOption } from '../../../../../../types/ConfigOption'
import PrimaryRadioInput from '../../PrimaryRadioInput'
import styles from './SecondaryVariantsItem.module.scss'

interface SecondaryVariantsItemProps {
	option: ConfigEngineOption
}

const SecondaryVariantsItem: FC<SecondaryVariantsItemProps> = ({
	option,
}) => {
	const id = useId()

	function handleChange() {
    option.onSelect(option.id)
	}

	return (
		<div className={styles.container}>
			<div className={styles['top-section']}>
				<PrimaryRadioInput
					id={id}
					value={option.id}
					onChange={handleChange}
					checked={option.selected}
				/>
				<label htmlFor={id}>
					<div className={styles['image-container']}>
						<img src={option.image} alt={option.title} />
					</div>
				</label>
			</div>
			<div className={styles['bottom-section']}>
				<div className={styles.title}>
					<Cog />
					<h3>{option.title}</h3>
				</div>

				<p>{option.description}</p>
			</div>
		</div>
	)
}

export default observer(SecondaryVariantsItem)
