import { ConfigOption } from './ConfigOption'

export const enum ConfigOptionGroupType {
	// Exterior
	SIDERAILS_AND_PORTLIGHTS = 'siderails_and_portlights',
	FENDER = 'fender',
	SIDES = 'sides',
	FLYBRIDGE_VISOR = 'flybridge_visor',
	WINDOWS = 'windows',
	COUNTER = 'counter',
	ILLUMINATORS = 'illuminators',

	// Interior
	THROTTLE_AND_STEERING_WHEEL = 'throttle_and_steering_wheel',
	COCKPIT_FLOOR = 'config_floor',
	COUCH = 'couch',
	COCKPIT_STEERING_WHEEL = 'cockpit_steering_wheel'
}

export interface ConfigOptionGroup {
	id: string
	type: ConfigOptionGroupType
	options: ConfigOption[]
}
