import { makeAutoObservable } from 'mobx'
import { ConfigOption } from '../types/ConfigOption'
import {
	ConfigOptionGroup,
	ConfigOptionGroupType
} from '../types/ConfigOptionGroup'

class YachtInteriorConfigStore {
	constructor() {
		makeAutoObservable(this)
	}

	interior: ConfigOptionGroup[] = []

	addConfigOptionGroup(group: ConfigOptionGroup) {
		this.interior.push(group)
	}

	getConfigOptionGroupByType(type: ConfigOptionGroupType): ConfigOptionGroup {
		return this.interior.find(group => group.type === type) as ConfigOptionGroup
	}

	selectGroupOptionById(groupType: ConfigOptionGroupType, optionId: string) {
		const group = this.getConfigOptionGroupByType(groupType)

		if (group) {
			group.options.forEach(option => {
				option.selected = option.id === optionId
			})
		}
	}

	getSelectedGroupOption(groupType: ConfigOptionGroupType): ConfigOption {
		const group = this.interior.find(group => group.type === groupType)

		if (group) {
			const option = group.options.find(option => option.selected)

			if (option) {
				return option
			}
		}

		throw new Error(`No selected option in group with this type: ${groupType}`)
	}
}

export const flybridgeInteriorConfigStore = new YachtInteriorConfigStore()
export const skydeckInteriorConfigStore = new YachtInteriorConfigStore()
