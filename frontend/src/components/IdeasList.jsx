import React, { Component } from 'react';
import IdeaCard from 'components/IdeaCard';
import 'css/ideaList.css';

class IdeaList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const ideas;
		const list = ideas.map((idea) =>
			<>
			<IdeaCard idea="idea"/>
			<br/>
			</>
		);
		return (
			<h2>Idea List</h2>
			<br/>
			{list}
		);
	}
}

export default IdeaList;

//map for now
//local storage
