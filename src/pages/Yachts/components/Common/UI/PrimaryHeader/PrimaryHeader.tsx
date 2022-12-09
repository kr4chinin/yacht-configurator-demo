import { FC } from 'react'
import styles from './PrimaryHeader.module.scss'

interface PrimaryHeaderProps {
	title: string
	bgLetters: string
	annotation: string
}

const PrimaryHeader: FC<PrimaryHeaderProps> = ({
	title,
	bgLetters,
	annotation
}) => {
	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<span>{bgLetters}</span>

			<hr />

			<p className={styles.annotation}>{annotation}</p>
		</div>
	)
}

export default PrimaryHeader
