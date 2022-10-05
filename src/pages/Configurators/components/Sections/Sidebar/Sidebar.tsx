import styles from './Sidebar.module.scss'
import { useState, useRef, FC } from 'react'
import cn from 'classnames'
import { ReactComponent as UnfoldMore } from '../../../../../assets/icons/unfold-more.svg'
import { ReactComponent as UnfoldLess } from '../../../../../assets/icons/unfold-less.svg'
import { useClickOutside } from '../../../../../hooks/useClickOutside'
import PrimaryHr from '../../UI/PrimaryHr'

interface SidebarProps {
	title: string
	isShown: boolean
	setIsShown: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
	isEngineFlag?: boolean
}

const Sidebar: FC<SidebarProps> = ({
	title,
	isShown,
	setIsShown,
	isEngineFlag = false,
	children
}) => {
	const [isContentShown, setIsContentShown] = useState(true)

	const triggerRef = useRef<HTMLDivElement | null>(null)
	const dropdownRef = useRef<HTMLDivElement | null>(null)

	useClickOutside(
		dropdownRef,
		triggerRef,
		() => setIsShown(false),
		false,
		isEngineFlag
	)

	return (
		<div
			className={cn(styles.container, { [styles.active]: isShown })}
			ref={dropdownRef}
		>
			{isContentShown && (
				<div className={styles.content}>
					<div className={styles.title}>
						<h3>{title}</h3>
						<PrimaryHr />
					</div>
					{children}
				</div>
			)}

			<div
				className={styles.control}
				onClick={() => setIsContentShown(prev => !prev)}
			>
				<button>{isContentShown ? <UnfoldLess /> : <UnfoldMore />}</button>
			</div>
		</div>
	)
}

export default Sidebar
