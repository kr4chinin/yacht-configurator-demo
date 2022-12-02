import { FC } from 'react'
import { Link } from 'react-router-dom'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import styles from './ModelItem.module.scss'
import { ReactComponent as PlusIcon } from '../../../../../assets/icons/plus.svg'
import { ReactComponent as ReadMoreIcon } from '../../../../../assets/icons/read-more.svg'
import cn from 'classnames'

interface ModelItemProps {
	title: string
	description: string
	img: string
	linkToReadMore: string
	linkToConfigurator?: string
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
				<div className={styles['link-wrapper']}>
					{linkToConfigurator ? (
						<Link
							to={linkToConfigurator}
							className={styles['configurator-link']}
						>
							<PlusIcon />
						</Link>
					) : (
						<div className={cn(styles['configurator-link'], styles.disabled)}>
							<PlusIcon />
						</div>
					)}

					<p className={styles['link-label']}>
						Configurator
					</p>
				</div>

				<div className={styles['link-wrapper']}>
					<Link to={linkToReadMore} className={styles['read-more-link']}>
						<ReadMoreIcon />
					</Link>
					<p className={styles['link-label']}>
						Read more
					</p>
				</div>
			</div>
		</div>
	)
}

export default ModelItem
