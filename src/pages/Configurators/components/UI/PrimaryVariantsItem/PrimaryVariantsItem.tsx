import { FC, useId } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import { Variant } from '../../../../../types/Variant'
import styles from './PrimaryVariantsItem.module.scss'

interface PrimaryVariantsItemProps {
	variant: Variant
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	selectedVariant: Variant
}

const PrimaryVariantsItem: FC<PrimaryVariantsItemProps> = ({
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
			<input
				type="radio"
				name="primary-variant"
				id={id}
				value={JSON.stringify(variant)}
				onChange={handleChange}
				checked={selectedVariant.title === variant.title}
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
