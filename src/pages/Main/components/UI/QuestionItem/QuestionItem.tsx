import { FC, useState } from 'react'
import styles from './QuestionItem.module.scss'
import { ReactComponent as FoldIcon } from '../../../../../assets/icons/fold.svg'
import { ReactComponent as UnfoldIcon } from '../../../../../assets/icons/unfold.svg'

interface QuestionItemProps {
	title: string
	text: string
}

const QuestionItem: FC<QuestionItemProps> = ({ text, title }) => {
	const [isFolded, setIsFolded] = useState(false)

	function toggleFold() {
		setIsFolded(prev => !prev)
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles['fold-icon-wrapper']} onClick={toggleFold}>
					{isFolded ? <UnfoldIcon /> : <FoldIcon />}
				</div>
				<div className={styles.title} onClick={toggleFold}>
					{title}
					{isFolded && <div className={styles.content}>{text}</div>}
				</div>
			</div>
			<hr />
		</div>
	)
}

export default QuestionItem
