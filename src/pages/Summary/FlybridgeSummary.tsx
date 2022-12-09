// import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import Navbar from '../Common/Navbar'
import Cart from './components/Sections/Cart'
import Form from './components/Sections/Form'
// import { Link } from 'react-router-dom'
// import { flybridgeAccessoriesStore } from '../../stores/YachtAccessoriesStore'
// import { flybridgeEngineConfigStore } from '../../stores/YachtEngineConfigStore'
// import { flybridgeExteriorConfigStore } from '../../stores/YachtExteriorConfigStore'
// import { flybridgeInteriorConfigStore } from '../../stores/YachtInteriorConfigStore'
// import { ConfigOptionGroupType } from '../../types/ConfigOptionGroup'
// import { AppRoutes } from '../../utils/AppRoutes'
import styles from './FlybridgeSummary.module.scss'

const FlybridgeSummary = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<Form />
			<Cart />
		</div>
	)
}

export default observer(FlybridgeSummary)

// console.log('exterior', toJS(flybridgeExteriorConfigStore.exterior))
// console.log('interior', toJS(flybridgeInteriorConfigStore.interior))

// const siderailsAndPortlights =
// 	flybridgeExteriorConfigStore.getSelectedGroupOption(
// 		ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS
// 	).title

// const fender = flybridgeExteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.FENDER
// ).title

// const sides = flybridgeExteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.SIDES
// ).title

// const flybridgeVisor = flybridgeExteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.FLYBRIDGE_VISOR
// ).title

// const windows = flybridgeExteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.WINDOWS
// ).title

// const counter = flybridgeExteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.COUNTER
// ).title

// const illuminators = flybridgeExteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.ILLUMINATORS
// ).title

// const throttleAndSteetingWheel =
// 	flybridgeInteriorConfigStore.getSelectedGroupOption(
// 		ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL
// 	).title

// const cockpitFloor = flybridgeInteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.COCKPIT_FLOOR
// ).title

// const couch = flybridgeInteriorConfigStore.getSelectedGroupOption(
// 	ConfigOptionGroupType.COUCH
// ).title

// const cockpitSteeringWheel =
// 	flybridgeInteriorConfigStore.getSelectedGroupOption(
// 		ConfigOptionGroupType.COCKPIT_STEERING_WHEEL
// 	).title

// const engine = flybridgeEngineConfigStore.getSelectedOption().title

// const accessories = flybridgeAccessoriesStore
// 	.getSelectedAccessoryOptions()
// 	.map(accessory => accessory.title)
// 	.join(', ')
