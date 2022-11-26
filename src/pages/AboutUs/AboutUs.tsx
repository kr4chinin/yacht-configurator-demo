import Navbar from '../Common/Navbar'
import styles from './AboutUs.module.scss'
import Introduction from './components/Sections/Introduction'
import OurVision from './components/Sections/OurVision'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Introduction />
      <OurVision />
    </div>
  )
}

export default AboutUs