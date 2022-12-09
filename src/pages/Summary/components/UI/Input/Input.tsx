import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { InputModel } from '../../../../../models/InputModel'
import styles from './Input.module.scss'
import cn from 'classnames'

interface InputProps {
	placeholder: string
	model: InputModel
}

const Input: FC<InputProps> = ({ placeholder, model }) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		model.setValue(e.target.value)
	}

	return (
		<input
			placeholder={placeholder}
			className={cn(styles.container, { [styles.invalid]: !model.isValid })}
			value={model.value}
			onChange={onChange}
		/>
	)
}

export default observer(Input)
