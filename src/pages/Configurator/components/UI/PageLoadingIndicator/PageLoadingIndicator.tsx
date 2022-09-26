import styles from './PageLoadingIndicator.module.scss'
import {Radio} from 'react-loader-spinner'

const PageLoadingIndicator = () => {
    return (
        <div className={styles.container}>
            <Radio />
        </div>
    )
}

export default PageLoadingIndicator