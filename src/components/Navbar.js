import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from './data'
import { Button } from './Button'
import './Navbar.css'

function NavLink({ text, to, setClick, className }) {
	return (
		<li className="nav-item">
			<Link to={to} className={className} onClick={setClick}>
				{text}
			</Link>
		</li>
	)
}

function Navbar() {
	const [click, setClick] = useState(false)
	const [button, setButton] = useState(true)

	const handleToggleBar = () => setClick(!click)
	const handleClose = () => setClick(false)

	const showButton = () =>
		window.innerWidth <= 960 ? setButton(false) : setButton(true)

	window.addEventListener('resize', showButton)

	useEffect(() => showButton, [])
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={handleClose}>
						TRVL <i className="fab fa-typo3"></i>
					</Link>
					<div className="menu-icon" onClick={handleToggleBar}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						{navLinks.map((link) => (
							<NavLink
								to={link.to}
								text={link.text}
								className={link.className}
								setClick={handleClose}
							/>
						))}
					</ul>
					{button && <Button buttonStyle={'btn--outline'}>Sign Up</Button>}
				</div>
			</nav>
		</>
	)
}

export default Navbar
