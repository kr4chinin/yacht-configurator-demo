import styles from './Main.module.scss'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Sections/Navbar'
import ImageCarousel from './components/Sections/ImageCarousel'
import Models from './components/Sections/Models'
import Information from './components/Sections/Information'
import Questions from './components/Sections/Questions'

const Main = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<ImageCarousel />
			<Models />
			<Information />
      <Questions />
		</div>
	)
}

export default Main
