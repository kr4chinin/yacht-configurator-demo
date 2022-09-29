import styles from './PageLoadingIndicator.module.scss'
import { ThreeDots } from 'react-loader-spinner'

const PageLoadingIndicator = () => {
	return (
		<div className={styles.container}>
			<ThreeDots color="rgb(57, 60, 93)" />
		</div>
	)
}

export default PageLoadingIndicator
