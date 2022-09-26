import styles from './Main.module.scss'
import { useNavigate } from 'react-router-dom'

const Main = () => {

    const navigate = useNavigate()

    function handleNavigateToConfigurator() {
        navigate('/configurator')
    }

    return (
        <div className={styles.container}>
            <button onClick={handleNavigateToConfigurator}>Open configurator</button>
        </div>
    )
}

export default Main