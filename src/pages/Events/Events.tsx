import PrimaryTitle from '../AboutUs/components/UI/PrimaryTitle'
import Navbar from '../Common/Navbar'
import styles from './Events.module.scss'

const Events = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<PrimaryTitle>Events are coming soon...</PrimaryTitle>
		</div>
	)
}

export default Events
