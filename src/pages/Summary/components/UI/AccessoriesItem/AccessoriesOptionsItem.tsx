import { FC, useId } from 'react'
import LoadableImage from '../../../../../components/LoadableImage/LoadableImage'
import styles from './AccessoriesOptionsItem.module.scss'
import { ReactComponent as QuestionIcon } from '../../../../../assets/icons/question.svg'
import { Tooltip } from 'react-tooltip'
import { currencyFormatter } from '../../../../../models/CurrencyFormatter'

interface AccessoriesOptionsItemProps {
	img: string
	alt: string
	name: string
	description: string
  price: number
}

const AccessoriesOptionsItem: FC<AccessoriesOptionsItemProps> = ({
	alt,
	img,
	name,
	description,
  price
}) => {
	const id = useId()

	return (
		<div className={styles.container}>
			<div className={styles['image-wrapper']}>
				<LoadableImage alt={alt} src={img} />
			</div>

			<div className={styles['icon-wrapper']} id={id}>
				<QuestionIcon />
			</div>

			<Tooltip anchorId={id} place="top">
				<div className={styles.description}>
          {description}

          <div className={styles.price}>{currencyFormatter.format(price)}</div>
        </div>
			</Tooltip>
		</div>
	)
}

export default AccessoriesOptionsItem
