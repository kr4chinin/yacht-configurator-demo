import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavbarLink.module.scss'

interface NavbarLinkProps {
	to: string
	title: string
}

const NavbarLink: FC<NavbarLinkProps> = ({ to, title }) => {
	return (
		<Link className={styles.container} to={to}>
			{title}
		</Link>
	)
}

export default NavbarLink
