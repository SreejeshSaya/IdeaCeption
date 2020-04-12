import React, { Component } from 'react';
import Header from 'components/Header';
import Body from 'components/Body';
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
			<MenuToggle menuVisible={menuVisible} toggleFunc={() => this.toggleMenu()} />
		);
		return (
			<>
				<Header menuToggle={menuToggle} />
				<Menu menuVisible={menuVisible} />
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere sed dolor ut
					consectetur. In ac mi at purus dictum congue et sit amet dui. Suspendisse sed ligula non
					leo vestibulum mattis. Quisque vitae ex ac felis pretium bibendum. Donec accumsan semper
					tellus, et imperdiet enim sollicitudin vitae. Fusce tincidunt sed est ut consectetur.
					Vestibulum fringilla tortor non orci viverra, id malesuada lacus congue. Nulla
					sollicitudin et ante at laoreet. Mauris magna nunc, eleifend non ante quis, pretium
					pharetra quam.
				</Body>
			</>
		);
	}
}

export default Screen;
