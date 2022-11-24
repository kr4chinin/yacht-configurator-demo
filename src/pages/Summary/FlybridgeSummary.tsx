import { observer } from 'mobx-react-lite'
import { flybridgeExteriorConfigStore } from '../../stores/FlybridgeExteriorConfigStore'
import { ConfigOptionGroupType } from '../../types/ConfigOptionGroup'
import FlybridgeConfigurator from '../Configurators/FlybridgeConfigurator'
import styles from './FlybridgeSummary.module.scss'

const FlybridgeSummary = () => {
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

	return (
		<ul style={{ color: 'lightgray' }}>
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
		</ul>
	)
}

export default observer(FlybridgeSummary)
