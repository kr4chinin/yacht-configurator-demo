import styles from './CustomCanvas.module.scss'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import CustomOrbitControls from '../../UI/CustomOrbitControls'
import OceanElement from '../../UI/OceanElement'
import SkyElement from '../../UI/SkyElement'

interface CustomCanvasProps {
	children: React.ReactNode
}

const CustomCanvas: FC<CustomCanvasProps> = ({ children }) => {
	return (
		<div className={styles['canvas-container']}>
			<Canvas
				camera={{ position: [0, 3, 5] }}
				onMouseEnter={() => {
					document.body.style.cursor = 'grab'
				}}
				onMouseDown={() => {
					document.body.style.cursor = 'grabbing'
				}}
				onMouseUp={() => {
					document.body.style.cursor = 'grab'
				}}
				onMouseLeave={() => {
					document.body.style.cursor = 'default'
				}}
			>
				<SkyElement />
				<OceanElement />
				<CustomOrbitControls />
				{children}
			</Canvas>
		</div>
	)
}

export default CustomCanvas
