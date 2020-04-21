import React, { Component } from 'react';
import IdeaCard from 'components/IdeaCard';
import SearchBox from 'components/SearchBox';
import './css/ideasList.css';

class IdeasList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ideas: [],
		};
	}

	componentDidMount() {
		fetch('/api/ideas')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					ideas: json.message,
				});
			});
	}

	async filterSearch(e) {
		e.preventDefault();
		const { query } = e.target;
		fetch(`/api/ideas?query=${query.value}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					ideas: json.message,
				});
			});
	}

	render() {
		const { ideas } = this.state;
		const cardList = (
			<>
				{ideas.map((i) => {
					return <IdeaCard key={i.id} title={i.title} abstract={i.body} />;
				})}
			</>
		);
		console.log(cardList);

		return (
			<>
				<div className="clearfix">
					<h1 className="display-4 float-left">Browse</h1>
					<SearchBox filter={(e) => this.filterSearch(e)} />
				</div>
				<hr />
				<br />
				<br />
				{cardList}
			</>
		);
	}
}

export default IdeasList;
