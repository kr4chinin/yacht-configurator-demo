import { FC } from 'react'
import styles from './Textarea.module.scss'
import { observer } from 'mobx-react-lite'

interface TextareaProps {
	placeholder: string
	value: string
	setValue: (value: string) => void
}

const Textarea: FC<TextareaProps> = ({ placeholder, value, setValue }) => {
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value)
	}

	return (
		<textarea
			className={styles.container}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

export default observer(Textarea)
