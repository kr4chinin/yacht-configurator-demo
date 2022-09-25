import { materials } from '../utils/materials'
import { useFrame } from '@react-three/fiber'
import { Group, Material, Mesh } from 'three'
import { FC } from 'react'

interface YachtModelProps {
	model: Group
}

const YachtModel: FC<YachtModelProps> = ({ model }) => {
	// ; в начале строки - это просто приведение к типу void

	// Железная огранка по периметру
	;(model.children[0] as Mesh).material = materials.steel

	// Стойка руля
	;(model.children[1] as Mesh).material = materials.steel

	// Светильники на палубе
	;(model.children[2] as Mesh).material = materials.oilSlick

	// Пол
	;(model.children[3] as Mesh).material = materials.floorWood

	// Корпус
	;(model.children[4] as Mesh).material = materials.water

	// Сиденья на палубе и столы
	;(model.children[5] as Mesh).material = materials.lightLeather

	// Козырек
	;(model.children[6] as Mesh).material = materials.steel

	// Окна
	;(model.children[7] as Mesh).material = materials.glass

	// Делаем окна прозрачными
	;((model.children[7] as Mesh).material as Material).transparent = true
	;((model.children[7] as Mesh).material as Material).opacity = 0.75

	// Каемка вокруг яхты снизу
	;(model.children[8] as Mesh).material = materials.steelSecondary

	// Окна в корпусе
	;(model.children[9] as Mesh).material = materials.glass

	// Стол и некоторый интерьер внутри корпуса
	;(model.children[10] as Mesh).material = materials.lightLeather

	// Позиционируем и анимируем яхту
	model.scale.set(0.0125, 0.0125, 0.0125)
	model.position.set(0, 0, 0)
	model.rotation.set(0, 0, 0)

	useFrame(() => {
		model.rotation.y += 0.001
	})

	return <primitive object={model} />
}

export default YachtModel
