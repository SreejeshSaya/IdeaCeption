import React, { Component } from 'react';

class BigButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { type } = this.props;
		return (
			<div class="square-button">
				<a href="">
					<img class="square-button-image" src="assets/icons/browse.png" alt={type} />
					<h5 class="square-button-text">{this.props.type}</h5>
				</a>
			</div>
		);
	}
}

export default BigButton;
