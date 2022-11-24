import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { ConfigOption } from '../../../../../types/ConfigOption'
import { ConfigOptionGroup } from '../../../../../types/ConfigOptionGroup'
import PrimaryVariantsItem from '../VariantsItems/PrimaryVariantsItem'
import TertiaryVariantsItem from '../VariantsItems/TertiaryVariantsItem'
import styles from './VariantsList.module.scss'

interface VariantsListProps {
	options: ConfigOption[] 
	type: 'primary' | 'secondary' | 'tertiary'
}

const VariantsList: FC<VariantsListProps> = ({ options, type }) => {
	return (
		<form className={styles.container}>
			{options.map(option => {
				return (
					<React.Fragment key={option.id}>
						{type === 'primary' && <PrimaryVariantsItem option={option} />}
						{/* {type === 'secondary' && (
							<SecondaryVariantsItem
								variant={variant}
								selectedVariant={selectedVariant}
							/>
						)} */}

						{type === 'tertiary' && <TertiaryVariantsItem option={option} />}
					</React.Fragment>
				)
			})}
		</form>
	)
}

export default observer(VariantsList)
