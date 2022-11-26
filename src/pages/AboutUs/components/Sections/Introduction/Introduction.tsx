import styles from './Introduction.module.scss'
import { ReactComponent as ArrowInCircleIcon } from '../../../../../assets/icons/arrow-in-circle.svg'
import Navbar from '../../../../Common/Navbar'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'

const Introduction = () => {
	return (
		<div className={styles.container}>
			<div className={styles['image-wrapper']}>
				<LoadableImage
					src="../../../../../../images/AboutUsPage/background-1.png"
					alt="Introduction"
				/>
			</div>

			<Navbar />
			<h1 className={styles.title}>
				About <br />
				<span>Kingdom Marine</span>
			</h1>

			<div className={styles.location}>
				<span>Home</span>
				<ArrowInCircleIcon />
				<span className={styles.active}>About Us</span>
			</div>
		</div>
	)
}

export default Introduction
