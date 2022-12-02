import Introduction from '../components/Common/Sections/Introduction'
import styles from './YachtsSkydeck.module.scss'

const YachtsSkydeck = () => {
	return (
		<div className={styles.container}>
			<Introduction
				src="../../../../../images/YachtsPage/YachtsSkydeckPage/introduction.png"
				alt="Introduction"
				annotation="16,20m/53' | 6,00м/20' | 1,40м/3'4’’"
				title="Skydeck"
			/>
		</div>
	)
}

export default YachtsSkydeck
