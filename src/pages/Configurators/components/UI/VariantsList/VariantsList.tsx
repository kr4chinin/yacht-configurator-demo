import React, { FC, useState } from 'react'
import { Variant } from '../../../../../types/Variant'
import PrimaryVariantsItem from '../VariantsItems/PrimaryVariantsItem'
import SecondaryVariantsItem from '../VariantsItems/SecondaryVariantsItem'
import TertiaryVariantsItem from '../VariantsItems/TertiaryVariantsItem'
import styles from './VariantsList.module.scss'
import { observer } from 'mobx-react-lite'
import { ConfigOptionGroup } from '../../../../../types/ConfigOptionGroup'
import { ConfigOption } from '../../../../../types/ConfigOption'

interface VariantsListProps {
	variants: any[]
	type: 'primary' | 'secondary' | 'tertiary'
}

const VariantsList: FC<VariantsListProps> = ({ variants, type }) => {
	const [selectedVariant, setSelectedVariant] = useState<ConfigOption>(
		variants.filter(variant => variant.selected)[0]
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
								option={variant}
							/>
						)}
						{/* {type === 'secondary' && (
							<SecondaryVariantsItem
								variant={variant}
								selectedVariant={selectedVariant}
							/>
						)}
						{type === 'tertiary' && (
							<TertiaryVariantsItem
								variant={variant}
								selectedVariant={selectedVariant}
							/>
						)} */}
					</React.Fragment>
				)
			})}
		</form>
	)
}

export default observer(VariantsList)
