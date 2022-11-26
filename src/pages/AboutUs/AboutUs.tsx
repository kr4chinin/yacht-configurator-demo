import styles from './AboutUs.module.scss'
import Introduction from './components/Sections/Introduction'
import OurVision from './components/Sections/OurVision'
import OurMission from './components/Sections/OurMission'

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<Introduction />
			<OurVision />
			<OurMission />
		</div>
	)
}

export default AboutUs
