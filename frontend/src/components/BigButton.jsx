import React, { Component } from 'react';
import image from '../assets/images/browse.png';
import '../css/bigButton.css';

class BigButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { type } = this.props;
		return (
			<div className="square-button">
				<a href="">
					<img className="square-button-image" src={image} alt={type} />
					<h5 className="square-button-text">{this.props.type}</h5>
				</a>
			</div>
		);
	}
}

export default BigButton;
