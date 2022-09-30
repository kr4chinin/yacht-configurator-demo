import { FC } from 'react'
import { Variant } from '../../../../../types/Variant'
import PrimaryVariantsItem from '../PrimaryVariantsItem'
import styles from './PrimaryVariantsList.module.scss'

interface PrimaryVariantsListProps {
	variants: Variant[]
}

const PrimaryVariantsList: FC<PrimaryVariantsListProps> = ({ variants }) => {
	return (
		<div className={styles.container}>
			{variants.map(variant => (
				<PrimaryVariantsItem variant={variant} key={variant.id} />
			))}
		</div>
	)
}

export default PrimaryVariantsList
