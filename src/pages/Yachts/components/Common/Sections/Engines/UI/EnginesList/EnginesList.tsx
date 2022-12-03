import { FC } from 'react'
import { EngineInfo } from '../../Engines'
import EnginesItem from '../EnginesItem'
import styles from './EnginesList.module.scss'

interface EnginesListProps {
	engines: EngineInfo[]
}

const EnginesList: FC<EnginesListProps> = ({ engines }) => {
	return (
		<div className={styles.container}>
			{engines.map((engine, index) => (
				<EnginesItem engine={engine} key={index} />
			))}
		</div>
	)
}

export default EnginesList
