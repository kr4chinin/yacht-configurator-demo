import { useFrame } from '@react-three/fiber'
import { Group, Mesh } from 'three'
import { FC, memo } from 'react'
import { stainlessSteelMaterial0 } from '../../../../../utils/materials/flybridge/materials_0'
import { andesiteMaterial1 } from '../../../../../utils/materials/flybridge/materials_1'
import { andesiteMaterial2 } from '../../../../../utils/materials/flybridge/materials_2'
import { oakPlanksMaterial3 } from '../../../../../utils/materials/flybridge/materials_3'
import { andesiteMaterial4 } from '../../../../../utils/materials/flybridge/materials_4'
import { bourbonLeatherMaterial5 } from '../../../../../utils/materials/flybridge/materials_5'
import { andesiteMaterial6 } from '../../../../../utils/materials/flybridge/materials_6'
import { clearGlassMaterial7 } from '../../../../../utils/materials/flybridge/materials_7'
import { stainlessSteelMaterial8 } from '../../../../../utils/materials/flybridge/materials_8'
import { clearGlassMaterial9 } from '../../../../../utils/materials/flybridge/materials_9'
import { blackSapphireMaterial10 } from '../../../../../utils/materials/flybridge/materials_10'

interface FlybridgeModelProps {
	model: Group
}

const FlybridgeModel: FC<FlybridgeModelProps> = ({ model }) => {
	// ; в начале строки - это просто приведение к типу void, тут оно необхоимо, чтобы не было ошибки

	// Железная огранка по периметру (Siderails & Portlights)
	;(model.children[0] as Mesh).material = stainlessSteelMaterial0

	// Стойка руля (Throttle & steering wheel)
	;(model.children[1] as Mesh).material = andesiteMaterial1

	// Фендеры (Fender)
	;(model.children[2] as Mesh).material = andesiteMaterial2

	// Пол (Cockpit floor)
	;(model.children[3] as Mesh).material = oakPlanksMaterial3

	// Корпус (Sides)
	;(model.children[4] as Mesh).material = andesiteMaterial4

	// Сиденья на палубе и столы (Couch)
	;(model.children[5] as Mesh).material = bourbonLeatherMaterial5

	// Козырек (Flybridge Visor)
	;(model.children[6] as Mesh).material = andesiteMaterial6

	// Окна (Windows)
	;(model.children[7] as Mesh).material = clearGlassMaterial7

	// Каемка вокруг яхты снизу (Counter)
	;(model.children[8] as Mesh).material = stainlessSteelMaterial8

	// Иллюминаторы (Illuminators)
	;(model.children[9] as Mesh).material = clearGlassMaterial9

	// Стол и некоторый интерьер внутри корпуса (Cockpit steering wheel)
	;(model.children[10] as Mesh).material = blackSapphireMaterial10

	// Позиционируем и анимируем яхту
	model.scale.set(0.0125, 0.0125, 0.0125)
	model.position.set(0, 1.25, 0)
	model.rotation.set(0, 0, 0)

	useFrame(state => {
		model.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05 + 1.25
		model.position.z = Math.cos(state.clock.getElapsedTime()) * 0.05
		model.rotation.y += 0.0005
	})

	return <primitive object={model} />
}

export default memo(FlybridgeModel)
