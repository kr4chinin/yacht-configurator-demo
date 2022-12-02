import Introduction from '../components/Common/Sections/Introduction'
import Navbar from '../../Common/Navbar'
import styles from './YachtsFlybridge.module.scss'
import { AppRoutes } from '../../../utils/AppRoutes'

const YachtsFlybridge = () => {
	return (
		<div className={styles.container}>
			<Introduction
				src="../../../../../images/YachtsPage/YachtsFlybridgePage/introduction.png"
				alt="Introduction"
				annotation="12.50m/41' | 3,95м/13' | 0,80м/3'"
				title="Flybridge"
				configuratorLink={AppRoutes.FLYBRIDGE_CONFIGURATOR}
			/>
		</div>
	)
}

export default YachtsFlybridge
