import styles from './LoadableImage.module.scss'
import { FC, useLayoutEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { useInView } from 'react-intersection-observer'

interface LoadableImageProps {
	src: string
	alt?: string
	onLoad?(): void
	borderRadius?: string
}

const LoadableImage: FC<LoadableImageProps> = ({
	src,
	alt = '',
	borderRadius = '0px',
	onLoad = () => {}
}) => {
	const [isLoaded, setIsLoaded] = useState(false)

	const imageRef = useRef<HTMLImageElement>(null)

	const { ref: containerRef, inView } = useInView()

	useLayoutEffect(() => {
		if (!inView || isLoaded) {
			return
		}

		if (imageRef.current) {
			imageRef.current.onload = () => {
				setIsLoaded(true)
				onLoad()
			}
		}
	}, [inView, isLoaded, onLoad])

	return (
		<div
			ref={containerRef}
			className={cn(styles.container, {
				[styles.containerLoaded]: isLoaded
			})}
			style={{ borderRadius, background: isLoaded ? 'transparent' : '' }}
		>
			{(inView || isLoaded) && (
				<img
					ref={imageRef}
					className={cn(styles.image, {
						[styles.imageLoaded]: isLoaded
					})}
					src={src}
					alt={alt}
				/>
			)}
		</div>
	)
}

export default LoadableImage
