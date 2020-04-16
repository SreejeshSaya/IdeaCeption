import React, { Component } from 'react';
import browseImage from '../assets/images/browse.png';
import addImage from '../assets/images/add.png';
import './css/bigButton.css';

class BigButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { type } = this.props;
		let image;
		if (type == 'browse') {
			image = browseImage;
		} else {
			image = addImage;
		}
		return (
			<div className="square-button">
				<a href="">
					<img className="square-button-image" src={image} alt={type} />
					<h5 className="square-button-text">{type}</h5>
				</a>
			</div>
		);
	}
}

export default BigButton;
