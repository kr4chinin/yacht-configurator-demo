import Introduction from '../components/Common/Sections/Introduction'
import styles from './YachtsSkydeck.module.scss'
import Description from '../components/Common/Sections/Description'
import Interiors from '../components/Common/Sections/Interiors'

const YachtsSkydeck = () => {
	return (
		<div className={styles.container}>
			<Introduction
				src="../../../../../images/YachtsPage/YachtsSkydeckPage/introduction.png"
				alt="Introduction"
				annotation="16,20m/53' | 6,00м/20' | 1,40м/3'4’’"
				title="Skydeck"
			/>
			<Description
				bgSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/description-1.png"
				bgAlt="Description"
				smallSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/description-2.png"
				smallAlt="Anfas 16.20 Skydeck"
				description="The forward seating area with convertible seating can be quickly turned into real sun deck. There is a choice of optional padded awning for extra protection. With two different garage options and powerful hydraulic bath platform, you can choose between a variety of attractive water features."
			/>
			<Interiors />
		</div>
	)
}

export default YachtsSkydeck
