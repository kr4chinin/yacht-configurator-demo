import { FC } from 'react'
import FullscreenImageWrapper from '../../../../../Common/FullscreenImageWrapper'
import Footer from '../../../../../Main/components/Sections/Footer'
import SecondaryHeader from '../../UI/SecondaryHeader'
import styles from './Engines.module.scss'
import EnginesList from './UI/EnginesList'

export interface EngineInfo {
	title: string
	builder: string
	model: string
	amount: number
}

interface EnginesProps {
	bgSrc: string
	bgAlt: string
	description: string
	engineInfo: EngineInfo
}

const Engines: FC<EnginesProps> = ({
	bgSrc,
	bgAlt,
	description,
	engineInfo
}) => {
	const generateEngines = (engineInfo: EngineInfo) => {
		const engines: EngineInfo[] = []

		for (let i = 0; i < engineInfo.amount; i++) {
			engines.push(engineInfo)
		}

		return engines
	}

	return (
		<div className={styles.container}>
			<FullscreenImageWrapper src={bgSrc} alt={bgAlt} />
			<div className={styles.content}>
				<SecondaryHeader
					title="Engines"
					bgLetters="En"
					annotation={description}
				/>

				<EnginesList engines={generateEngines(engineInfo)} />
        <Footer />
			</div>
		</div>
	)
}

export default Engines
