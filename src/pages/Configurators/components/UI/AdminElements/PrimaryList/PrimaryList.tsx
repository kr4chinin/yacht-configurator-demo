import { FC } from 'react'
import styles from './PrimaryList.module.scss'

interface PrimaryListProps {
	children: React.ReactNode
    title: string
}

const PrimaryList: FC<PrimaryListProps> = ({ children, title }) => {
	return (
		<>
			<h3 className={styles['list-title']}>{title}</h3>
			<ul>{children}</ul>
		</>
	)
}

export default PrimaryList
