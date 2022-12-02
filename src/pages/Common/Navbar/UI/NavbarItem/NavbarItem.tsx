import { FC } from 'react'
import styles from './NavbarItem.module.scss'

interface NavbarItemProps {
	title: string
}

const NavbarItem: FC<NavbarItemProps> = ({ title }) => {
	return <div className={styles.container}>{title}</div>
}

export default NavbarItem
