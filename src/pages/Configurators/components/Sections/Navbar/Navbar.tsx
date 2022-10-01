import styles from './Navbar.module.scss'
import { FC } from 'react'
import cn from 'classnames'
import NavbarTopSection from './NavbarTopSection'
import NavbarBottomSection from './NavbarBottomSection'
import { Option } from '../../../../../types/Option'

interface NavbarProps {
	yachtName: string
	isHidden: boolean
	exteriorOptions: Option[]
	interiorOptions: Option[]
	toggleEngineSidebar: () => void
}

const Navbar: FC<NavbarProps> = ({
	yachtName,
	exteriorOptions,
	interiorOptions,
	toggleEngineSidebar,
	isHidden
}) => {

	return (
		<nav className={cn(styles.container, { [styles.hidden]: isHidden })}>
			<NavbarTopSection yachtName={yachtName} />
			<NavbarBottomSection
				exteriorOptions={exteriorOptions}
				interiorOptions={interiorOptions}
				toggleEngineSidebar={toggleEngineSidebar}
			/>
		</nav>
	)
}

export default Navbar
