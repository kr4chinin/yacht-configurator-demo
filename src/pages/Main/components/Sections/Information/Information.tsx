import styles from './Information.module.scss'
import { ReactComponent as InitialsIcon } from '../../../../../assets/icons/initials.svg'
import InfoWidgetList from '../InfoWidgetList'

const Information = () => {
	return (
		<div className={styles.container}>
			<InfoWidgetList />
			<div className={styles['initials-icon-wrapper']}>
				<InitialsIcon />
			</div>
		</div>
	)
}

export default Information
