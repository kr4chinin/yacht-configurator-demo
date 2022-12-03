import { FC } from 'react'
import styles from './SecondaryHeader.module.scss'

interface SecondaryHeaderProps {
	title: string
	bgLetters: string
	annotation: string
}

const SecondaryHeader: FC<SecondaryHeaderProps> = ({
	annotation,
	bgLetters,
	title
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

export default SecondaryHeader
