import styles from './Item.module.scss'
import { Option } from '../../../../../../../types/Option'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import cn from 'classnames'

interface ItemProps {
	option: Option
}

const Item: FC<ItemProps> = ({ option }) => {
	const location = useLocation()

	return (
		<li
			className={cn(styles.container, {
				[styles.active]: location.pathname === option.payload
			})}
			onClick={option.onClick}
		>
			{option.title}
		</li>
	)
}

export default Item
