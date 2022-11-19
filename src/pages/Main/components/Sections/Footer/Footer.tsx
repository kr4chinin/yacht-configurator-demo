import styles from './Footer.module.scss'
import { ReactComponent as FacebookIcon } from '../../../../../assets/icons/facebook.svg'
import { ReactComponent as TelegramIcon } from '../../../../../assets/icons/telegram.svg'
import { ReactComponent as InstagramIcon } from '../../../../../assets/icons/instagram.svg'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Kingdom Marine yachts</div>

			<div className={styles.annotation}>
				<span>Copyright © Group A.D.I. - VAT 00770730081</span>
				<span>info@kingdommarine.ru</span>
			</div>

			<div className={styles.policy}>
				<span className={styles.tag}>Privacy Policy</span> –{' '}
				<span className={styles.tag}>Cookie policy</span> – powered by{' '}
				<a href="https://github.com/kr4chinin">kr4chinin</a>
			</div>

			<div className={styles.icons}>
				<div className={styles['icon-wrapper']}>
					<InstagramIcon />
				</div>
				<div className={styles['icon-wrapper']}>
					<TelegramIcon />
				</div>
				<div className={styles['icon-wrapper']}>
					<FacebookIcon />
				</div>
			</div>
		</div>
	)
}

export default Footer
