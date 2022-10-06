import styles from './TertiaryVariantsItem.module.scss'
import { FC, useId } from 'react'
import { Variant } from '../../../../../../types/Variant'
import LoadableImage from '../../../../../../components/LoadableImage/LoadableImage'
import PrimaryRadioInput from '../../PrimaryRadioInput'

interface TertiaryVariantsItemProps {
	variant: Variant
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	selectedVariant: Variant
}

const TertiaryVariantsItem: FC<TertiaryVariantsItemProps> = ({
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
			<PrimaryRadioInput
				id={id}
				value={JSON.stringify(variant)}
				onChange={handleChange}
				checked={selectedVariant.title === variant.title}
			/>
			<label htmlFor={id}>
				<div className={styles['image-container']}>
					<LoadableImage src={variant.image} alt={variant.title} />
                    <div className={styles.title}>
                        {variant.title}
                    </div>
				</div>
			</label>
		</div>
	)
}

export default TertiaryVariantsItem
