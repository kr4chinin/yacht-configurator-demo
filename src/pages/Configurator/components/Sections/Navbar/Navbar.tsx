import styles from './Navbar.module.scss'
import { ReactComponent as TwoLines } from '../../../../../assets/icons/two-lines.svg'
import { ReactComponent as Menu } from '../../../../../assets/icons/menu.svg'
import OptionsDropdown from '../../UI/OptionsDropdown'
import { FC, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Group } from 'three'
import AccessoriesPopup from '../AccessoriesPopup'

interface NavbarProps {
	model: Group
}

const Navbar: FC<NavbarProps> = ({ model }) => {
	const [isInteriorOpened, setIsInteriorOpened] = useState(false)
	const [isExterirorOpened, setIsExteriorOpened] = useState(false)
	const [isSurroundingsOpened, setIsSurroundingsOpened] = useState(false)

	const [isInteriorOverviewSidebarOpened, setIsInteriorOverviewSidebarOpened] =
		useState(false)

	const [isAccessoriesOpened, setIsAccessoriesOpened] = useState(false)

	const mockOptions = [
		{
			title: 'Overview',
			onClick: () => setIsInteriorOverviewSidebarOpened(prev => !prev)
		},
		{ title: 'Frame', onClick: () => {} },
		{ title: 'Finishing', onClick: () => {} },
		{ title: 'Floor', onClick: () => {} },
		{ title: 'Lights', onClick: () => {} },
		{ title: 'Windows', onClick: () => {} }
	]

	return (
		<nav className={styles.container}>
			<div className={styles['top-section']}>
				<div className={styles.menu}>
					<Menu />
					<p>Menu</p>
				</div>
				<p className={styles.signature}>Flybridge</p>
				<p className={styles.more}>Explore more</p>
			</div>
			<div className={styles['bottom-section']}>
				<div className={styles.option}>
					<OptionsDropdown
						isShown={isExterirorOpened}
						setIsShown={setIsExteriorOpened}
						options={mockOptions}
					>
						Exterior
					</OptionsDropdown>
				</div>
				<TwoLines />
				<div className={styles.option}>
					<OptionsDropdown
						isShown={isInteriorOpened}
						setIsShown={setIsInteriorOpened}
						options={mockOptions}
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
						options={mockOptions}
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
