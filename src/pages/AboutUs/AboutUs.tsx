import Navbar from '../Common/Navbar'
import styles from './AboutUs.module.scss'
import Introduction from './components/Sections/Introduction'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Introduction />
    </div>
  )
}

export default AboutUs