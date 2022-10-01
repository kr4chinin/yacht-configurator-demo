import { FC, useId } from 'react'
import { Variant } from '../../../../../types/Variant'
import PrimaryRadioInput from '../PrimaryRadioInput'
import styles from './SecondaryVariantsItem.module.scss'
import {ReactComponent as Cog} from '../../../../../assets/icons/cog.svg'

interface SecondaryVariantsItemProps {
	variant: Variant
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	selectedVariant: Variant
}

const SecondaryVariantsItem: FC<SecondaryVariantsItemProps> = ({
	variant,
	handleChange: handleFormChange,
	selectedVariant
}) => {
	const id = useId()

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		handleFormChange(e)
		variant.onClick()
	}

	return (
		<div className={styles.container}>
			<div className={styles['top-section']}>
				<PrimaryRadioInput
					id={id}
					value={JSON.stringify(variant)}
					onChange={handleChange}
					checked={selectedVariant.title === variant.title}
				/>
				<label htmlFor={id}>
					<div className={styles['image-container']}>
						<img src={variant.image} alt={variant.title} />
					</div>
				</label>
			</div>
			<div className={styles['bottom-section']}>
                <div className={styles.title}>
                    <Cog />
                    <h3>{variant.title}</h3>
                </div>
				
				<p>{variant?.description}</p>
			</div>
		</div>
	)
}

export default SecondaryVariantsItem
