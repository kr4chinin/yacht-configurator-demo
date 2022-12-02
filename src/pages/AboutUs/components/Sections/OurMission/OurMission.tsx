import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import PrimaryTitle from '../../UI/PrimaryTitle'
import styles from './OurMission.module.scss'
import { ReactComponent as QuoteIcon } from '../../../../../assets/icons/quotes.svg'
import { ReactComponent as HorizontalArrowIcon } from '../../../../../assets/icons/small-horizontal-arrow.svg'
import { ReactComponent as VideoPlayIcon } from '../../../../../assets/icons/video-play.svg'
import cn from 'classnames'
import DelimiterIcon from '../../UI/DelimiterIcon'

const OurMission = () => {
	return (
		<div className={styles.container}>
			<div className={styles.column}>
				<PrimaryTitle>Our mission</PrimaryTitle>

				<div className={styles['quote-block']}>
					<div className={cn(styles['quote-icon-wrapper'], styles.top)}>
						<QuoteIcon />
					</div>

					<q className={styles.content}>
						Kingdom marine's mission is to inspire individualism, to do bold{' '}
						<br />
						things and not be afraid to experiment. Our yachts bring people{' '}
						<br />
						together and set the course for modern shipbuilding.
					</q>

					<div className={cn(styles['quote-icon-wrapper'], styles.bottom)}>
						<QuoteIcon />
					</div>

					<div className={styles['avatar-block']}>
						<div className={styles.avatar}>
							<LoadableImage
								src="../../../../../../images/AboutUsPage/owner-miniature.svg"
								alt="Kingdom Marine founder"
							/>
						</div>

						<h5 className={styles['owner-name']}>Daniil Mitin</h5>
						<hr />
						<div className={styles.annotation}>Company owner</div>
					</div>
				</div>

				<button className={styles.contact}>
					<span>Contact us</span>
					<HorizontalArrowIcon />
				</button>
			</div>

			<div className={styles.column}>
				<PrimaryTitle fontSize="2.5rem">
					Company <br />
					Profile
				</PrimaryTitle>

				<div className={styles['video-block']}>
					<VideoPlayIcon />
				</div>
			</div>

			<DelimiterIcon />
		</div>
	)
}

export default OurMission
