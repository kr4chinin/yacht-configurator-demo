import { FC } from 'react'
import { EngineInfo } from '../../Engines'
import styles from './EnginesItem.module.scss'

interface EnginesItemProps {
	engine: EngineInfo
}

const EnginesItem: FC<EnginesItemProps> = ({ engine }) => {
	return (
		<div className={styles.container}>
			<div className={styles.element}>
				<p className={styles.label}>Engine</p>
				<p className={styles.value}>{engine.title}</p>
			</div>
			<div className={styles.element}>
				<p className={styles.label}>Builder</p>
				<p className={styles.value}>{engine.builder}</p>
			</div>
			<div className={styles.element}>
				<p className={styles.label}>Model</p>
				<p className={styles.value}>{engine.model}</p>
			</div>
		</div>
	)
}

export default EnginesItem
