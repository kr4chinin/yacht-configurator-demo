import { makeAutoObservable } from 'mobx'
import { ConfigEngineOption, ConfigOption } from '../types/ConfigOption'

class YachtEngineConfigStore {
	constructor() {
		makeAutoObservable(this)
	}

	engines: ConfigEngineOption[] = []

	addConfigOption(option: ConfigEngineOption) {
		this.engines.push(option)
	}

	selectOptionById(optionId: string) {
		this.engines.forEach(option => {
			option.selected = option.id === optionId
		})
	}

	getSelectedOption(): ConfigEngineOption {
		const selectedOption = this.engines.find(option => option.selected)

		if (selectedOption) {
			return selectedOption
		}

		throw new Error('Selected option was not found')
	}
}

export const flybridgeEngineConfigStore = new YachtEngineConfigStore()
export const skydeckEngineConfigStore = new YachtEngineConfigStore()
