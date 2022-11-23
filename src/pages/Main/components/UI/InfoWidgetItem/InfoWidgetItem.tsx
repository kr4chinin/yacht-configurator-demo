import { FC } from 'react'
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/long-horizontal-arrow.svg'
import styles from './InfoWidgetItem.module.scss'

interface InfoWidgetItemProps {
	date: string
	text: string
	onNext: () => void
	onPrev: () => void
	canClickNext: boolean
	canClickPrev: boolean
}

const InfoWidgetItem: FC<InfoWidgetItemProps> = ({
	date,
	text,
	onNext,
	onPrev,
	canClickNext,
	canClickPrev
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.date}>{date}</div>
			<div className={styles.content}>
				<div className={styles.text}>{text}</div>
				<div className={styles.controls}>
					<div className={styles['next-btn-wrapper']}>
						<button
							className={styles['next-btn']}
							onClick={onNext}
							disabled={!canClickNext}
						>
							<span>Next</span>
							<ArrowIcon />
						</button>
					</div>
					<button
						className={styles['prev-btn']}
						onClick={onPrev}
						disabled={!canClickPrev}
					>
						Prev
					</button>
				</div>
			</div>
		</div>
	)
}

export default InfoWidgetItem
