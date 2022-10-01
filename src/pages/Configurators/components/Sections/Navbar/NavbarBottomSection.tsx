import OptionsDropdown from '../../UI/OptionsDropdown'
import styles from './Navbar.module.scss'
import { ReactComponent as TwoLines } from '../../../../../assets/icons/two-lines.svg'
import { FC, memo, useState } from 'react'
import AccessoriesPopup from '../AccessoriesPopup'
import { Option } from '../../../../../types/Option'

// Memoising svg component to prevent unnecessary rerendering
const MemoTwoLines = memo(TwoLines)

interface NavbarBottomSectionProps {
	exteriorOptions: Option[]
	interiorOptions: Option[]
    toggleEngineSidebar: () => void
}

const NavbarBottomSection: FC<NavbarBottomSectionProps> = ({
	exteriorOptions,
	interiorOptions,
    toggleEngineSidebar
}) => {
	const [isInteriorOpened, setIsInteriorOpened] = useState(false)
	const [isExterirorOpened, setIsExteriorOpened] = useState(false)

	const [isAccessoriesOpened, setIsAccessoriesOpened] = useState(false)

	return (
		<>
			<div className={styles['bottom-section']}>
				<div className={styles.option}>
					<OptionsDropdown
						isShown={isExterirorOpened}
						setIsShown={setIsExteriorOpened}
						options={exteriorOptions}
					>
						Exterior
					</OptionsDropdown>
				</div>
				<MemoTwoLines />
				<div className={styles.option}>
					<OptionsDropdown
						isShown={isInteriorOpened}
						setIsShown={setIsInteriorOpened}
						options={interiorOptions}
					>
						Interior
					</OptionsDropdown>
				</div>
				<MemoTwoLines />
				<div className={styles.option} onClick={toggleEngineSidebar} id='engine-trigger'>
					Engine
				</div>
				<MemoTwoLines />
				<div
					className={styles.option}
					onClick={() => setIsAccessoriesOpened(prev => !prev)}
				>
					Optional accessories
				</div>
			</div>
			<AccessoriesPopup
				isOpened={isAccessoriesOpened}
				onClose={() => setIsAccessoriesOpened(false)}
			/>
		</>
	)
}

export default NavbarBottomSection
