import { FC } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import { currencyFormatter } from '../../../../../models/CurrencyFormatter'
import DelimiterIcon from '../DelimiterIcon'
import OptionHeader from '../OptionHeader'
import styles from './OptionsItem.module.scss'

interface OptionsItemProps {
	title: string
	name: string
	price: number
	img: string
	alt: string
}

const OptionsItem: FC<OptionsItemProps> = ({
	title,
	name,
	price,
	img,
	alt
}) => {
	return (
		<div className={styles.container}>
			<div className={styles['info-block']}>
				<OptionHeader>{title}</OptionHeader>
				<h5 className={styles.name}>{name}</h5>
				<p className={styles.price}>{currencyFormatter.format(price)}</p>
			</div>

      <DelimiterIcon />

			<div className={styles['image-wrapper']}>
				<LoadableImage src={img} alt={alt} />
			</div>
		</div>
	)
}

export default OptionsItem
