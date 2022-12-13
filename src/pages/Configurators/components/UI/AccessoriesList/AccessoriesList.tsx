import { useEffect } from 'react'
import { v4 } from 'uuid'
import { flybridgeAccessoriesStore } from '../../../../../stores/YachtAccessoriesStore'
import AccessoriesItem from '../AccessoriesItem'
import styles from './AccessoriesList.module.scss'
import { observer } from 'mobx-react-lite'
import { Accessories } from '../../../../../utils/urls/Accessories'

export type Accessory = {
	id: number
	name: string
	price: number
	image: string
	description: string
}

const AccessoriesList = () => {
	useEffect(() => {
		function initAccessories() {
			flybridgeAccessoriesStore.addAccessoryOption({
				id: v4(),
				title: 'Warranty, 12 month',
				price: 50000,
				selected: false,
				image: Accessories.WARRANTY_12_MONTH,
				description: 'Free maintenance for 12 months for your vessel.'
			})

			flybridgeAccessoriesStore.addAccessoryOption({
				id: v4(),
				title: 'Warranty, 24 month',
				price: 90000,
				selected: false,
				image: Accessories.WARRANTY_24_MONTH,
				description: 'Free maintenance for 24 months for your vessel.'
			})

			flybridgeAccessoriesStore.addAccessoryOption({
				id: v4(),
				title: 'Yacht Education',
				price: 10000,
				selected: false,
				image: Accessories.YACHT_EDUCATION,
				description:
					'The opportunity to be trained in one of the yacht schools in our country. You will receive tremendous experience of yacht management and international certificate of a shipmaster.'
			})

			flybridgeAccessoriesStore.addAccessoryOption({
				id: v4(),
				title: 'Harman-Kardon AS',
				price: 7000,
				selected: false,
				image: Accessories.HARMAN_KARDON_AS,
				description:
					'Premium audio sound system Harman-Kardon which will be installed on your yacht.'
			})

			flybridgeAccessoriesStore.addAccessoryOption({
				id: v4(),
				title: 'Сeremonial Launch',
				price: 5000,
				selected: false,
				image: Accessories.CEREMONIAL_LAUNCH,
				description:
					'Gala launch of your new yacht. The ceremony is held entirely at the expense of our company.'
			})

			flybridgeAccessoriesStore.addAccessoryOption({
				id: v4(),
				title: '«Silence» Packet',
				price: 10000,
				selected: false,
				image: Accessories.SILENCE_PACKET,
				description:
					'All guest cabins have enlarged portholes (90 x 70 cm) with 18mm laminated glass in accordance with class rules and 42mm double-glazed inner air chamber. As a result, heat and noise transfer is greatly reduced.'
			})

			flybridgeAccessoriesStore.addAccessoryOption({
				id: v4(),
				title: 'Underwater Rover',
				price: 10000,
				selected: false,
				image: Accessories.UNDERWATER_ROVER,
				description:
					'Underwater, remotely operated OpenROV v2.8 Kit Pro Bundle robot explorer. The kit includes an upgraded camera with crystal-clear images and browser data recording.'
			})
		}

		if (flybridgeAccessoriesStore.accessories.length === 0) {
			initAccessories()
		}
	}, [])

	return (
		<div className={styles.container}>
			{flybridgeAccessoriesStore.accessories.map(accessory => (
				<AccessoriesItem key={accessory.id} accessory={accessory} />
			))}
		</div>
	)
}

export default observer(AccessoriesList)
