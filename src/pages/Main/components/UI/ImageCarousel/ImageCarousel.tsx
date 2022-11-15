import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
	return (
		<Carousel
			infiniteLoop={true}
			interval={3000}
			transitionTime={500}
			autoPlay
			width={'100vw'}
			dynamicHeight
			useKeyboardArrows
			showStatus={false}
			showThumbs={false}
			showArrows={false}
		>
			{images.map(image => (
				<div key={image.id}>
					<img src={image.src} alt="carousel" />
				</div>
			))}
		</Carousel>
	)
}

export default ImageCarousel
