import { FC, memo } from 'react'
import styles from './PrimaryListElement.module.scss'

interface PrimaryListElementProps {
	children: React.ReactNode
	title: string
}

const PrimaryListElement: FC<PrimaryListElementProps> = ({
	children,
	title
}) => {
	return (
		<li className={styles.container}>
			<h4 className={styles['list-section-title']}>{title}</h4>
			{children}
		</li>
	)
}

export default memo(PrimaryListElement)
