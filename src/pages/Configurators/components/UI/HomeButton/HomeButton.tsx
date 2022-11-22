import styles from './HomeButton.module.scss'
import { ReactComponent as MenuIcon } from '../../../../../assets/icons/menu.svg'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../../../../utils/AppRoutes'

const HomeButton = () => {
	return (
		<Link className={styles['home-btn']} to={AppRoutes.MAIN}>
			<MenuIcon />
		</Link>
	)
}

export default memo(HomeButton)
