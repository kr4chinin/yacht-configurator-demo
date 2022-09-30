import { FC, useId } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
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
			/>
			<label htmlFor={id}>
				<div className={styles['image-container']}>
                    <LoadableImage src={variant.image} alt={variant.title} />
                </div>
				{variant.title}
			</label>
		</div>
	)
}

export default PrimaryVariantsItem
