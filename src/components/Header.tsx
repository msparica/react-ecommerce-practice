import { Link, NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
	return (
		<header>
			<div className="header-content">
				<div className="logo">
					<Link to="/">Webshop Mania</Link>
				</div>
				
				<nav>
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/category/tennis">Tennis</NavLink></li>
						<li><NavLink to="/category/football">Football</NavLink></li>
						<li><NavLink to="/category/shoes">Shoes</NavLink></li>
						<li><NavLink to="/category/pants">Pants</NavLink></li>
						<li><NavLink to="/about">About</NavLink></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;