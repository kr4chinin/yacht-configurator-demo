import { ConfigOptionGroupType } from './ConfigOptionGroup'

interface BaseOption {
	id: string
	title: string
	price: number
	image: string
	selected: boolean
}

export interface ConfigOption extends BaseOption {
	onSelect: (
		configOptionGroupType: ConfigOptionGroupType,
		optionId: string
	) => void
	configOptionGroupType: ConfigOptionGroupType
}

export interface ConfigEngineOption extends BaseOption {
	onSelect: (optionId: string) => void
	description: string
}
