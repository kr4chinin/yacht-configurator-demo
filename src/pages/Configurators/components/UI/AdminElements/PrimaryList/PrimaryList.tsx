import { FC } from 'react'
import styles from './PrimaryList.module.scss'
import {ReactComponent as DoodleIcon} from '../../../../../../assets/icons/doodle.svg'

interface PrimaryListProps {
	children: React.ReactNode
	title: string
}

const PrimaryList: FC<PrimaryListProps> = ({ children, title }) => {
	return (
		<>
			<div className={styles['list-container']}>
                <DoodleIcon />
				<h3 className={styles['list-title']}>{title}</h3>
			</div>

			<ul>{children}</ul>
		</>
	)
}

export default PrimaryList
