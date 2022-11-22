import { useState } from 'react'
import InfoWidgetItem from '../../UI/InfoWidgetItem'
import styles from './InfoWidgetList.module.scss'

export interface InfoWidget {
	date: string
	text: string
	id: number
}

const infoWidgetList: InfoWidget[] = [
	{
		id: 1,
		date: '06/22',
		text: 'Kingdom Marine was founded in Russia in June 2022 and has already managed to attract the attention of both domestic and foreign yacht manufacturers to its projects. Each yacht of Kingdom Marine is a sample of perfection of handcraftsmanship and thanks to unmatched attention to detail, advanced technology and excellent design the company can rightfully take its place as one of the leading Russian shipbuilders.'
	},
	{
		id: 2,
		date: '07/22',
		text: 'Ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem consectetur nam eum, eos debitis optio pariatur minus voluptatum architecto, officia, facilis veniam nihil perferendis temporibus. Ex deleniti doloremque modi voluptates odit placeat non perferendis ratione porro recusandae saepe, officiis eos quaerat esse libero. Quaerat illo corrupti quo maiores blanditiis?'
	},
	{
		id: 3,
		date: '08/22',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus aliquam, mollitia quaerat nihil nam excepturi ex temporibus deserunt. Quo excepturi molestiae delectus eum, maiores itaque ex veritatis eaque in sint rerum aperiam. Ipsum quis illo totam architecto dolorem soluta temporibus. Magni, consequuntur porro aperiam culpa nihil dolore. Nihil, facilis!'
	}
]

const InfoWidgetList = () => {
	const [activeItem, setActiveItem] = useState<InfoWidget>(infoWidgetList[0])

	function handleNext() {
		const nextItem = infoWidgetList.find(item => item.id === activeItem.id + 1)

		if (nextItem) {
			setActiveItem(nextItem)
		}
	}

	function handlePrev() {
		const prevItem = infoWidgetList.find(item => item.id === activeItem.id - 1)

		if (prevItem) {
			setActiveItem(prevItem)
		}
	}

	return (
		<div className={styles.container}>
			<InfoWidgetItem
				date={activeItem.date}
				text={activeItem.text}
				onNext={handleNext}
				onPrev={handlePrev}
				canClickNext={activeItem.id !== infoWidgetList.length}
				canClickPrev={activeItem.id !== 1}
			/>
		</div>
	)
}

export default InfoWidgetList
