import React, { Component } from 'react';
import './css/searchBox.css';

class SearchBox extends Component {
	render() {
		return (
			<div id="search-div">
				<input type="text" id="search-box" placeholder="Search" />
			</div>
		);
	}
}

export default SearchBox;
