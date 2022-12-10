import OptionListHeader from '../../UI/OptionListHeader'
import SectionHeader from '../../UI/SectionHeader'
import ExteriorOptions from '../ExteriorOptions/ExteriorOptions'
import InteriorOptions from '../InteriorOptions'
import ModelOption from '../ModelOption'
import styles from './Cart.module.scss'

const Cart = () => {
	return (
		<div className={styles.container}>
			<SectionHeader>Your configuration</SectionHeader>
			<div className={styles.content}>
				<ModelOption
					annotation="Flybridge Yacht"
					description="This model is currently considered the smallest of the boats that KINGDOM MARINE produces. This model offers an innovative beach mode. The yacht has been designed to provide the highest level of maneuverability and stability on the waves."
					alt="Flybridge yacht"
					src="../../../../../../images/YachtsPage/YachtsFlybridgePage/introduction.png"
				/>
				<OptionListHeader>Exterior</OptionListHeader>
        <ExteriorOptions />

				<OptionListHeader>Interior</OptionListHeader>
        <InteriorOptions />
			</div>
		</div>
	)
}

export default Cart
