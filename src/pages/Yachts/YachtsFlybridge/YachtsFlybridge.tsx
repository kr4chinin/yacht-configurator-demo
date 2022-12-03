import { AppRoutes } from '../../../utils/AppRoutes'
import Description from '../components/Common/Sections/Description'
import Interiors from '../components/Common/Sections/Interiors'
import Introduction from '../components/Common/Sections/Introduction'
import styles from './YachtsFlybridge.module.scss'

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
			<Description
				bgSrc="../../../../../images/YachtsPage/YachtsFlybridgePage/description-1.png"
				bgAlt="Description"
				smallSrc="../../../../../images/YachtsPage/YachtsFlybridgePage/description-2.png"
				smallAlt="Anfas 12.50 Flybridge"
				description="The aft cockpit provides a functional and well-planned space, and the sofa and table turn into a sundeck. The forward cockpit is a lounge area with a large sun mattress."
			/>
			<Interiors />
		</div>
	)
}

export default YachtsFlybridge
