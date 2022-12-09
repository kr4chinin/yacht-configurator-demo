import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './NavbarLink.module.scss'
import cn from 'classnames'

interface NavbarLinkProps {
	to: string
	title: string
}

const NavbarLink: FC<NavbarLinkProps> = ({ to, title }) => {
	const location = useLocation()

	return (
		<Link
			className={cn(styles.container, {
				[styles.active]: location.pathname === to
			})}
			to={to}
		>
			{title}
		</Link>
	)
}

export default NavbarLink
