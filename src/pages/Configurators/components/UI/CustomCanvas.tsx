import { Canvas } from '@react-three/fiber'
import { FC } from 'react'

interface CustomCanvasProps {
	children: React.ReactNode
}

const CustomCanvas: FC<CustomCanvasProps> = ({ children }) => {
	return (
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
			{children}
		</Canvas>
	)
}

export default CustomCanvas
