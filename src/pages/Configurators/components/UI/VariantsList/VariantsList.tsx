import { FC, useState } from 'react'
import { Variant } from '../../../../../types/Variant'
import PrimaryVariantsItem from '../PrimaryVariantsItem'
import SecondaryVariantsItem from '../SecondaryVariantsItem'
import styles from './VariantsList.module.scss'

interface VariantsListProps {
	variants: Variant[]
	isPrimary?: boolean
}

const VariantsList: FC<VariantsListProps> = ({
	variants,
	isPrimary = true
}) => {
	const [selectedVariant, setSelectedVariant] = useState<Variant>(
		variants.filter(variant => variant.isDefault)[0]
	)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSelectedVariant(JSON.parse(e.target.value))
	}

	return (
		<form className={styles.container}>
			{variants.map(variant => {
				return isPrimary ? (
					<PrimaryVariantsItem
						variant={variant}
						key={variant.id}
						handleChange={handleChange}
						selectedVariant={selectedVariant}
					/>
				) : (
					<SecondaryVariantsItem 
                        variant={variant}
                        key={variant.id}
                        handleChange={handleChange}
                        selectedVariant={selectedVariant}
                    />
				)
			})}
		</form>
	)
}

export default VariantsList
