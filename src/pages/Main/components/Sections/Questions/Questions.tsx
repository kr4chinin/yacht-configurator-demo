import Footer from '../Footer'
import styles from './Questions.module.scss'
import QuestionList from '../QuestionList'

const questions = [
	{
		id: 1,
		title: 'How to place an order?',
		text: 'Our website has a section with a choice of models, after you select all the necessary elements in the web configurator, leave a feedback request.'
	},
	{
		id: 2,
		title: 'Where can I find contact information?',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iusto! Sunt quis eligendi sit beatae.'
	},
	{
		id: 3,
		title: 'What should I do after building a request?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem magni dolore dolor nobis modi, molestias veniam, exercitationem est voluptatibus quam quis, voluptatum voluptates odio eligendi?'
	},
	{
		id: 4,
		title: 'How long does one project take to build?',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti labore eaque cupiditate ducimus, quae quo unde impedit tempore sequi nam quaerat! Hic eius magni laboriosam perspiciatis. A odio repudiandae assumenda, pariatur explicabo minus sed dolores ducimus quos non ipsam porro.'
	},
	{
		id: 5,
		title: 'I am not in Moscow, what about delivery?',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum vel dolor deleniti repellat temporibus quaerat. Accusantium, nesciunt, fuga dolor eos similique eaque quisquam nulla reiciendis voluptas et commodi animi odit.'
	}
]

const Questions = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>FAQ</div>
			<span className={styles.annotation}>
				Have questions? We’re here to help
			</span>
			<QuestionList questions={questions} />
			<Footer />
		</div>
	)
}

export default Questions
