import styles from './QuestionList.module.scss'
import { ReactComponent as SearchLensIcon } from '../../../../../assets/icons/search-lens.svg'
import QuestionItem from '../../UI/QuestionItem'

const QuestionList = () => {
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
				<QuestionItem
					title="How to place an order? "
					text="Our website has a section with a choice of models, after you select all the necessary elements in the web configurator, leave a feedback request."
				/>
				<QuestionItem
					title="Where can I find contact information?"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iusto! Sunt quis eligendi sit beatae."
				/>
				<QuestionItem
					title="How long does one project take to build?"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente porro laudantium consequuntur eligendi laborum, dolores quam tenetur nesciunt dignissimos!"
				/>
			</div>
		</div>
	)
}

export default QuestionList
