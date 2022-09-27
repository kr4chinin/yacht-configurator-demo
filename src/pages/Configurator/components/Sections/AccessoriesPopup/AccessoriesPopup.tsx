import { FC } from 'react'
import Portal from '../../../../../components/Portal'
import styles from './AccessoriesPopup.module.scss'
import { ReactComponent as CloseCircle } from '../../../../../assets/icons/close-circle.svg'
import { ReactComponent as Yacht } from '../../../../../assets/icons/yacht.svg'
import AccessoriesList from '../../UI/AccessoriesList'

interface AccessoriesPopupProps {
	isOpened: boolean
	onClose: () => void
}

const AccessoriesPopup: FC<AccessoriesPopupProps> = ({ isOpened, onClose }) => {
	function handleStopPropagation(e: React.MouseEvent) {
		e.stopPropagation()
	}

	if (!isOpened) {
		return null
	}

	return (
		<Portal onClose={onClose}>
			<div
				className={styles.container}
				onClick={onClose}
				role="button"
				tabIndex={0}
			>
				<div className={styles.content} onClick={handleStopPropagation}>
					<div className={styles.header}>
						<div className={styles.logo}>
							<Yacht />
							<p>Kingdom Marine</p>
						</div>
						<CloseCircle onClick={onClose} className={styles['close-btn']} />
					</div>
					<AccessoriesList />
				</div>
			</div>
		</Portal>
	)
}

export default AccessoriesPopup
