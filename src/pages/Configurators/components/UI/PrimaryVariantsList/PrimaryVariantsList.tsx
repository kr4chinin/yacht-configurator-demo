import { FC, useState } from 'react'
import { Variant } from '../../../../../types/Variant'
import PrimaryVariantsItem from '../PrimaryVariantsItem'
import styles from './PrimaryVariantsList.module.scss'

interface PrimaryVariantsListProps {
	variants: Variant[]
}

const PrimaryVariantsList: FC<PrimaryVariantsListProps> = ({ variants }) => {
	const [selectedVariant, setSelectedVariant] = useState<Variant>(
		variants.filter(variant => variant.isDefault)[0]
	)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSelectedVariant(JSON.parse(e.target.value))
	}

	return (
		<form className={styles.container}>
			{variants.map(variant => (
				<PrimaryVariantsItem
					variant={variant}
					key={variant.id}
					handleChange={handleChange}
                    selectedVariant={selectedVariant}
				/>
			))}
		</form>
	)
}

export default PrimaryVariantsList
