import PrimaryTitle from '../AboutUs/components/UI/PrimaryTitle'
import Navbar from '../Common/Navbar'
import styles from './News.module.scss'

const News = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<PrimaryTitle>News are coming soon...</PrimaryTitle>
		</div>
	)
}

export default News
