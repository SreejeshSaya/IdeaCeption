import React, { Component } from 'react';
import browseImage from '../assets/images/browse.png';
import addImage from '../assets/images/add.png';
import './css/bigButton.css';

function BigButton(props) {
	const { type, link } = props;
	let image;
	if (type == 'browse') {
		image = browseImage;
	} else {
		image = addImage;
	}
	return (
		<div className="square-button">
			<a href={link}>
				<img className="square-button-image" src={image} alt={type} />
				<h5 className="square-button-text">{type}</h5>
			</a>
		</div>
	);
}

export default BigButton;
