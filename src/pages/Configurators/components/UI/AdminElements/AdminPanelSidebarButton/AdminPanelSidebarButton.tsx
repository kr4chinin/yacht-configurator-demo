import { FC } from 'react'
import styles from './AdminPanelSidebarButton.module.scss'
import cn from 'classnames'

interface AdminPanelSidebarButtonProps {
	children: React.ReactNode
	onClick: () => void
	primary?: boolean
	secondary?: boolean
	marginBottom?: string
}

const AdminPanelSidebarButton: FC<AdminPanelSidebarButtonProps> = ({
	children,
	onClick,
	primary = true,
	secondary = false,
	marginBottom = '10px'
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				styles['admin-btn'],
				{ [styles.primary]: primary },
				{ [styles.secondary]: secondary }
			)}
			style={{ marginBottom: marginBottom }}
		>
			{children}
		</button>
	)
}

export default AdminPanelSidebarButton
