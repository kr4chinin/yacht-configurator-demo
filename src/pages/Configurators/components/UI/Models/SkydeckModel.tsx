import { useFrame } from '@react-three/fiber'
import { Group, Mesh } from 'three'
import { FC } from 'react'
interface SkydeckModelProps {
	model: Group
}

const SkydeckModel: FC<SkydeckModelProps> = ({ model }) => {
	// ; в начале строки - это просто приведение к типу void, тут оно необхоимо, чтобы не было ошибки

	// /* Корпус и окна */

	// // Главные окна и виндшилд сверху
	// ;(model.children[0].children[0] as Mesh).material = initialMaterial7
	// // Корпус
	// ;(model.children[0].children[1] as Mesh).material = initialMaterial8
	// // Низ мостика сзади
	// ;(model.children[0].children[2] as Mesh).material = initialMaterial6
	// // Небольшие детали корпуса внутри яхты по бокам ()
	// ;(model.children[0].children[3] as Mesh).material = initialMaterial1

	// /* Лестница и верхняя часть корпуса */

	// // Лестница
	// ;(model.children[1].children[0] as Mesh).material = initialMaterial2
	// // Верхняя часть корпуса
	// ;(model.children[1].children[1] as Mesh).material = initialMaterial3

	// /* Перила */
	// ;(model.children[2].children[0] as Mesh).material = initialMaterial0

	// /* Палуба */
	// ;(model.children[3].children[0] as Mesh).material = initialMaterial3

	// /* Задняя часть корпуса */

	// // Большая часть задней части корпуса
	// ;(model.children[4].children[0] as Mesh).material = initialMaterial8
	// // Прямоугольный люк внутрь корпуса
	// ;(model.children[4].children[1] as Mesh).material = initialMaterial4

	// /* Верхняя часть яхты */

	// // Крыша
	// ;(model.children[5].children[0] as Mesh).material = initialMaterial8
	// // Передняя часть верхней части
	// ;(model.children[5].children[1] as Mesh).material = initialMaterial1
	// // Рубка управления
	// ;(model.children[5].children[2] as Mesh).material = initialMaterial4

	// /* Антенны на крыше */

	// // Большая
	// ;(model.children[5].children[3].children[0] as Mesh).material =
	// 	initialMaterial1
	// // Маленькая
	// ;(model.children[5].children[3].children[1] as Mesh).material =
	// 	initialMaterial5

	// /* Интерьер */

	// // Стол
	// ;(model.children[6].children[0] as Mesh).material = initialMaterial1
	// // Диван снаружи
	// ;(model.children[6].children[1] as Mesh).material = initialMaterial5
	// // Стены внутри
	// ;(model.children[6].children[2] as Mesh).material = initialMaterial5
	// // Рама входа внутрь
	// ;(model.children[6].children[3] as Mesh).material = initialMaterial1

	// Позиционируем и анимируем яхту
	model.scale.set(0.08, 0.08, 0.08)
	model.position.set(0, 0.65, 0)
	model.rotation.set(0, 0, 0)

	useFrame(state => {
		model.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05 + 0.65
		model.rotation.y += 0.0005
	})

	return <primitive object={model} />
}

export default SkydeckModel
