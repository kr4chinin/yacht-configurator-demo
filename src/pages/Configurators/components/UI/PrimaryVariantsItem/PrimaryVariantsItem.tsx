import { FC, useId } from 'react'
import { Variant } from '../../../../../types/Variant'
import styles from './PrimaryVariantsItem.module.scss'

interface PrimaryVariantsItemProps {
	variant: Variant
}

const PrimaryVariantsItem: FC<PrimaryVariantsItemProps> = ({ variant }) => {
	const id = useId()

	function handleChange() {
		variant.onClick()
	}

	return (
		<div className={styles.container}>
			<input
				type="radio"
				name="primary-variant"
				id={id}
				onChange={handleChange}
				defaultChecked={variant.isDefault}
			/>
			<label htmlFor={id}>
				<div className={styles['image-container']}>
                    <img src={variant.image} alt={variant.title} />
                </div>
				{variant.title}
			</label>
		</div>
	)
}

export default PrimaryVariantsItem
