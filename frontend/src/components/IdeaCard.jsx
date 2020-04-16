import React, { Component } from 'react';
import './css/ideaCard.css';

class IdeaCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className="idea-card">
					<a href="">
						<img src="assets/icons/idea-card.png" alt="IdeaPic" />
					</a>
					<div className="idea-text">
						<a href="">
							<h5 className="idea-title">Idea Name</h5>
						</a>
						<p className="idea-abstract">Idea Abstract</p>
					</div>
				</div>
			</>
		);
	}
}

export default IdeaCard;
