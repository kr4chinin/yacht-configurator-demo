import { ConfigOption } from './ConfigOption'

export const enum ConfigOptionGroupType {
  SIDERAILS_AND_PORTLIGHTS = 'siderails_and_portlights',
  FENDER = 'fender',
  SIDES = 'sides',
  FLYBRIDGE_VISOR = 'flybridge_visor',
  WINDOWS = 'windows',
}

export interface ConfigOptionGroup {
	id: string
	type: ConfigOptionGroupType
	options: ConfigOption[]
}
