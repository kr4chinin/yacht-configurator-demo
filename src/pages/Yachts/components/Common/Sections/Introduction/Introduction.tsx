import { FC } from 'react'
import { Link } from 'react-router-dom'
import FullscreenImageWrapper from '../../../../../Common/FullscreenImageWrapper'
import Navbar from '../../../../../Common/Navbar'
import ArrowDown from '../../../../../Common/ArrowDown'
import styles from './Introduction.module.scss'

interface IntroductionProps {
	src: string
	alt: string
	title: string
	annotation: string
	configuratorLink?: string
}

const Introduction: FC<IntroductionProps> = ({
	alt,
	annotation,
	configuratorLink,
	src,
	title
}) => {
	return (
		<div className={styles.container}>
			<Navbar />
			<FullscreenImageWrapper src={src} alt={alt} />
			<div className={styles.title}>
				<h1>{title}</h1>
				<span>Model</span>
			</div>

			<p className={styles.annotation}>{annotation}</p>

			{configuratorLink ? (
				<Link to={configuratorLink} className={styles['configurator-link']}>
					Configurator
				</Link>
			) : (
				<p className={styles.development}>
					Configurator for this model <br />
					<span>is currently in development...</span>
				</p>
			)}

      <ArrowDown />
		</div>
	)
}

export default Introduction
