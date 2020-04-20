import React, { Component } from 'react';
import './css/searchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="search">
				<input type="text" className="searchTerm" placeholder="What are you looking for?" />
				<button type="submit" className="searchButton">
					<FontAwesomeIcon icon="search" />
				</button>
			</div>
		);
	}
}

export default SearchBox;
