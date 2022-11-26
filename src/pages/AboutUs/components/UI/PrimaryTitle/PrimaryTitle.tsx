import { FC } from 'react'
import styles from './PrimaryTitle.module.scss'

interface PrimaryTitleProps {
	children: React.ReactNode
}

const PrimaryTitle: FC<PrimaryTitleProps> = ({ children }) => {
	return <h2 className={styles.title}>{children}</h2>
}

export default PrimaryTitle
