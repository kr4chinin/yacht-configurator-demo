import styles from './Navbar.module.scss'
import NavbarLink from '../NavbarLink'
import NavbarLogo from '../NavbarLogo'
import LanguageSwitch from '../LanguageSwitch'
import { AppRoutes } from '../../../utils/AppRoutes'

const Navbar = () => {
	return (
		<div className={styles.container}>
			<NavbarLogo />

			<div className={styles.links}>
				<NavbarLink to={AppRoutes.ABOUT_US} title="About us" />
				<NavbarLink to="/" title="News" />
				<NavbarLink to="/" title="Yachts" />
				<NavbarLink to="/" title="Events" />
				<NavbarLink to="/" title="Contact" />
			</div>

			<LanguageSwitch />
		</div>
	)
}

export default Navbar
