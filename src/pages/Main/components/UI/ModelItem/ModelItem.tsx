import { FC } from 'react'
import { Link } from 'react-router-dom'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import styles from './ModelItem.module.scss'
import { ReactComponent as PlusIcon } from '../../../../../assets/icons/plus.svg'

interface ModelItemProps {
	title: string
	description: string
	img: string
	linkToReadMore: string
	linkToConfigurator: string
}

const ModelItem: FC<ModelItemProps> = ({
	title,
	description,
	img,
	linkToReadMore,
	linkToConfigurator
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<LoadableImage src={img} />
			</div>

			<article>
				<h4 className={styles.title}>{title}</h4>
				<div className={styles.description}>{description}</div>
			</article>

			<div className={styles['link-block']}>
				<Link to={linkToConfigurator} className={styles['configurator-link']}>
					<PlusIcon />
				</Link>
				<div className={styles['link-label']}>Configurator</div>
			</div>
		</div>
	)
}

export default ModelItem
