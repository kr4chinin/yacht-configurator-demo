import styles from './InfoWidgetItem.module.scss'

const InfoWidgetItem = () => {
	return (
		<div className={styles.container}>
			<div className={styles.date}>06/22</div>
			<div className={styles.content}>
				<div className={styles.text}>
					Kingdom Marine was founded in Russia in June 2022 and has already
					managed to attract the attention of both domestic and foreign yacht
					manufacturers to its projects. Each yacht of Kingdom Marine is a
					sample of perfection of handcraftsmanship and thanks to unmatched
					attention to detail, advanced technology and excellent design the
					company can rightfully take its place as one of the leading Russian
					shipbuilders.
				</div>
				<div className={styles.controls}>

        </div>
			</div>
		</div>
	)
}

export default InfoWidgetItem
