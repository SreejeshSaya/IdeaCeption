import React, { Component } from 'react';
import Header from 'components/Header';
import Body from 'components/Body';
import Home from 'components/Home';
import Login from 'components/Login';
import LoginButton from 'components/LoginButton';
import IdeaCard from 'components/IdeaCard';
import IdeaCreate from 'components/IdeaCreate';
import { Menu, MenuToggle } from 'components/Menu';
import '../pages/common.css';

class Screen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuVisible: false,
			loginVisible: false,
			loggedIn: false,
		};
	}

	toggleMenu() {
		const { menuVisible } = this.state;
		this.setState({
			menuVisible: !menuVisible,
		});
	}

	toggleLogin() {
		const { loginVisible } = this.state;
		this.setState({
			loginVisible: !loginVisible,
		});
	}

	dismissLogin() {
		if (event.target.getAttribute('role') === 'modal-dismiss') {
			this.setState({
				loginVisible: false,
			});
		}
	}

	render() {
		const { menuVisible, loginVisible, loggedIn } = this.state;
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

		const { page } = this.props;
		let toRender = {};
		if (page === 'home') {
			toRender = <Home />;
		} else if (page === 'add-idea') {
			toRender = <IdeaCreate />;
		} else if (page === 'view-idea-list') {
			toRender = <IdeaCard />;
		}

		return (
			<>
				<div className="corner-nav bg-dark">{menuToggle3}</div>
				<Header
					menuToggle={menuToggle}
					menuToggle2={menuToggle2}
					rightButtons={<LoginButton loginState={loggedIn} loginFunc={() => this.toggleLogin()} />}
				/>
				<Menu menuVisible={menuVisible} toggleFunc={() => this.toggleMenu()} />
				<Body>{toRender}</Body>
				<Login display={loginVisible} dismiss={() => this.dismissLogin()} />
			</>
		);
	}
}

export default Screen;
