import styles from './AboutUs.module.scss'
import Introduction from './components/Sections/Introduction'
import OurVision from './components/Sections/OurVision'
import OurMission from './components/Sections/OurMission'
import JoinUs from './components/Sections/JoinUs'
import Idea from './components/Sections/Idea'

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<Introduction />
			<OurVision />
			<OurMission />
      <JoinUs />
      <Idea />
		</div>
	)
}

export default AboutUs
