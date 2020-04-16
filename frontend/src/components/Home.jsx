import React, { Component } from 'react';
import './css/about.css';
import BigButton from 'components/BigButton';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<h2>Home</h2>
				<br />
				<p>
					Hello! Welcome to IdeaCeption. IdeaCeption is a crowd funding website. Let your ideas
					flow.
				</p>
				<br />
				<div id="quickButtons">
					<BigButton type="add" />
					<BigButton type="browse" />
				</div>
			</>
		);
	}
}

export default Home;
