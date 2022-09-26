import styles from './Navbar.module.scss'
import { ReactComponent as TwoLines } from '../../assets/icons/two-lines.svg'
import { ReactComponent as Menu } from '../../assets/icons/menu.svg'
import OptionsDropdown from '../OptionsDropdown/OptionsDropdown'
import { FC, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Group } from 'three'

interface NavbarProps {
	model: Group
}

const Navbar: FC<NavbarProps> = ({ model }) => {
	const [isInteriorOpened, setIsInteriorOpened] = useState(false)
	const [isExterirorOpened, setIsExteriorOpened] = useState(false)
	const [isSurroundingsOpened, setIsSurroundingsOpened] = useState(false)

	const [isInteriorOverviewSidebarOpened, setIsInteriorOverviewSidebarOpened] =
		useState(false)

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
						options={[
							{ title: 'Overview', onClick: () => {} },
							{ title: 'Frame', onClick: () => {} },
							{ title: 'Finishing', onClick: () => {} },
							{ title: 'Floor', onClick: () => {} },
							{ title: 'Lights', onClick: () => {} },
							{ title: 'Windows', onClick: () => {} }
						]}
					>
						Exterior
					</OptionsDropdown>
				</div>
				<TwoLines />
				<div className={styles.option}>
					<OptionsDropdown
						isShown={isInteriorOpened}
						setIsShown={setIsInteriorOpened}
						options={[
							{
								title: 'Overview',
								onClick: () => setIsInteriorOverviewSidebarOpened(prev => !prev)
							},
							{ title: 'Frame', onClick: () => {} },
							{ title: 'Finishing', onClick: () => {} },
							{ title: 'Floor', onClick: () => {} },
							{ title: 'Lights', onClick: () => {} },
							{ title: 'Windows', onClick: () => {} }
						]}
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
						options={[
							{ title: 'Overview', onClick: () => {} },
							{ title: 'Frame', onClick: () => {} },
							{ title: 'Finishing', onClick: () => {} },
							{ title: 'Floor', onClick: () => {} },
							{ title: 'Lights', onClick: () => {} },
							{ title: 'Windows', onClick: () => {} }
						]}
					>
						Engine
					</OptionsDropdown>
				</div>
                <TwoLines />
                <div className={styles.option}>
                    Optional accessories
                </div>
			</div>
		</nav>
	)
}

export default Navbar
