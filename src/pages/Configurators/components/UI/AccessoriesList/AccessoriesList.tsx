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
	const [accessories] = useState<Accessory[]>(mockAccessories)

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
		name: 'Lorem Ipsum',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 2,
		name: 'Dolor Santes',
		price: 5000,
		image:
			'https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 3,
		name: 'Qero Aueros',
		price: 2000,
		image:
			'https://images.unsplash.com/photo-1616207133639-cd5e4db9859f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 4,
		name: 'Santa Ferrala',
		price: 1000,
		image:
			'https://images.unsplash.com/photo-1628336704853-9e8c932ac8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 5,
		name: 'Lorem Dolor',
		price: 2050,
		image:
			'https://images.unsplash.com/photo-1610306673750-b6dbfee4d301?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 6,
		name: 'Dolor Ipsum',
		price: 1000,
		image:
			'https://images.unsplash.com/photo-1570422774250-c951ec3ef74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 7,
		name: 'Ipsum Santes',
		price: 2000,
		image:
			'https://images.unsplash.com/photo-1569282066844-679ec34e3416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 8,
		name: 'Query Tualka',
		price: 2000,
		image:
			'https://materialyinfo.ru/wp-content/uploads/2017/12/yahtnyiy-lak-40.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	},
	{
		id: 9,
		name: 'Amabera Santes',
		price: 2000,
		image:
			'https://images.unsplash.com/photo-1599582297450-33ad41d26df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quia, sit quas libero nam.'
	}
]
