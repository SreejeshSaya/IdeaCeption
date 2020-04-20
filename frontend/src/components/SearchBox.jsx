import React, { Component } from 'react';
import './css/searchBox.css';

class SearchBox extends Component {
	render() {
		return <input type="text" class="search-box" placeholder="Search" />;
	}
}

export default SearchBox;