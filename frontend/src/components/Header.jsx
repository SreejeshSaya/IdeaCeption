import React, { Component } from 'react';

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
		const { rightButtons, menuToggle } = this.props;
		const headerComp = (
			<header className={this.getClasses('header')}>
				{menuToggle}
				<div className={this.getClasses('corner')} />
				<div className={this.getClasses('titleBar')}>
					<div />
					<div>
						<span className="text-info">Idea</span>Ception
					</div>
					<div>{rightButtons}</div>
				</div>
			</header>
		);

		return headerComp;
	}
}

export default Header;
