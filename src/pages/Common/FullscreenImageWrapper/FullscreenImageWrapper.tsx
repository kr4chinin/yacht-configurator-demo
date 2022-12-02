import { FC } from 'react'
import LoadableImage from '../../../components/LoadableImage/LoadableImage'
import styles from './FullscreenImageWrapper.module.scss'

interface FullscreenImageWrapperProps {
	src: string
	alt: string
}

const FullscreenImageWrapper: FC<FullscreenImageWrapperProps> = ({
	src,
	alt
}) => {
	return (
		<div className={styles.container}>
			<LoadableImage src={src} alt={alt} />
		</div>
	)
}

export default FullscreenImageWrapper
