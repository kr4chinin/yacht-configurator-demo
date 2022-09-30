import OptionsDropdown from '../../UI/OptionsDropdown'
import styles from './Navbar.module.scss'
import { ReactComponent as TwoLines } from '../../../../../assets/icons/two-lines.svg'
import { FC, memo, useState } from 'react'
import Sidebar from '../Sidebar'
import AccessoriesPopup from '../AccessoriesPopup'
import { Option } from '../../../../../types/Option'

// Memoising svg component to prevent unnecessary rerendering
const MemoTwoLines = memo(TwoLines)

interface NavbarBottomSectionProps {
    exteriorOptions: Option[]
    interiorOptions: Option[]
    engineOptions: Option[]
}

const NavbarBottomSection: FC<NavbarBottomSectionProps> = ({exteriorOptions, interiorOptions, engineOptions}) => {
	const [isInteriorOpened, setIsInteriorOpened] = useState(false)
	const [isExterirorOpened, setIsExteriorOpened] = useState(false)
	const [isEngineOpened, setIsEngineOpened] = useState(false)

	const [isInteriorOverviewSidebarOpened, setIsInteriorOverviewSidebarOpened] =
		useState(false)

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
					<Sidebar
						isShown={isInteriorOverviewSidebarOpened}
						setIsShown={setIsInteriorOverviewSidebarOpened}
					>
						Some content goes here
					</Sidebar>
				</div>
				<MemoTwoLines />
				<div className={styles.option}>
					<OptionsDropdown
						isShown={isEngineOpened}
						setIsShown={setIsEngineOpened}
						options={engineOptions}
					>
						Engine
					</OptionsDropdown>
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
