import { makeAutoObservable } from 'mobx'
import { ConfigAccessoryOption } from '../types/ConfigOption'

class YachtAccessoriesStore {
	constructor() {
		makeAutoObservable(this)
	}

	accessories: ConfigAccessoryOption[] = []

	addAccessoryOption(option: ConfigAccessoryOption) {
		this.accessories.push(option)
	}

	selectAccessoryOptionById(optionId: string) {
		const option = this.accessories.find(option => option.id === optionId)

		if (option) {
			option.selected = !option.selected
		}
	}

	getSelectedAccessoryOptions(): ConfigAccessoryOption[] {
		return this.accessories.filter(option => option.selected)
	}

	getTotalPrice(): number {
		return this.accessories.reduce((total, option) => {
			if (option.selected) {
				return total + option.price
			}

			return total
		}, 0)
	}
}

export const flybridgeAccessoriesStore = new YachtAccessoriesStore()
export const skydeckAccessoriesStore = new YachtAccessoriesStore()
