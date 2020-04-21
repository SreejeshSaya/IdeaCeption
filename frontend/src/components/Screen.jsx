import React, { Component } from 'react';
import Alert from 'components/Alert';
import Header from 'components/Header';
import Body from 'components/Body';
import Home from 'components/Home';
import Login from 'components/Login';
import LoginButton from 'components/LoginButton';
import IdeasList from 'components/IdeasList';
import IdeaView from 'components/IdeaView';
// import IdeaCreate from 'components/IdeaCreate';
import { Menu, MenuToggle } from 'components/Menu';
import '../pages/common.css';

class Screen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuVisible: false,
			loginVisible: false,
			loggedIn: false,
			alert: {
				message: '',
				messageClass: '',
			},
		};
	}

	componentDidMount() {
		fetch('/api/validate/logged_in')
			.then((res) => res.json())
			.then((res) => {
				if (res) {
					this.setState({
						loggedIn: true,
					});
				}
			});

		if (localStorage.getItem('message')) {
			this.setState(
				{
					alert: {
						message: localStorage.getItem('message'),
						messageClass: localStorage.getItem('messageClass') || 'info',
					},
				},
				() => {
					localStorage.removeItem('message');
					localStorage.removeItem('messageClass');
				}
			);
		}
	}

	setAlert(newAlert) {
		this.setState({
			alert: {
				message: newAlert.message,
				messageClass: newAlert.messageClass,
			},
		});
	}

	logIn(res) {
		this.setState({
			loggedIn: true,
			loginVisible: false,
			alert: {
				message: res.message,
				messageClass: res.messageClass,
			},
		});
	}

	async logOut() {
		this.setState(
			{
				loggedIn: false,
			},
			fetch('/api/users/logout')
				.then((res) => res.json())
				.then((data) => {
					localStorage.setItem('message', data.message);
					localStorage.setItem('messageClass', data.messageClass);
					location.href = data.redirect;
				})
		);
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

		const menu = (
			<Menu menuVisible={menuVisible} toggleFunc={() => this.toggleMenu()}>
				<a className="navbar-link" href="/ideas/create">
					Add
				</a>
				<a className="navbar-link" href="/ideas/browse">
					Browse
				</a>
				<a className="navbar-link" href="/about">
					About
				</a>
			</Menu>
		);

		const { page } = this.props;
		let toRender = {};
		if (page === 'home') {
			toRender = <Home />;
		} else if (page === 'add-idea') {
			toRender = (
				<IdeaCreate
					loggedIn={this.state.loggedIn}
					setAlert={(newAlert) => this.setAlert(newAlert)}
					toggleLogin={() => this.toggleLogin()}
				/>
			);
		} else if (page === 'view-idea-list') {
			toRender = <IdeasList />;
		}
		toRender = <IdeaView />;

		return (
			<>
				<div className="corner-nav bg-dark">{menuToggle3}</div>
				<Header
					menuToggle={menuToggle}
					menuToggle2={menuToggle2}
					rightButtons={
						<LoginButton
							loginState={loggedIn}
							loginFunc={() => this.toggleLogin()}
							logoutFunc={() => this.logOut()}
						/>
					}
				/>
				{menu}
				<Body>
					<Alert messageClass={this.state.alert.messageClass}>{this.state.alert.message}</Alert>
					{toRender}
				</Body>
				<Login
					display={loginVisible}
					logIn={(res) => this.logIn(res)}
					dismiss={() => this.dismissLogin()}
				/>
			</>
		);
	}
}

export default Screen;
