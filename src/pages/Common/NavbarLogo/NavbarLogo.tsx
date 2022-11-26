import { memo } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../../utils/AppRoutes'
import styles from './NavbarLogo.module.scss'

const NavbarLogo = () => {
	return (
		<Link className={styles.container} to={AppRoutes.MAIN}>
			<h1 className={styles.title}>
				Kingdom Marine
				<span className={styles.date}>Since 2022</span>
			</h1>
		</Link>
	)
}

export default memo(NavbarLogo)
