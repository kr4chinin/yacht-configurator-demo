import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.info}>
				<p>Kingdom Marine ™️</p>
				<p>Russia, Moscow</p>
				<p>All rights reserved!</p>
			</div>
			<div className={styles.links}>
				<a href="/">Contact us</a>
				<a href="/">Report a problem</a>
				<p>+7 (903) 754-65-78</p>
			</div>
		</footer>
	)
}

export default Footer
