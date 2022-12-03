import { FC } from 'react'
import LoadableImage from '../../../../../../components/LoadableImage/LoadableImage'
import FullscreenImageWrapper from '../../../../../Common/FullscreenImageWrapper'
import PrimaryHeader from '../../UI/PrimaryHeader'
import styles from './Exteriors.module.scss'
import cn from 'classnames'

interface ExteriorsProps {
	description: string
	bgSrc: string
	bgAlt: string
	primarySrc: string
	primaryAlt: string
	secondarySrc: string
	secondaryAlt: string
}

const Exteriors: FC<ExteriorsProps> = ({
	description,
	bgSrc,
	bgAlt,
	primarySrc,
	primaryAlt,
	secondarySrc,
	secondaryAlt
}) => {
	return (
		<div className={styles.container}>
			<FullscreenImageWrapper src={bgSrc} alt={bgAlt} />
			<div className={styles.content}>
				<PrimaryHeader
					title="Exteriors"
					bgLetters="Ex"
					annotation={description}
				/>

				<div className={styles.images}>
					<div
						className={cn(
							styles['primary-image-wrapper'],
							styles['after-shadow']
						)}
					>
						<LoadableImage src={primarySrc} alt={primaryAlt} />
					</div>

					<div
						className={cn(
							styles['secondary-image-wrapper'],
							styles['after-shadow']
						)}
					>
						<LoadableImage src={secondarySrc} alt={secondaryAlt} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Exteriors
