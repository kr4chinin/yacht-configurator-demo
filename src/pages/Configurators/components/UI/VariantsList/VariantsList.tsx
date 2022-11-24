import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import {
	ConfigEngineOption,
	ConfigOption
} from '../../../../../types/ConfigOption'
import PrimaryVariantsItem from '../VariantsItems/PrimaryVariantsItem'
import SecondaryVariantsItem from '../VariantsItems/SecondaryVariantsItem'
import TertiaryVariantsItem from '../VariantsItems/TertiaryVariantsItem'
import styles from './VariantsList.module.scss'

interface VariantsListProps {
	options: ConfigOption[] | ConfigEngineOption[]
	type: 'exterior' | 'engine' | 'interior'
}

const VariantsList: FC<VariantsListProps> = ({ options, type }) => {
	return (
		<form className={styles.container}>
			{options.map(option => {
				return (
					<React.Fragment key={option.id}>
						{type === 'exterior' && (
							<PrimaryVariantsItem option={option as unknown as ConfigOption} />
						)}
						{type === 'engine' && (
							<SecondaryVariantsItem
								option={option as unknown as ConfigEngineOption}
							/>
						)}

						{type === 'interior' && (
							<TertiaryVariantsItem
								option={option as unknown as ConfigOption}
							/>
						)}
					</React.Fragment>
				)
			})}
		</form>
	)
}

export default observer(VariantsList)
