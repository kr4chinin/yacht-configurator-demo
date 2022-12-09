import { makeAutoObservable } from 'mobx'

export class InputModel {
	value: string = ''
	isValid: boolean = true
	private _required: boolean = false

	public static create(initValue = '') {
		return new this(initValue)
	}

	constructor(initValue = '') {
		this.value = initValue

		makeAutoObservable(this)
	}

	setValue = (value: string) => {
		this.value = value
		this.validate()
	}

	validate() {
		if (this._required) {
			if (this.value === '') {
				this.isValid = false
				return false
			}

			this.isValid = true
			return true
		}

		return true
	}

	public required() {
		this._required = true

		return this
	}
}
