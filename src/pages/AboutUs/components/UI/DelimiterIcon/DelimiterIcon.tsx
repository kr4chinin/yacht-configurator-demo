import { memo } from 'react'
import styles from './DelimiterIcon.module.scss'
import { ReactComponent as DoodleDelimiterIcon } from '../../../../../assets/icons/doodle-delimiter.svg'

const DelimiterIcon = () => {
	return (
		<div className={styles['delimiter-icon-wrapper']}>
			<DoodleDelimiterIcon />
		</div>
	)
}

export default memo(DelimiterIcon)
