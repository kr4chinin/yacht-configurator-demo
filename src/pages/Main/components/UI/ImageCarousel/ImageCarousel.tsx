import { useEffect, useState } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import styles from './ImageCarousel.module.scss'

const images = [
	{
		id: 1,
		src: '../../../../../../images/MainPage/carousel-1.png'
	},
	{
		id: 2,
		src: '../../../../../../images/MainPage/carousel-2.png'
	},
	{
		id: 3,
		src: '../../../../../../images/MainPage/carousel-3.png'
	},
	{
		id: 4,
		src: '../../../../../../images/MainPage/carousel-4.png'
	}
]

const ImageCarousel = () => {
	const [currentImage, setCurrentImage] = useState<string>(images[0].src)

	useEffect(() => {
		let currentImageIndex = 0

		const intervalId = setInterval(() => {
			setCurrentImage(images[currentImageIndex].src)
			currentImageIndex =
				currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className={styles.container}>
			<LoadableImage src={currentImage} />
		</div>
	)
}

export default ImageCarousel
