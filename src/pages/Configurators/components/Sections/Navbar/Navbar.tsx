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
	engineOptions: Option[]
}

const Navbar: FC<NavbarProps> = ({
	yachtName,
	exteriorOptions,
	interiorOptions,
	engineOptions,
	isHidden
}) => {

	return (
		<nav className={cn(styles.container, { [styles.hidden]: isHidden })}>
			<NavbarTopSection yachtName={yachtName} />
			<NavbarBottomSection
				exteriorOptions={exteriorOptions}
				interiorOptions={interiorOptions}
				engineOptions={engineOptions}
			/>
		</nav>
	)
}

export default Navbar
