import { FC } from 'react'
import styles from './Footer.module.scss'
import cn from 'classnames'

interface FooterProps {
    isHidden: boolean
}

const Footer: FC<FooterProps> = ({isHidden}) => {
	return (
		<footer className={cn(styles.container, {[styles.hidden]: isHidden})}>
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
