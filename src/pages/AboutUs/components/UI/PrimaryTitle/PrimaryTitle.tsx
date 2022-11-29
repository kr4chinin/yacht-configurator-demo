import { FC } from 'react'
import styles from './PrimaryTitle.module.scss'

interface PrimaryTitleProps {
	children: React.ReactNode
	fontSize?: string
}

const PrimaryTitle: FC<PrimaryTitleProps> = ({
	children,
	fontSize = '3.5rem'
}) => {
	return (
		<h2 className={styles.title} style={{ fontSize }}>
			{children}
		</h2>
	)
}

export default PrimaryTitle
