import { FC } from "react"
import Portal from "../../../../../components/Portal"
import styles from './AccessoriesPopup.module.scss'

interface AccessoriesPopupProps {
    isOpened: boolean
    onClose: () => void
}

const AccessoriesPopup: FC<AccessoriesPopupProps> = ({isOpened, onClose}) => {

    function handleStopPropagation(e: React.MouseEvent) {
        e.stopPropagation()
    }

    if (!isOpened) {
        return null
    }

    return (
        <Portal onClose={onClose}>
            <div className={styles.container} onClick={onClose} role='button' tabIndex={0}>
                <div className={styles.content} onClick={handleStopPropagation}>
                    There will be some accessories...
                </div>
            </div>
        </Portal>
    )
}

export default AccessoriesPopup