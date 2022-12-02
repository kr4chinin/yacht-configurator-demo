import { FC } from 'react'
import { Option } from '../../../../../types/Option'
import Item from '../Item'
import styles from './List.module.scss'

interface ListProps {
	options: Option[]
}

const List: FC<ListProps> = ({ options }) => {
	return (
		<ul className={styles.container}>
			{options.map((option, index) => (
				<Item key={index} option={option} />
			))}
		</ul>
	)
}

export default List
