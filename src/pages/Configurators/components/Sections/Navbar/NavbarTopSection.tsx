import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../../../utils/Routes'
import { ReactComponent as Menu } from '../../../../../assets/icons/menu.svg'
import styles from './Navbar.module.scss'
import { FC, memo } from 'react'

interface NavbarTopSectionProps {
    yachtName: string
}

const NavbarTopSection: FC<NavbarTopSectionProps> = ({yachtName}) => {

    const navigate = useNavigate()

    function handleNavigateToMainPage() {
        navigate(AppRoutes.MAIN)
    }

	return (
		<div className={styles['top-section']}>
			<div className={styles.menu}>
				<Menu />
				<p>Menu</p>
			</div>
			<p className={styles.signature}>{yachtName}</p>
			<p className={styles.more} onClick={handleNavigateToMainPage}>
				Explore more
			</p>
		</div>
	)
}

export default memo(NavbarTopSection)
