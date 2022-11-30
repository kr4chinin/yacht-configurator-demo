import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import DelimiterIcon from '../../UI/DelimiterIcon'
import PrimaryTitle from '../../UI/PrimaryTitle'
import styles from './Idea.module.scss'

const Idea = () => {
	return (
		<div className={styles.container}>
			<div className={styles['photo-block']}>
				<div className={styles.image}>
					<LoadableImage
						src="../../../../../../images/AboutUsPage/owner-full.png"
						alt="CEO of Kingdom Marine"
					/>
				</div>

				<div className={styles.frame} />
			</div>

			<div className={styles['right-block']}>
				<PrimaryTitle>Idea</PrimaryTitle>
				<p className={styles.content}>
					Every great project starts with a bold idea to create something
					beautiful and unforgettable. The invaluable experience accumulated
					over the years by our specialists will allow us to be at the forefront
					of innovative shipbuilders, constantly introducing new and bold
					designs. With each new generation of Kingdom Marine yachts, we will
					push the boundaries even further. 
          <br /> 
          <br/>
          Our ambitious plans for continuous
					growth would require a fairly large production facility. For the
					development and manufacture of models of Kingdom Marine was converted
					hangar area of more than 1500 m2 near the town of Istra, which has a
					convenient location and the ability to transport yachts on specially
					equipped trailers to any body of water in Moscow, St. Petersburg, as
					well as other cities in Russia within 1000 km.
				</p>
			</div>
			<DelimiterIcon />
		</div>
	)
}

export default Idea
