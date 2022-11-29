import styles from './OptionsDropdown.module.scss'
import { useClickOutside } from '../../../../../hooks/useClickOutside'
import cn from 'classnames'
import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { ReactComponent as Dots } from '../../../../../assets/icons/dots.svg'
import { Option } from '../../../../../types/Option'

// Memoising svg component to prevent unnecessary rerendering
const MemoDots = memo(Dots)

interface OptionsDropdownProps {
	isShown: boolean
	setIsShown: React.Dispatch<React.SetStateAction<boolean>>
	options: Option[]
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

	const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)

	useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000)
    }

		window.addEventListener('resize', () => {
      checkMobile()
		})

		return () => {
			window.removeEventListener('resize', () => {
        checkMobile()
			})
		}
	}, [])

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
							{index !== options.length - 1 && <MemoDots />}
						</React.Fragment>
					))}
				</div>
			</div>

			{/* For mobiles */}

			{isMobile && (
				<div
					className={cn(styles['dropdown-adaptive'], {
						[styles.active]: isShown
					})}
					ref={dropdownRef}
				>
					<div
						className={cn(styles['menu-adaptive'], {
							[styles.active]: isShown
						})}
					>
						{options.map((option, index) => (
							<React.Fragment key={option.title}>
								<p onClick={option.onClick} className={styles['item-adaptive']}>
									{option.title}
								</p>
								{index !== options.length - 1 && <MemoDots />}
							</React.Fragment>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default OptionsDropdown
