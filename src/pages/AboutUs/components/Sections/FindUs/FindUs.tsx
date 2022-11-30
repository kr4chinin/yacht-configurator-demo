import PrimaryTitle from '../../UI/PrimaryTitle'
import styles from './FindUs.module.scss'
import { ReactComponent as GeopositionIcon } from '../../../../../assets/icons/geoposition.svg'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import Footer from '../../../../Main/components/Sections/Footer'

const FindUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles['left-block']}>
				<PrimaryTitle>Find Us on Google Maps</PrimaryTitle>

				<div className={styles.position}>
					<GeopositionIcon />
					<div className={styles.content}>
						<h4>RUSSIA</h4>
						<p>
							143582, MOSKOVSKAYA OBLAST’, GORODSKOI OKRUG <br />
							ISTRA, DEREVNYAPOKROVSKOE,UZORNAYA ULICA, 110.
						</p>
					</div>
				</div>

				<div className={styles.position}>
					<GeopositionIcon />
					<div className={styles.content}>
						<h4>RUSSIA</h4>
						<p>
							1-YA VOLOKOLAMSKAYA ULICA, 76B, DEDOVSK, <br />
							GORODSKOI OKRUG ISTRA, MOSKOVASKAYA OBLAST’
						</p>
					</div>
				</div>
			</div>

			<div className={styles.image}>
				<LoadableImage
					src="../../../../../../images/AboutUsPage/google-maps.svg"
					alt="Google maps"
				/>
			</div>

      <Footer />
		</div>
	)
}

export default FindUs
