import styles from './LanguageSwitch.module.scss'
import { ReactComponent as RussianFlagIcon } from '../../../../../assets/icons/russian-language-flag.svg'
import cn from 'classnames'

const LanguageSwitch = () => {
	return (
		<div className={styles.container}>
			<div
				className={cn(styles.option, {
					[styles.active]: true
				})}
			>
				RU
			</div>
			<div className={styles.option}>EN</div>

			<div className={styles.current}>
				<RussianFlagIcon />
				<span>RUS</span>
			</div>
		</div>
	)
}

export default LanguageSwitch
