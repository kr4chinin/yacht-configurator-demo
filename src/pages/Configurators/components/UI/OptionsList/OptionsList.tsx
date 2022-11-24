import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import {
	ConfigEngineOption,
	ConfigOption
} from '../../../../../types/ConfigOption'
import PrimaryVariantsItem from '../OptionItems/ExteriorOptionsItem'
import SecondaryVariantsItem from '../OptionItems/EnginesOptionsItem'
import TertiaryVariantsItem from '../OptionItems/InteriorOptionsItem'
import styles from './OptionsList.module.scss'

interface OptionsListProps {
	options: ConfigOption[] | ConfigEngineOption[]
	type: 'exterior' | 'engine' | 'interior'
}

const OptionsList: FC<OptionsListProps> = ({ options, type }) => {
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

export default observer(OptionsList)
