import { useEffect, useState } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import styles from './ImageCarousel.module.scss'
import cn from 'classnames'

const images = [
	'../../../../../../images/MainPage/carousel-1.png',
	'../../../../../../images/MainPage/carousel-2.png',
	'../../../../../../images/MainPage/carousel-3.png',
	'../../../../../../images/MainPage/carousel-4.png'
]

const ImageCarousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
	const [intervalId, setIntervalId] = useState<ReturnType<typeof setTimeout>>()

	useEffect(() => {
		let currentImageIndex = 0

		const intervalId = setInterval(() => {
			setCurrentImageIndex(currentImageIndex)
			currentImageIndex =
				currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
		}, 3000)

		setIntervalId(intervalId)

		return () => clearInterval(intervalId)
	}, [])

	function handleChooseImage(index: number) {
		clearInterval(intervalId)
		setCurrentImageIndex(index)
	}

	return (
		<div className={styles.container}>
			<LoadableImage src={images[currentImageIndex]} />
			<div className={styles.controls}>
				{images.map((_, index) => (
					<div
						key={index}
						className={cn(styles.control, {
							[styles.active]: index === currentImageIndex
						})}
						onClick={() => handleChooseImage(index)}
					/>
				))}
			</div>
		</div>
	)
}

export default ImageCarousel
