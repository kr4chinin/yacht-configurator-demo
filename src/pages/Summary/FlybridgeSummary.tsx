// import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { flybridgeAccessoriesStore } from '../../stores/YachtAccessoriesStore'
import { flybridgeEngineConfigStore } from '../../stores/YachtEngineConfigStore'
import { flybridgeExteriorConfigStore } from '../../stores/YachtExteriorConfigStore'
import { flybridgeInteriorConfigStore } from '../../stores/YachtInteriorConfigStore'
import { ConfigOptionGroupType } from '../../types/ConfigOptionGroup'
import styles from './FlybridgeSummary.module.scss'

const FlybridgeSummary = () => {
	// console.log('exterior', toJS(flybridgeExteriorConfigStore.exterior))
	// console.log('interior', toJS(flybridgeInteriorConfigStore.interior))

	const siderailsAndPortlights =
		flybridgeExteriorConfigStore.getSelectedGroupOption(
			ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS
		).title

	const fender = flybridgeExteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.FENDER
	).title

	const sides = flybridgeExteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.SIDES
	).title

	const flybridgeVisor = flybridgeExteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.FLYBRIDGE_VISOR
	).title

	const windows = flybridgeExteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.WINDOWS
	).title

	const counter = flybridgeExteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.COUNTER
	).title

	const illuminators = flybridgeExteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.ILLUMINATORS
	).title

	const throttleAndSteetingWheel =
		flybridgeInteriorConfigStore.getSelectedGroupOption(
			ConfigOptionGroupType.THROTTLE_AND_STEERING_WHEEL
		).title

	const cockpitFloor = flybridgeInteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.COCKPIT_FLOOR
	).title

	const couch = flybridgeInteriorConfigStore.getSelectedGroupOption(
		ConfigOptionGroupType.COUCH
	).title

	const cockpitSteeringWheel =
		flybridgeInteriorConfigStore.getSelectedGroupOption(
			ConfigOptionGroupType.COCKPIT_STEERING_WHEEL
		).title

	const engine = flybridgeEngineConfigStore.getSelectedOption().title

	const accessories = flybridgeAccessoriesStore
		.getSelectedAccessoryOptions()
		.map(accessory => accessory.title)
		.join(', ')

	return (
		<ul style={{ color: 'lightgray' }} className={styles.container}>
			<h1>Exterior</h1>
			<li>
				<span>Siderails and Portlights - {siderailsAndPortlights}</span>
			</li>
			<li>
				<span>Fender - {fender}</span>
			</li>
			<li>
				<span>Sides - {sides}</span>
			</li>
			<li>
				<span>Flybridge Visor - {flybridgeVisor}</span>
			</li>
			<li>
				<span>Windows - {windows}</span>
			</li>
			<li>
				<span>Counter - {counter}</span>
			</li>
			<li>
				<span>Illuminators - {illuminators}</span>
			</li>

			<h1>Interior</h1>
			<li>
				<span>Throttle and Steering Wheel - {throttleAndSteetingWheel}</span>
			</li>
			<li>
				<span>Cockpit Floor - {cockpitFloor}</span>
			</li>
			<li>
				<span>Couch - {couch}</span>
			</li>
			<li>
				<span>Cockpit Steering Wheel - {cockpitSteeringWheel}</span>
			</li>

			<h1>Engine</h1>
			<li>
				<span>Engine - {engine}</span>
			</li>

      <h1>Accessories</h1>
      <li>
        <span>Accessories - {accessories}</span>
      </li>
		</ul>
	)
}

export default observer(FlybridgeSummary)
