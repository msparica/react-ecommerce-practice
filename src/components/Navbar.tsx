import { Link, NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import './Navbar.css'

type MenuItem = {
	text: string;
	to?: string;
	items?: MenuItem[];
}

function Navbar() {
	const menuItems: MenuItem[] = [
		{ text: 'Home', to: '/' },
		{ text: "Type", items: [
			{ text: 'Shirts', to: '/items/type/shirts'},
			{ text: 'Pants', to: '/items/type/pants'},
			{ text: 'Kicks', to: '/items/type/shoes'},
			{ text: 'Gear', to: '/items/type/gear'},
		]},
		{ text: "Sports", items: [
			{ text: 'B-Ball', to: '/items/sport/basketball'},
			{ text: 'Sucker', to: '/items/sport/soccer'},
			{ text: 'Eggball', to: '/items/sport/football'},
			{ text: 'Rich & Bored', to: '/items/sport/golf'},
		]},
		{ text: 'About', to: '/about' },
	];

	return (
		<nav>
			<ul>
				{menuItems.map(i => <NavItem item={i} />)}
			</ul>
		</nav>
	);
}

function NavItem({ item }: { item: MenuItem }) {
	const [active, setActive] = useState(false);

	const onBlur: React.FocusEventHandler<HTMLElement> = useCallback((event) => {
		const currentTarget = event.currentTarget;
		requestAnimationFrame(() => {
			setActive(currentTarget.contains(document.activeElement))
		})
	}, []);

	return (
		<li onFocus={() => setActive(true)} onBlur={onBlur}>
			{ item.to 
				? <NavLink to={item.to}>{item.text}</NavLink>
				: <Link to="#">{item.text} {active ? <FaChevronUp /> : <FaChevronDown />}</Link>
			}
			{
				item.items &&
				<div className="subitems" style={{ display: active ? 'block' : 'none ' }}>
					<ul>
						{item.items.map(i => <li><NavLink to={i.to ?? '#'} onClick={() => setActive(false)}>{i.text}</NavLink></li>)}
					</ul>
				</div>
			}
		</li> 
	);
}

export default Navbar;