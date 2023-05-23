import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import './Header.css'

function Header() {
	return (
		<header>
			<div className="header-content">
				<div className="logo">
					<Link to="/">Webshop Mania</Link>
				</div>
				
				<Navbar />
			</div>
		</header>
	);
}

export default Header;