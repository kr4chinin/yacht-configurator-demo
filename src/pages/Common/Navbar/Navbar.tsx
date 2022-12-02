import styles from './Navbar.module.scss'
import NavbarLink from './UI/NavbarLink'
import NavbarLogo from './UI/NavbarLogo'
import LanguageSwitch from '../LanguageSwitch'
import { AppRoutes } from '../../../utils/AppRoutes'
import NavbarDropdown from './UI/NavbarDropdown'
import NavbarItem from './UI/NavbarItem'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<NavbarLogo />

			<div className={styles.links}>
				<NavbarLink to={AppRoutes.ABOUT_US} title="About us" />

				<NavbarDropdown
					options={[
						{
							title: 'Flybridge',
							onClick: () => navigate(AppRoutes.YACHTS_FLYBRIDGE)
						},
						{
							title: 'Skydeck',
							onClick: () => navigate(AppRoutes.YACHTS_SKYDECK)
						}
					]}
				>
					<NavbarItem title="Yachts" />
				</NavbarDropdown>

				<NavbarLink to="/" title="News" />
				<NavbarLink to="/" title="Events" />
				<NavbarLink to="/" title="Contact" />
			</div>

			<LanguageSwitch />
		</div>
	)
}

export default Navbar
