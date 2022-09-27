import { useState } from 'react'
import AccessoriesItem from '../AccessoriesItem'
import styles from './AccessoriesList.module.scss'

export type Accessory = {
	id: number
	name: string
	price: number
	image: string
    description: string
}

const AccessoriesList = () => {
	const [accessories, setAccessories] = useState<Accessory[]>(mockAccessories)

	return (
		<div className={styles.container}>
			{accessories.map(accessory => (
				<AccessoriesItem key={accessory.id} accessory={accessory} />
			))}
		</div>
	)
}

export default AccessoriesList

const mockAccessories = [
	{
		id: 1,
		name: 'Accessory 1',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 2,
		name: 'Accessory 2',
		price: 5000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 3,
		name: 'Accessory 3',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 4,
		name: 'Accessory 4',
		price: 1000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 5,
		name: 'Accessory 5',
		price: 2050,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 6,
		name: 'Accessory 6',
		price: 1000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 7,
		name: 'Accessory 7',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 8,
		name: 'Accessory 8',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 9,
		name: 'Accessory 9',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	},
	{
		id: 10,
		name: 'Accessory 10',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor santes helvetica neue'
	}
]
