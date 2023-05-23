import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useCallback, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type MenuItem = {
	text: string;
	to?: string;
	items?: MenuItem[];
}

function Navbar() {
	const menuItems: MenuItem[] = [
		{ text: 'Home', to: '/' },
		{ text: "Type", items: [
			{ text: 'Shirts', to: '/category/shirts'},
			{ text: 'Pants', to: '/category/pants'},
			{ text: 'Kicks', to: '/category/shoes'},
			{ text: 'Gear', to: '/category/gear'},
		]},
		{ text: "Sports", items: [
			{ text: 'B-Ball', to: '/category/basketball'},
			{ text: 'Sucker', to: '/category/soccer'},
			{ text: 'Eggball', to: '/category/football'},
			{ text: 'Rich & Bored', to: '/category/golf'},
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
				? (<NavLink to={item.to}>{item.text}</NavLink>)
				: (<Link to="#">{item.text} { active ? <FaChevronUp /> : <FaChevronDown /> }</Link>)
			}
			{
				item.items &&
				<div className="subitems" style={{ display: active ? 'block' : 'none ' }}>
					<ul>
						{item.items.map(i => <li><NavLink to={i.to ?? '#'}>{i.text}</NavLink></li>)}
					</ul>
				</div>
			}
		</li> 
	);
}

export default Navbar;