import { FC } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import OptionHeader from '../../UI/OptionHeader'
import OptionListHeader from '../../UI/OptionListHeader'
import styles from './ModelOption.module.scss'

interface ModelOptionProps {
	src: string
	alt: string
	annotation: string
	description: string
}

const ModelOption: FC<ModelOptionProps> = ({
	src,
	alt,
	annotation,
	description
}) => {
	return (
		<div className={styles.container}>
			<div className={styles['image-block']}>
				<div className={styles['image-wrapper']}>
					<LoadableImage src={src} alt={alt} />
				</div>

				<p className={styles.annotation}>{annotation}</p>
			</div>

			<div className={styles['info-block']}>
				<OptionListHeader>Your model</OptionListHeader>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	)
}

export default ModelOption
