import { memo } from 'react'
import styles from './NavbarLogo.module.scss'

const NavbarLogo = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Kingdom Marine
				<span className={styles.date}>Since 2022</span>
			</h1>
		</div>
	)
}

export default memo(NavbarLogo)
