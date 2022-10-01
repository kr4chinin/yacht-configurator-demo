import { useFrame } from '@react-three/fiber'
import { Group, Mesh } from 'three'
import { FC, memo } from 'react'
import { initialMaterial0 } from '../../../../../utils/materials/flybridge/materials[0]'
import { initialMaterial1 } from '../../../../../utils/materials/flybridge/materials[1]'
import { initialMaterial2 } from '../../../../../utils/materials/flybridge/materials[2]'
import { initialMaterial3 } from '../../../../../utils/materials/flybridge/materials[3]'
import { initialMaterial4 } from '../../../../../utils/materials/flybridge/materials[4]'
import { initialMaterial5 } from '../../../../../utils/materials/flybridge/materials[5]'
import { initialMaterial6 } from '../../../../../utils/materials/flybridge/materials[6]'
import { initialMaterial7 } from '../../../../../utils/materials/flybridge/materials[7]'
import { initialMaterial8 } from '../../../../../utils/materials/flybridge/materials[8]'
import { initialMaterial9 } from '../../../../../utils/materials/flybridge/materials[9]'
import { initialMaterial10 } from '../../../../../utils/materials/flybridge/materials[10]'

interface FlybridgeModelProps {
	model: Group
}

const FlybridgeModel: FC<FlybridgeModelProps> = ({ model }) => {
	// ; в начале строки - это просто приведение к типу void, тут оно необхоимо, чтобы не было ошибки

	// Железная огранка по периметру
	;(model.children[0] as Mesh).material = initialMaterial0

	// Стойка руля
	;(model.children[1] as Mesh).material = initialMaterial1

	// Светильники на палубе
	;(model.children[2] as Mesh).material = initialMaterial2

	// Пол
	;(model.children[3] as Mesh).material = initialMaterial3

	// Корпус
	;(model.children[4] as Mesh).material = initialMaterial4

	// Сиденья на палубе и столы
	;(model.children[5] as Mesh).material = initialMaterial5

	// Козырек
	;(model.children[6] as Mesh).material = initialMaterial6

	// Окна
	;(model.children[7] as Mesh).material = initialMaterial7

	// Каемка вокруг яхты снизу
	;(model.children[8] as Mesh).material = initialMaterial8

	// Окна в корпусе
	;(model.children[9] as Mesh).material = initialMaterial9

	// Стол и некоторый интерьер внутри корпуса
	;(model.children[10] as Mesh).material = initialMaterial10

	// Позиционируем и анимируем яхту
	model.scale.set(0.0125, 0.0125, 0.0125)
	model.position.set(0, 1.25, 0)
	model.rotation.set(0, 0, 0)

	useFrame(state => {
		model.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05 + 1.25
		model.rotation.y += 0.0005
	})

	return <primitive object={model} />
}

export default memo(FlybridgeModel)
