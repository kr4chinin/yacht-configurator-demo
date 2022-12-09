import { FC } from 'react'
import styles from './Textarea.module.scss'
import { observer } from 'mobx-react-lite'
import { InputModel } from '../../../../../models/InputModel'

interface TextareaProps {
	placeholder: string
	model: InputModel
}

const Textarea: FC<TextareaProps> = ({ placeholder, model }) => {
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		model.setValue(e.target.value)
	}

	return (
		<textarea
			className={styles.container}
			placeholder={placeholder}
			value={model.value}
			onChange={onChange}
		/>
	)
}

export default observer(Textarea)
