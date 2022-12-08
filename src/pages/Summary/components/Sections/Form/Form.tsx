import { observer, useLocalObservable } from 'mobx-react-lite'
import Input from '../../UI/Input'
import SectionHeader from '../../UI/SectionHeader'
import Textarea from '../../UI/Textarea'
import styles from './Form.module.scss'
import { toJS } from 'mobx'

interface Form {
	firstName: string
	lastName: string
	city: string
	address: string
	phone: string
	email: string
	comment: string
}

const initialForm: Form = {
	firstName: '',
	lastName: '',
	city: '',
	address: '',
	phone: '',
	email: '',
	comment: ''
}

const Form = () => {
	const form = useLocalObservable(() => initialForm)

	const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
		for (const key in form) {
			if (form[key as keyof Form] === '') {
				return
			}
		}

		console.log('Submitted form', toJS(form))

		Object.assign(form, initialForm)
	}

	return (
		<div className={styles.container}>
			<SectionHeader>Submit an application</SectionHeader>
			<form className={styles.form}>
				<Input
					placeholder="Your name:"
					value={form.firstName}
					setValue={value => {
						form.firstName = value
					}}
				/>
				<Input
					placeholder="Your last name:"
					value={form.lastName}
					setValue={value => {
						form.lastName = value
					}}
				/>
				<Input
					placeholder="Your city/region:"
					value={form.city}
					setValue={value => {
						form.city = value
					}}
				/>
				<Input
					placeholder="Address:"
					value={form.address}
					setValue={value => {
						form.address = value
					}}
				/>
				<Input
					placeholder="+7 (---) --- -- --"
					value={form.phone}
					setValue={value => {
						form.phone = value
					}}
				/>
				<Input
					placeholder="Email:"
					value={form.email}
					setValue={value => {
						form.email = value
					}}
				/>
				<Textarea
					placeholder="Comment:"
					value={form.comment}
					setValue={value => {
						form.comment = value
					}}
				/>

				<button
					type="submit"
					className={styles['submit-btn']}
					onClick={onSubmit}
				>
					<span>Design</span>
				</button>
			</form>
		</div>
	)
}

export default observer(Form)
