import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../../../utils/AppRoutes'
import { ReactComponent as Menu } from '../../../../../assets/icons/menu.svg'
import styles from './Navbar.module.scss'
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

interface NavbarTopSectionProps {
	yachtName: string
}

const NavbarTopSection: FC<NavbarTopSectionProps> = ({ yachtName }) => {
	return (
		<div className={styles['top-section']}>
			<Link className={styles.more} to={AppRoutes.MAIN}>
				Explore more
			</Link>
			<p className={styles.signature}>{yachtName}</p>
			<Link className={styles.summary} to={AppRoutes.FLYBRIDGE_SUMMARY}>
				Summary
			</Link>
		</div>
	)
}

export default memo(NavbarTopSection)
