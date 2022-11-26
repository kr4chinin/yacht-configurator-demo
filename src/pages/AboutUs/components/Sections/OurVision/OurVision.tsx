import cn from 'classnames'
import PrimaryTitle from '../../UI/PrimaryTitle'
import styles from './OurVision.module.scss'
import { ReactComponent as DoodleDelimiterIcon } from '../../../../../assets/icons/doodle-delimiter.svg'
import { ReactComponent as ClientsIcon } from '../../../../../assets/icons/clients.svg'
import { ReactComponent as CitiesIcon } from '../../../../../assets/icons/cities.svg'
import { ReactComponent as CaseIcon } from '../../../../../assets/icons/case.svg'

const OurVision = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Our vision</h3>
			<PrimaryTitle>About company</PrimaryTitle>
			<div className={styles.content}>
				Kingdom Marine was founded in Russia in June 2022 and has already
				managed to attract the attention of both domestic and foreign yacht
				manufacturers to its projects. Each yacht of Kingdom Marine is a sample
				of perfection of handcraftsmanship and thanks to unmatched attention to
				detail, advanced technology and excellent design the company can
				rightfully take its place as one of the leading Russian shipbuilders.
			</div>

			<button className={styles['read-more-btn']}>Read more</button>

			<div className={styles.decoration}>
				<div className={cn(styles.circle, styles.big)} />
				<div className={cn(styles.circle, styles.medium)} />
				<div className={cn(styles.circle, styles.small)} />

				<div className={styles['clients-widget']}>
					<div className={styles['clients-icon-wrapper']}>
						<ClientsIcon />
					</div>

					<span>100+</span>
					<span>SATISFIED CLIENTS</span>
				</div>

				<div className={styles['cities-widget']}>
					<div className={styles['cities-icon-wrapper']}>
						<CitiesIcon />
					</div>

					<span>10</span>
					<span>CITIES</span>
				</div>

				<div className={styles['customers-widget']}>
					<div className={styles['customers-icon-wrapper']}>
						<CaseIcon />
					</div>

					<span>First class</span>
					<span>customer service</span>
				</div>
			</div>

			<div className={styles['delimiter-icon-wrapper']}>
				<DoodleDelimiterIcon />
			</div>
		</div>
	)
}

export default OurVision
