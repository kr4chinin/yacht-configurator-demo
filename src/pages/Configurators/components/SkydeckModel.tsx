import { useFrame } from '@react-three/fiber'
import { Group, Mesh, MeshNormalMaterial } from 'three'
import { FC } from 'react'
import { initialMaterial as initialMaterial0 } from '../../../utils/materials/flybridge/materials[0]'
import { initialMaterial as initialMaterial1 } from '../../../utils/materials/flybridge/materials[1]'
import { initialMaterial as initialMaterial2 } from '../../../utils/materials/flybridge/materials[2]'
import { initialMaterial as initialMaterial3 } from '../../../utils/materials/flybridge/materials[3]'
import { initialMaterial as initialMaterial4 } from '../../../utils/materials/flybridge/materials[4]'
import { initialMaterial as initialMaterial5 } from '../../../utils/materials/flybridge/materials[5]'
import { initialMaterial as initialMaterial6 } from '../../../utils/materials/flybridge/materials[6]'
import { initialMaterial as initialMaterial7 } from '../../../utils/materials/flybridge/materials[7]'
import { initialMaterial as initialMaterial8 } from '../../../utils/materials/flybridge/materials[8]'

interface SkydeckModelProps {
	model: Group
}

const SkydeckModel: FC<SkydeckModelProps> = ({ model }) => {
	// ; в начале строки - это просто приведение к типу void, тут оно необхоимо, чтобы не было ошибки

    /* Корпус и окна */

    // Главные окна и виндшилд сверху
    ; (model.children[0].children[0] as Mesh).material = initialMaterial7
    // Корпус
    ; (model.children[0].children[1] as Mesh).material = initialMaterial8
    // Низ мостика сзади
    ; (model.children[0].children[2] as Mesh).material = initialMaterial6
    // Небольшие детали корпуса внутри яхты по бокам ()
    ; (model.children[0].children[3] as Mesh).material = initialMaterial1

    /* Лестница и верхняя часть корпуса */

    // Лестница
    ; (model.children[1].children[0] as Mesh).material = initialMaterial2
    // Верхняя часть корпуса
    ; (model.children[1].children[1] as Mesh).material = initialMaterial3

    /* Перила */ 
    ; (model.children[2].children[0] as Mesh).material = initialMaterial0

    /* Палуба */
    ; (model.children[3].children[0] as Mesh).material = initialMaterial3

    /* Задняя часть корпуса */

    // Большая часть задней части корпуса
    ; (model.children[4].children[0] as Mesh).material = initialMaterial8
    // Прямоугольный люк внутрь корпуса
    ; (model.children[4].children[1] as Mesh).material = initialMaterial4

    /* Верхняя часть яхты */

    // Крыша
    ; (model.children[5].children[0] as Mesh).material = initialMaterial8
    // Передняя часть верхней части
    ; (model.children[5].children[1] as Mesh).material = initialMaterial1
    // Рубка управления
    ; (model.children[5].children[2] as Mesh).material = initialMaterial4

    /* Антенны на крыше */

    // Большая
    ; (model.children[5].children[3].children[0] as Mesh).material = initialMaterial1
    // Маленькая
    ; (model.children[5].children[3].children[1] as Mesh).material = initialMaterial5

    /* Интерьер */

    // Стол
    ; (model.children[6].children[0] as Mesh).material = initialMaterial1
    // Диван снаружи
    ; (model.children[6].children[1] as Mesh).material = initialMaterial5
    // Стены внутри
    ; (model.children[6].children[2] as Mesh).material = initialMaterial5
    // Рама входа внутрь
    ; (model.children[6].children[3] as Mesh).material = initialMaterial1

	// Позиционируем и анимируем яхту
	model.scale.set(0.08, 0.08, 0.08)
	model.position.set(0, 0, 0)
	model.rotation.set(0, 0, 0)

	useFrame(() => {
		model.rotation.y += 0.001
	})

	return <primitive object={model} />
}

export default SkydeckModel
