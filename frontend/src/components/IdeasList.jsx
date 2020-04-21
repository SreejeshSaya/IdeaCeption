import React, { Component } from 'react';
import IdeaCard from 'components/IdeaCard';
import SearchBox from 'components/SearchBox';
import './css/ideasList.css';

class IdeasList extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// insert getList here
	}

	async getList() {}

	async filterSearch() {}

	render() {
		// const ideas;
		// const list = ideas.map((idea) =>
		// 	<>
		// 	<IdeaCard idea="idea"/>
		// 	<br/>
		// 	</>
		// );

		return (
			<>
				<h1>Idea List</h1>
				<hr />
				<br />
				<SearchBox />
				<br />
				<br />
				<IdeaCard />
				{/* {list} */}
			</>
		);
	}
}

export default IdeasList;
