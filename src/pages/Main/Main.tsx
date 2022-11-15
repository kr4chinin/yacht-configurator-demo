import styles from './Main.module.scss'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../utils/Routes'
import Navbar from './components/Sections/Navbar'

const Main = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<Navbar />
		</div>
	)
}

export default Main
