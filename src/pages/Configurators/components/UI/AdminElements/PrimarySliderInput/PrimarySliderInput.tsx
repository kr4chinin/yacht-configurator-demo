import styles from './PrimarySliderInput.module.scss'
import { FC, useState } from 'react'

interface PrimarySliderInputProps {
	title: string
	defaultValue: number
	onApply: (value: number) => void
	min: number
	max: number
	step: number
	marginBottom?: string
}

const PrimarySliderInput: FC<PrimarySliderInputProps> = ({
	title,
	defaultValue,
	max,
	min,
	step,
	onApply,
	marginBottom = '0px'
}) => {
	const [value, setValue] = useState(defaultValue)

	function handleSliderChange(e: any) {
		setValue(e.target.value)
	}

	function handleApply() {
		onApply(value)
	}

	return (
		<>
			<h6 className={styles.title}>{title}:</h6>
			<div className={styles.container} style={{ marginBottom: marginBottom }}>
				<input
					className={styles['range-slider']}
					type="range"
					value={value}
					min={min}
					max={max}
					step={step}
					onChange={handleSliderChange}
				/>
				<span className={styles.value}>{value}</span>
				<button className={styles['apply-btn']} onClick={handleApply}>
					✓
				</button>
			</div>
		</>
	)
}

export default PrimarySliderInput
