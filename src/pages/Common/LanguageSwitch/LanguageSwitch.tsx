import styles from './LanguageSwitch.module.scss'
import cn from 'classnames'

const LanguageSwitch = () => {
	return (
		<div className={styles.container}>
			<div className={cn(styles.option, { [styles.disabled]: true })}>RU</div>
			<div
				className={cn(styles.option, {
					[styles.active]: true
				})}
			>
				EN
			</div>
		</div>
	)
}

export default LanguageSwitch
