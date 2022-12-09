import { observer, useLocalObservable } from 'mobx-react-lite'
import { InputModel } from '../../../../../models/InputModel'
import Input from '../../UI/Input'
import SectionHeader from '../../UI/SectionHeader'
import Textarea from '../../UI/Textarea'
import styles from './Form.module.scss'

const Form = () => {
	const initialForm = {
		firstName: InputModel.create('').required(),
		lastName: InputModel.create(''),
		city: InputModel.create(''),
		address: InputModel.create(''),
		phone: InputModel.create('').required(),
		email: InputModel.create('').required(),
		comment: InputModel.create('')
	}

	const form = useLocalObservable(() => initialForm)

	const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()

		let isFormValid = true

		Object.keys(form).forEach(key => {
			if (form[key as keyof typeof form].validate()) {
				isFormValid = false
			}
		})

		if (!isFormValid) return

		Object.assign(form, initialForm)
	}

	return (
		<div className={styles.container}>
			<SectionHeader>Submit an application</SectionHeader>
			<form className={styles.form}>
				<Input placeholder="Your name:" model={form.firstName} />
				<Input placeholder="Your last name:" model={form.lastName} />
				<Input placeholder="Your city/region:" model={form.city} />
				<Input placeholder="Address:" model={form.address} />
				<Input placeholder="+7 (---) --- -- --" model={form.phone} />
				<Input placeholder="Email:" model={form.email} />
				<Textarea placeholder="Comment:" model={form.comment} />

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
