import React, { Component } from 'react';
import Header from 'components/Header';
import Body from 'components/Body';
import Home from 'components/Home';
import Login from 'components/Login';
import IdeaCard from 'components/IdeaCard';
import IdeaCreate from 'components/IdeaCreate';
import { Menu, MenuToggle } from 'components/Menu';
import '../pages/common.css';

class Screen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuVisible: false,
		};
	}

	toggleMenu() {
		const { menuVisible } = this.state;
		this.setState({
			menuVisible: !menuVisible,
		});
	}

	render() {
		const { menuVisible } = this.state;
		const menuToggle = (
			<MenuToggle
				className="menu-toggle"
				menuVisible={menuVisible}
				toggleFunc={() => this.toggleMenu()}
			/>
		);
		const menuToggle2 = (
			<MenuToggle
				className="menu-toggle-alt"
				menuVisible={menuVisible}
				toggleFunc={() => this.toggleMenu()}
			/>
		);
		const menuToggle3 = (
			<MenuToggle
				className="menu-toggle-nav"
				menuVisible={menuVisible}
				toggleFunc={() => this.toggleMenu()}
			/>
		);
		return (
			<>
				<div className="corner-nav bg-dark">{menuToggle3}</div>
				<Header menuToggle={menuToggle} menuToggle2={menuToggle2} />
				<Menu menuVisible={menuVisible} toggleFunc={() => this.toggleMenu()} />
				<Body>
					{/* <Login /> */}
					{/* <IdeaCard /> */}
					{/* <IdeaCreate /> */}
					<Home />
				</Body>
			</>
		);
	}
}

export default Screen;
