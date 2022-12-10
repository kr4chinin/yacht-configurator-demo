import { observer } from 'mobx-react-lite'
import Navbar from '../Common/Navbar'
import Cart from './components/Sections/Cart'
import Form from './components/Sections/Form'
import styles from './FlybridgeSummary.module.scss'

const FlybridgeSummary = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<Form />
			<Cart />
		</div>
	)
}

export default observer(FlybridgeSummary)
