import { FC, useId } from 'react'
import { Variant } from '../../../../../types/Variant'
import styles from './PrimaryVariantsItem.module.scss'

interface PrimaryVariantsItemProps {
    variant: Variant
}

const PrimaryVariantsItem: FC<PrimaryVariantsItemProps> = ({variant}) => {

    const id = useId()

    function handleChange() {
        variant.onClick()
    }

    return (
        <div className={styles.container}>
            <input type="radio" name="primary-variant" id={id} onChange={handleChange}/>
            <label htmlFor={id}>{variant.title}</label>
        </div>
    )
}

export default PrimaryVariantsItem