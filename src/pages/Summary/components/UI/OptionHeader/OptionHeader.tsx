import { FC } from 'react'
import styles from './OptionHeader.module.scss'

interface OptionHeaderProps {
	children: React.ReactNode
}

const OptionHeader: FC<OptionHeaderProps> = ({ children }) => {
	return <h3 className={styles.container}>{children}</h3>
}

export default OptionHeader
