import styles from './Main.module.scss'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../utils/routes'

const Main = () => {
	const navigate = useNavigate()

	function handleNavigateToFlybridgeConfigurator() {
		navigate(AppRoutes.FLYBRIDGE_CONFIGURATOR)
	}

	function handleNavigateToSkydeckConfigurator() {
		navigate(AppRoutes.SKYDECK_CONFIGURATOR)
	}

	return (
		<div>
			<div className={styles.container}>
				<button onClick={handleNavigateToFlybridgeConfigurator}>
					Flybridge
				</button>
			</div>
			<div className={styles.container}>
				<button onClick={handleNavigateToSkydeckConfigurator}>Skydeck</button>
			</div>
		</div>
	)
}

export default Main
