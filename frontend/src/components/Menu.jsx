import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.classes = {
			navMenu: 'nav-menu bg-secondary',
		};
	}

	render() {
		const { children, menuVisible } = this.props;
		return (
			<nav
				className={this.classes.navMenu}
				style={{ transform: !menuVisible ? 'translateX(-100%)' : 'translateX(0)' }}
			>
				{children}
			</nav>
		);
	}
}

function MenuToggle(props) {
	const { toggleFunc, menuVisible } = props;
	const divStyles = {
		first: {
			transform: `rotate(${menuVisible ? '45deg' : 0})`,
		},
		second: {
			opacity: menuVisible ? 0 : 100,
		},
		third: {
			transform: `rotate(${menuVisible ? '-45deg' : 0})`,
		},
	};

	return (
		<button type="button" className="menu-toggle" onClick={toggleFunc}>
			<div style={divStyles.first} />
			<div style={divStyles.second} />
			<div style={divStyles.third} />
		</button>
	);
}

export { Menu, MenuToggle };
