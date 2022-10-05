import { FC, memo } from 'react'
import styles from './PrimaryHr.module.scss'

interface PrimaryHrProps {
	height?: string
	width?: string
	marginTop?: string
	marginBottom?: string
    border?: string
}

const PrimaryHr: FC<PrimaryHrProps> = ({
	height = '2px',
	width = '100%',
	marginTop = '15px',
	marginBottom = '30px',
    border = 'none'
}) => {
	return (
		<hr
			className={styles['primary-hr']}
			style={{
                border: border,
				height: height,
				width: width,
				marginTop: marginTop,
				marginBottom: marginBottom
			}}
		/>
	)
}

export default memo(PrimaryHr)
