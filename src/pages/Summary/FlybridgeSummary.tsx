import { observer } from 'mobx-react-lite'
import { flybridgeExteriorConfigStore } from '../../stores/FlybridgeExteriorConfigStore'
import { ConfigOptionGroupType } from '../../types/ConfigOptionGroup'
import FlybridgeConfigurator from '../Configurators/FlybridgeConfigurator'
import styles from './FlybridgeSummary.module.scss'

const FlybridgeSummary = () => {
	return (
		<h1>
			{
				flybridgeExteriorConfigStore.getSelectedGroupOption(
					ConfigOptionGroupType.SIDERAILS_AND_PORTLIGHTS
				).title
			}
		</h1>
	)
}

export default observer(FlybridgeSummary)
