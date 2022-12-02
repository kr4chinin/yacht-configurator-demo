import { FC, useRef, useState } from 'react'
import styles from './NavbarDropdown.module.scss'
import cn from 'classnames'
import List from './UI/List'
import { Option } from '../../../../../types/Option'
import { useClickOutside } from '../../../../../hooks/useClickOutside'

interface NavbarDropdownProps {
	children: React.ReactNode
	options: Option[]
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ children, options }) => {
	const [isShown, setIsShown] = useState(false)

	const triggerRef = useRef<HTMLDivElement | null>(null)
	const dropdownRef = useRef<HTMLDivElement | null>(null)

	function toggleDropdown() {
		setIsShown(prev => !prev)
	}

	useClickOutside(dropdownRef, triggerRef, () => setIsShown(false))

	return (
		<div className={styles.trigger} onClick={toggleDropdown} ref={triggerRef}>
			{children}
			<div
				className={cn(styles.dropdown, { [styles.active]: isShown })}
				ref={dropdownRef}
			>
				<div className={cn(styles.menu, { [styles.active]: isShown })}>
					<List options={options} />
				</div>
			</div>
		</div>
	)
}

export default NavbarDropdown
