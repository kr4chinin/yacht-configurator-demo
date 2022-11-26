import ImageCarousel from './components/Sections/ImageCarousel'
import Information from './components/Sections/Information'
import Models from './components/Sections/Models'
import Questions from './components/Sections/Questions'
import styles from './Main.module.scss'

const Main = () => {
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
