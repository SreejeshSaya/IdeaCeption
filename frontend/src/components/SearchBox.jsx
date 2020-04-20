import React, { Component } from 'react';
import './css/searchBox.css';
// import '/css/font-awesome.min.css';

class SearchBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="search">
				<input type="text" className="searchTerm" placeholder="What are you looking for?" />
				<button type="submit" className="searchButton">
					<i className="fa fa-search"></i>
				</button>
			</div>
		);
	}
}

export default SearchBox;
