import { ConfigOption } from './ConfigOption'

export const enum ConfigOptionGroupType {
  SIDERAILS_AND_PORTLIGHTS = 'siderails_and_portlights',
  FENDER = 'fender',
  SIDES = 'sides',
}

export interface ConfigOptionGroup {
	id: string
	type: ConfigOptionGroupType
	options: ConfigOption[]
}
