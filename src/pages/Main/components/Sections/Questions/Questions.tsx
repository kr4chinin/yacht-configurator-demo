import Footer from '../Footer'
import styles from './Questions.module.scss'
import QuestionList from '../QuestionList'

const Questions = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>FAQ</div>
			<span className={styles.annotation}>
				Have questions? We’re here to help
			</span>
      <QuestionList />
			<Footer />
		</div>
	)
}

export default Questions
