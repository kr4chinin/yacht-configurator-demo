import React, { FC, useState } from 'react'
import { Variant } from '../../../../../types/Variant'
import PrimaryVariantsItem from '../PrimaryVariantsItem'
import SecondaryVariantsItem from '../SecondaryVariantsItem'
import TertiaryVariantsItem from '../TertiaryVariantsItem'
import styles from './VariantsList.module.scss'

interface VariantsListProps {
	variants: Variant[]
	type: 'primary' | 'secondary' | 'tertiary'
}

const VariantsList: FC<VariantsListProps> = ({ variants, type }) => {
	const [selectedVariant, setSelectedVariant] = useState<Variant>(
		variants.filter(variant => variant.isDefault)[0]
	)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSelectedVariant(JSON.parse(e.target.value))
	}

	return (
		<form className={styles.container}>
			{variants.map(variant => {
				return (
					<React.Fragment key={variant.id}>
						{type === 'primary' && (
							<PrimaryVariantsItem
								variant={variant}
								handleChange={handleChange}
								selectedVariant={selectedVariant}
							/>
						)}
						{type === 'secondary' && (
							<SecondaryVariantsItem
								variant={variant}
								handleChange={handleChange}
								selectedVariant={selectedVariant}
							/>
						)}
						{type === 'tertiary' && (
							<TertiaryVariantsItem
								variant={variant}
								handleChange={handleChange}
								selectedVariant={selectedVariant}
							/>
						)}
					</React.Fragment>
				)
			})}
		</form>
	)
}

export default VariantsList
