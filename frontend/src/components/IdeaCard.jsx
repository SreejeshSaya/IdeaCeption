import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/ideaCard.css';

class IdeaCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className="idea-card">
					<div className="idea-card-lightbulb">
						<FontAwesomeIcon icon="lightbulb" size="9x" />
					</div>
					<div className="idea-text">
						<a href="">
							<h5 className="idea-title">Idea Name</h5>
						</a>
						<hr />
						<p className="idea-abstract">Idea Abstract</p>
					</div>
				</div>
			</>
		);
	}
}

export default IdeaCard;
