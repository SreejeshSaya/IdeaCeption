import React, { Component } from 'react';
import '../pages/common.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.classes = {
			header: ['header'],
			corner: ['corner', 'bg-dark'],
			titleBar: ['titlebar', 'bg-dark', 'd-flex'],
		};
	}

	getClasses(name) {
		const classNames = this.classes[name].join(' ');
		return classNames;
	}

	render() {
		const { rightButtons, menuToggle, menuToggle2 } = this.props;
		const headerComp = (
			<header className={this.getClasses('header')}>
				{menuToggle}
				<div className={this.getClasses('corner')}>
					<a href="/">
						<img id="Logo" src="assets/icons/android-chrome-192x192.png" alt="IdeaCeption Logo" />
					</a>
				</div>

				<div className={this.getClasses('titleBar')}>
					<div>{menuToggle2}</div>
					<div id="title">
						{/* <a href="/"> */}
						<span className="text-info">Idea</span>Ception
						{/* </a> */}
					</div>
					<div>{rightButtons}</div>
				</div>
			</header>
		);

		return headerComp;
	}
}

export default Header;
