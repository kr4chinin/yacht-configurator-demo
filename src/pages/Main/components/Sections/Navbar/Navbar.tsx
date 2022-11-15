import styles from './Navbar.module.scss'
import NavbarLink from '../../UI/NavbarLink'
import NavbarLogo from '../../UI/NavbarLogo'
import LanguageSwitch from '../../UI/LanguageSwitch'

const Navbar = () => {
	return (
		<div className={styles.container}>
			<NavbarLogo />

			<div className={styles.links}>
				<NavbarLink to="/" title="About us" />
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
