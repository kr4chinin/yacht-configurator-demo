import { FC } from 'react'
import styles from './PrimaryRadioInput.module.scss'

interface PrimaryRadioInputProps {
	id: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	checked: boolean
}

const PrimaryRadioInput: FC<PrimaryRadioInputProps> = ({
	checked,
	id,
	onChange,
	value
}) => {
	return (
		<input
			id={id}
			className={styles['primary-radio-input']}
			type="radio"
			value={value}
			onChange={onChange}
			checked={checked}
		/>
	)
}

export default PrimaryRadioInput
