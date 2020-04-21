import React, { Component } from 'react';
import './css/searchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBox(props) {
	const { filter } = props;
	return (
		<form className="search" onSubmit={filter}>
			<input
				type="text"
				className="searchTerm"
				name="query"
				placeholder="What are you looking for?"
			/>
			<button type="submit" className="searchButton">
				<FontAwesomeIcon icon="search" />
			</button>
		</form>
	);
}

export default SearchBox;
