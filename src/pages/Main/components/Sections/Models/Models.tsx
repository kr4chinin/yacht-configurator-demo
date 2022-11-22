import { AppRoutes } from '../../../../../utils/AppRoutes'
import ModelItem from '../../UI/ModelItem'
import styles from './Models.module.scss'

const Models = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Our models</h2>
			<div className={styles.models}>
				<ModelItem
					title="Flybirdge"
					description="The flybridge is currently considered to be the smallest of the small boats manufactured by KINGDOM MARINE. This model offers an innovative beach mode."
					linkToConfigurator={AppRoutes.FLYBRIDGE_CONFIGURATOR}
					linkToReadMore="/"
					img="../../../../../../images/MainPage/flybridge.png"
				/>
				<ModelItem
					title="Skydeck"
					description="Skydeck is the second largest small boat manufactured by KINGDOM MARINE. This model has an innovative upper deck design"
					linkToConfigurator={AppRoutes.SKYDECK_CONFIGURATOR}
					linkToReadMore="/"
					img="../../../../../../images/MainPage/skydeck.png"
				/>
			</div>
		</div>
	)
}

export default Models
