import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
	placeholder: string
	value: string
	setValue: (value: string) => void
}

const Input: FC<InputProps> = ({ placeholder, value, setValue }) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return (
		<input
			placeholder={placeholder}
			className={styles.container}
			value={value}
			onChange={onChange}
		/>
	)
}

export default observer(Input)
