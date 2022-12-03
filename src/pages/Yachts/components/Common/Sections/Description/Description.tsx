import { FC } from 'react'
import LoadableImage from '../../../../../../components/LoadableImage/LoadableImage'
import FullscreenImageWrapper from '../../../../../Common/FullscreenImageWrapper'
import PrimaryHeader from '../../UI/PrimaryHeader'
import styles from './Description.module.scss'

interface DescriptionProps {
	bgSrc: string
	smallSrc: string
	bgAlt: string
	smallAlt: string
	description: string
}

const Description: FC<DescriptionProps> = ({
	bgSrc,
	bgAlt,
	smallAlt,
	smallSrc,
	description
}) => {
	return (
		<div className={styles.container}>
			<FullscreenImageWrapper src={bgSrc} alt={bgAlt} />
			<div className={styles.content}>
				<PrimaryHeader
					title="Description"
					bgLetters="Dn"
					annotation={description}
				/>

				<div className={styles['image-wrapper']}>
					<LoadableImage src={smallSrc} alt={smallAlt} />
				</div>
			</div>
		</div>
	)
}

export default Description
