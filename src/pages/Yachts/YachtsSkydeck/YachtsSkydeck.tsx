import Introduction from '../components/Common/Sections/Introduction'
import styles from './YachtsSkydeck.module.scss'
import Description from '../components/Common/Sections/Description'
import Interiors from '../components/Common/Sections/Interiors'
import Exteriors from '../components/Common/Sections/Exteriors'
import Engines from '../components/Common/Sections/Engines'
import { useScrollToTop } from '../../../hooks/useScrollToTop'

const YachtsSkydeck = () => {
  useScrollToTop()

	return (
		<div className={styles.container}>
			<Introduction
				src="../../../../../images/YachtsPage/YachtsSkydeckPage/introduction.png"
				alt="Introduction"
				annotation="16,20m/53' | 6,00м/20' | 1,40м/3'4’’"
				title="Skydeck"
			/>
			<Description
				bgSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/description-1.png"
				bgAlt="Description"
				smallSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/description-2.png"
				smallAlt="Anfas 16.20 Skydeck"
				description="The forward seating area with convertible seating can be quickly turned into real sun deck. There is a choice of optional padded awning for extra protection. With two different garage options and powerful hydraulic bath platform, you can choose between a variety of attractive water features."
			/>
			<Interiors
				bgSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/interior-1.png"
				landscapeSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/interior-2.png"
				bgAlt="Interior"
				landscapeAlt="Interior variation"
				description="Below deck, guests will find three full-size staterooms and two
        bathrooms, for a total of six sleeping accommodations. The master stateroom is located in
        the middle of the ship and features a double bed,large walk-in closet and private bathroom.
        A forward VIP stateroom can be offered for guests, where they will find a spectacular night
        view thanks to a series of skylights."
			/>
			<Exteriors
				bgSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/exterior-1.png"
				bgAlt="Exterior"
				primarySrc="../../../../../images/YachtsPage/YachtsSkydeckPage/exterior-2.png"
				primaryAlt="Exterior variation"
				secondarySrc="../../../../../images/YachtsPage/YachtsSkydeckPage/exterior-3.png"
				secondaryAlt="Exterior another variation"
				description="The forward seating area with convertible seating can be quickly turned into real
        sun deck. There is a choice of optional padded awning for extra protection. With two different garage options and powerful hydraulic bath platform, you can choose between
        a variety of attractive water features."
			/>
			<Engines
				bgSrc="../../../../../images/YachtsPage/YachtsSkydeckPage/engine.png"
				bgAlt="Engine"
				description="This model is powered by a column of two Volvo
        Penta D11-670 engines, which have 1,340 horsepower."
				engineInfo={{
					title: 'column 2 x',
					builder: 'Volvo',
					model: 'Penta D11-670',
					amount: 1
				}}
			/>
		</div>
	)
}

export default YachtsSkydeck
