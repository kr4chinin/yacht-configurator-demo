import styles from './OptionsDropdown.module.scss'
import { useClickOutside } from '../../hooks/useClickOutside'
import cn from 'classnames'
import React, { FC, useRef } from 'react'
import { ReactComponent as Dots } from '../../assets/icons/dots.svg'

type DropdownOption = {
	title: string
	onClick: () => void
}

interface OptionsDropdownProps {
	isShown: boolean
	setIsShown: React.Dispatch<React.SetStateAction<boolean>>
	options: DropdownOption[]
	children: React.ReactNode
}

const OptionsDropdown: FC<OptionsDropdownProps> = ({
	isShown,
	setIsShown,
	children,
	options
}) => {
	const triggerRef = useRef<HTMLDivElement | null>(null)
	const dropdownRef = useRef<HTMLDivElement | null>(null)

	function toggleDropdown() {
		setIsShown(prev => !prev)
	}

	useClickOutside(dropdownRef, triggerRef, () => setIsShown(false))

	return (
		<div
			onClick={toggleDropdown}
			ref={triggerRef}
			className={styles.trigger}
			role="button"
		>
			{children}
			<div
				className={cn(styles.dropdown, { [styles.active]: isShown })}
				ref={dropdownRef}
			>
				<div className={cn(styles.menu, { [styles.active]: isShown })}>
					{options.map((option, index) => (
						<React.Fragment key={option.title}>
							<p onClick={option.onClick} className={styles.item}>
								{option.title}
							</p>
							{index !== options.length - 1 && <Dots />}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

export default OptionsDropdown
