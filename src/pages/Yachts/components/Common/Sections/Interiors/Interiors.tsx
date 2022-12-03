import { FC } from 'react'
import LoadableImage from '../../../../../../components/LoadableImage/LoadableImage'
import FullscreenImageWrapper from '../../../../../Common/FullscreenImageWrapper'
import SecondaryHeader from '../../UI/SecondaryHeader'
import styles from './Interiors.module.scss'

interface InteriorsProps {
	bgSrc: string
	landscapeSrc: string
	bgAlt: string
	landscapeAlt: string
	description: string
}

const Interiors: FC<InteriorsProps> = ({
	bgSrc,
	landscapeSrc,
	bgAlt,
	landscapeAlt,
	description
}) => {
	return (
		<div className={styles.container}>
			<FullscreenImageWrapper src={bgSrc} alt={bgAlt} />
			<div className={styles.content}>
				<SecondaryHeader
					title="Interiors"
					bgLetters="iS"
					annotation={description}
				/>
        <div className={styles['image-wrapper']}>
          <LoadableImage src={landscapeSrc} alt={landscapeAlt} />
        </div>
			</div>
		</div>
	)
}

export default Interiors
