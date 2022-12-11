import { FC } from 'react'
import styles from './AccessoriesOptionsItem.module.scss'

interface AccessoriesOptionsItemProps {
  img: string
  alt: string
}

const AccessoriesOptionsItem: FC<AccessoriesOptionsItemProps> = ({alt, img}) => {
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default AccessoriesOptionsItem