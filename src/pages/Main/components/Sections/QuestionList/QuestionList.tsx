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
					title="What should I do after building a request?"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem magni dolore dolor nobis modi, molestias veniam, exercitationem est voluptatibus quam quis, voluptatum voluptates odio eligendi?"
				/>
				<QuestionItem
					title="How long does one project take to build?"
					text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti labore eaque cupiditate ducimus, quae quo unde impedit tempore sequi nam quaerat! Hic eius magni laboriosam perspiciatis. A odio repudiandae assumenda, pariatur explicabo minus sed dolores ducimus quos non ipsam porro."
				/>
				<QuestionItem
					title="I am not in Moscow, what about delivery?"
					text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum vel dolor deleniti repellat temporibus quaerat. Accusantium, nesciunt, fuga dolor eos similique eaque quisquam nulla reiciendis voluptas et commodi animi odit."
				/>
			</div>
		</div>
	)
}

export default QuestionList
