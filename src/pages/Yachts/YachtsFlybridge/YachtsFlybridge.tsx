import { AppRoutes } from '../../../utils/AppRoutes'
import Description from '../components/Common/Sections/Description'
import Engines from '../components/Common/Sections/Engines'
import Exteriors from '../components/Common/Sections/Exteriors'
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
			<Interiors
				bgSrc="../../../../../images/YachtsPage/YachtsFlybridgePage/interior-1.png"
				landscapeSrc="../../../../../images/YachtsPage/YachtsFlybridgePage/interior-2.png"
				bgAlt="Interior"
				landscapeAlt="Interior variation"
				description="The interior is presented in several possible modern options, with additional options available on request, as well as in our web configurator. Below deck, guests will find two spacious and full-sized staterooms. The master stateroom is located aft. Two separate rooms provide additional comfort for guests."
			/>
			<Exteriors
				bgSrc="../../../../../images/YachtsPage/YachtsFlybridgePage/exterior-1.png"
				bgAlt="Exterior"
				primarySrc="../../../../../images/YachtsPage/YachtsFlybridgePage/exterior-2.png"
				primaryAlt="Exterior variant"
				secondarySrc="../../../../../images/YachtsPage/YachtsFlybridgePage/exterior-3.png"
				secondaryAlt="Exterior another variant"
				description="The aft cockpit provides a functional and well-planned space, and the sofa and table turn into a sundeck. The forward cockpit is a lounge area with a large sun mattress."
			/>
			<Engines
				bgSrc="../../../../../images/YachtsPage/YachtsFlybridgePage/engine.png"
				bgAlt="Engines"
				description="The standard version of the yacht is equipped with two Volvo Penta D3-200l engines or the more powerful Volvo Penta D6-300."
				engineInfo={{
					title: 'column 2 x',
					builder: 'Volvo',
					model: 'D3-200l',
					amount: 2
				}}
			/>
		</div>
	)
}

export default YachtsFlybridge
