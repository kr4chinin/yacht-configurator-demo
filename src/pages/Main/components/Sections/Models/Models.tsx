import { AppRoutes } from '../../../../../utils/AppRoutes'
import ModelItem from '../../UI/ModelItem'
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/long-horizontal-arrow.svg'
import styles from './Models.module.scss'
import { useEffect, useState } from 'react'

export type ShownModel = 'both' | 'flybridge' | 'skydeck'

const Models = () => {
	const [shownModel, setShownModel] = useState<ShownModel>('both')

	function handleShowNext() {
		if (shownModel === 'both') {
			setShownModel('skydeck')
		} else if (shownModel === 'flybridge') {
			setShownModel('skydeck')
		} else {
			setShownModel('flybridge')
		}
	}

	useEffect(() => {
		if (window.innerWidth < 900) {
			setShownModel('flybridge')
		}

		const onResize = () => {
			if (window.innerWidth < 900) {
				setShownModel('flybridge')
			}
		}

		window.addEventListener('resize', () => {
			onResize()
		})

		return () => {
			window.removeEventListener('resize', () => {
				onResize()
			})
		}
	}, [])

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Our models</h2>
			<div className={styles['models-wrapper']}>
				<div className={styles.models}>
					{(shownModel === 'both' || shownModel === 'flybridge') && (
						<ModelItem
							title="Flybirdge"
							description="The flybridge is currently considered to be the smallest of the small boats manufactured by KINGDOM MARINE. This model offers an innovative beach mode."
							linkToConfigurator={AppRoutes.FLYBRIDGE_CONFIGURATOR}
							linkToReadMore="/"
							img="../../../../../../images/MainPage/flybridge.png"
						/>
					)}

					{(shownModel === 'both' || shownModel === 'skydeck') && (
						<ModelItem
							title="Skydeck"
							description="Skydeck is the second largest small boat manufactured by KINGDOM MARINE. This model has an innovative upper deck design"
							linkToConfigurator={AppRoutes.SKYDECK_CONFIGURATOR}
							linkToReadMore="/"
							img="../../../../../../images/MainPage/skydeck.png"
						/>
					)}
				</div>

				<div className={styles['show-next-btn-wrapper']}>
					<button className={styles['show-next-btn']} onClick={handleShowNext}>
						<span>Show next</span>
						<ArrowIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Models
