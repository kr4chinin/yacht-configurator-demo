import styles from './Navbar.module.scss'
import { ReactComponent as TwoLines } from '../../../../../assets/icons/two-lines.svg'
import { ReactComponent as Menu } from '../../../../../assets/icons/menu.svg'
import OptionsDropdown from '../../UI/OptionsDropdown'
import { FC, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Group } from 'three'
import AccessoriesPopup from '../AccessoriesPopup'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../../../utils/routes'

interface NavbarProps {
	model: Group
    yachtName: string
    exteriorOptions: {title: string, onClick: () => void}[]
    interiorOptions: {title: string, onClick: () => void}[]
    engineOptions: {title: string, onClick: () => void}[]
}

const Navbar: FC<NavbarProps> = ({ model, yachtName, exteriorOptions, interiorOptions, engineOptions }) => {
	const navigate = useNavigate()

	const [isInteriorOpened, setIsInteriorOpened] = useState(false)
	const [isExterirorOpened, setIsExteriorOpened] = useState(false)
	const [isSurroundingsOpened, setIsSurroundingsOpened] = useState(false)

	const [isInteriorOverviewSidebarOpened, setIsInteriorOverviewSidebarOpened] =
		useState(false)

	const [isAccessoriesOpened, setIsAccessoriesOpened] = useState(false)

	function handleNavigateToMainPage() {
		navigate(AppRoutes.MAIN)
	}

	return (
		<nav className={styles.container}>
			<div className={styles['top-section']}>
				<div className={styles.menu}>
					<Menu />
					<p>Menu</p>
				</div>
				<p className={styles.signature}>{yachtName}</p>
				<p className={styles.more} onClick={handleNavigateToMainPage}>
					Explore more
				</p>
			</div>
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
				<TwoLines />
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
				<TwoLines />
				<div className={styles.option}>
					<OptionsDropdown
						isShown={isSurroundingsOpened}
						setIsShown={setIsSurroundingsOpened}
						options={engineOptions}
					>
						Engine
					</OptionsDropdown>
				</div>
				<TwoLines />
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
		</nav>
	)
}

export default Navbar
