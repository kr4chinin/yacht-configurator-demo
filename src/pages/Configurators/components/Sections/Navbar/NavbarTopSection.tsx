import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../../../utils/AppRoutes'
import { ReactComponent as Menu } from '../../../../../assets/icons/menu.svg'
import styles from './Navbar.module.scss'
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as FinishIcon } from '../../../../../assets/icons/finish.svg'
import { ReactComponent as HomeIcon } from '../../../../../assets/icons/home.svg'

interface NavbarTopSectionProps {
	yachtName: string
}

const NavbarTopSection: FC<NavbarTopSectionProps> = ({ yachtName }) => {
	return (
		<div className={styles['top-section']}>
			<Link className={styles['home-icon-wrapper']} to={AppRoutes.MAIN}>
				<HomeIcon />
			</Link>

			<Link className={styles.more} to={AppRoutes.MAIN}>
				Explore more
			</Link>
			<p className={styles.signature}>{yachtName}</p>
			<Link className={styles.summary} to={AppRoutes.FLYBRIDGE_SUMMARY}>
				Summary
			</Link>

			<Link
				className={styles['finish-icon-wrapper']}
				to={AppRoutes.FLYBRIDGE_SUMMARY}
			>
				<FinishIcon />
			</Link>
		</div>
	)
}

export default memo(NavbarTopSection)
