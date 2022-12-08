import { FC } from 'react'
import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
	children: React.ReactNode
}

const SectionHeader: FC<SectionHeaderProps> = ({ children }) => {
	return <h2 className={styles.container}>{children}</h2>
}

export default SectionHeader
