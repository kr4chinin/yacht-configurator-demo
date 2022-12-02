import styles from './Item.module.scss'
import { Option } from '../../../../../types/Option'
import { FC } from 'react'

interface ItemProps {
	option: Option
}

const Item: FC<ItemProps> = ({ option }) => {
	return (
		<li className={styles.container} onClick={option.onClick}>
			{option.title}
		</li>
	)
}

export default Item
