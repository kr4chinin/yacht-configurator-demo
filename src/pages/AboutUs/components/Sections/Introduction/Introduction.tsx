import styles from './Introduction.module.scss'

const Introduction = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				About <br />
				<span>Kingdom Marine</span>
			</h1>
      <div className={styles.location}>Home - About Us</div>
		</div>
	)
}

export default Introduction
