import { FC } from 'react'
import styles from './AdminPanelSidebarButton.module.scss'

interface AdminPanelSidebarButtonProps {
	children: React.ReactNode
	onClick: () => void
    color?: string
}

const AdminPanelSidebarButton: FC<AdminPanelSidebarButtonProps> = ({
	children,
	onClick,
    color = ''
}) => {
	return (
		<button onClick={onClick} className={styles['admin-btn']} style={{
            backgroundColor: color
        }}>
			{children}
		</button>
	)
}

export default AdminPanelSidebarButton
