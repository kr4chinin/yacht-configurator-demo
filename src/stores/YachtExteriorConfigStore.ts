import { makeAutoObservable } from 'mobx'
import { ConfigOption } from '../types/ConfigOption'
import {
	ConfigOptionGroup,
	ConfigOptionGroupType
} from '../types/ConfigOptionGroup'

class YachtExteriorConfigStore {
	constructor() {
		makeAutoObservable(this)
	}

	exterior: ConfigOptionGroup[] = []

	addConfigOptionGroup(group: ConfigOptionGroup) {
		this.exterior.push(group)
	}

	getConfigOptionGroupByType(type: ConfigOptionGroupType): ConfigOptionGroup {
		return this.exterior.find(group => group.type === type) as ConfigOptionGroup
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
		const group = this.exterior.find(group => group.type === groupType)

		if (group) {
			const option = group.options.find(option => option.selected)

			if (option) {
				return option
			}
		}

		throw new Error(`No selected option in group with this type: ${groupType}`)
	}

	getTotalPrice(): number {
		return this.exterior.reduce((total, group) => {
			const selectedOption = group.options.find(option => option.selected)

			if (selectedOption) {
				return total + selectedOption.price
			}

			return total
		}, 0)
	}
}

export const flybridgeExteriorConfigStore = new YachtExteriorConfigStore()
export const skydeckExteriorConfigStore = new YachtExteriorConfigStore()
