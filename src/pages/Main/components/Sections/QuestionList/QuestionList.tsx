import styles from './QuestionList.module.scss'
import { ReactComponent as SearchLensIcon } from '../../../../../assets/icons/search-lens.svg'
import QuestionItem from '../../UI/QuestionItem'
import { FC } from 'react'

export interface Question {
	id: number
	title: string
	text: string
}

interface QuestionListProps {
	questions: Question[]
}

const QuestionList: FC<QuestionListProps> = ({ questions }) => {
	return (
		<div className={styles.container}>
			<div className={styles['search-block']}>
				<input
					className={styles.search}
					placeholder="Type your question here..."
				/>
				<div className={styles['search-icon-wrapper']}>
					<SearchLensIcon />
				</div>
			</div>

			<div className={styles['questions-block']}>
				{questions.map(question => (
					<QuestionItem key={question.id} question={question} />
				))}
			</div>
		</div>
	)
}

export default QuestionList
