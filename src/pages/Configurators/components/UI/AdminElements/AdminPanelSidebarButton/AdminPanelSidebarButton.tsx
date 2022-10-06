import { FC } from 'react'
import styles from './AdminPanelSidebarButton.module.scss'
import cn from 'classnames'

interface AdminPanelSidebarButtonProps {
	onClick: () => void
	primary?: boolean
	secondary?: boolean
	marginBottom?: string
}

const AdminPanelSidebarButton: FC<AdminPanelSidebarButtonProps> = ({
	onClick,
	primary = false,
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
			{primary && (
				<p>
					Apply <b>matcap</b> texture
				</p>
			)}
			{secondary && (
				<p>
					Apply <b>basic</b> texture
				</p>
			)}
		</button>
	)
}

export default AdminPanelSidebarButton
