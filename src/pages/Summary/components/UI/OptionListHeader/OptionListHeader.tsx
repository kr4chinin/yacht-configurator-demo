import { FC } from 'react'
import styles from './OptionListHeader.module.scss'

interface OptionListHeaderProps {
	children: React.ReactNode
}

const OptionListHeader: FC<OptionListHeaderProps> = ({ children }) => {
	return <h2 className={styles.container}>{children}</h2>
}

export default OptionListHeader
