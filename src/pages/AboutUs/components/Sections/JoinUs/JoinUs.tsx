import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import DelimiterIcon from '../../UI/DelimiterIcon'
import styles from './JoinUs.module.scss'

const JoinUs = () => {
	return (
		<div className={styles.container}>
			<h4 className={styles.join}>JOIN US</h4>

			<h2 className={styles.title}>
				Become our Channel Partner and explore <br />
				different opportunities
			</h2>

			<hr />

			<div className={styles['options-block']}>
				<div className={styles.option}>
					<LoadableImage
						src="../../../../../../images/AboutUsPage/detailed-control.png"
						alt="Detailed control"
					/>
					<p>DETAILED CONTROL</p>
				</div>

				<div className={styles.option}>
					<LoadableImage
						src="../../../../../../images/AboutUsPage/become-an-investor.png"
						alt="Become an investor"
					/>
					<p>BECOME AN INVESTOR</p>
				</div>

				<div className={styles.option}>
					<LoadableImage
						src="../../../../../../images/AboutUsPage/good-benefit.png"
						alt="Good benefit"
					/>
					<p>GOOD BENEFIT</p>
				</div>
			</div>

			<DelimiterIcon />
		</div>
	)
}

export default JoinUs
