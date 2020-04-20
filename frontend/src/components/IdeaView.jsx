import React, { Component } from 'react';
import Button from 'components/Button';
import FundBar from 'components/FundBar';
import './css/ideaView.css';

class IdeaView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className="idea-header">
					<h1 className="idea-title">Idea Title</h1>
					<div className="idea-buttons">
						<Button type="edit" size="lg" />
						<Button type="trash-alt" size="lg" />
					</div>
				</div>
				<hr />
				<div className="idea-footer">
					<small className="idea-author">By: Author</small>
					<small className="idea-date">Date</small>
				</div>
				<br />
				<div className="fund-section">
					<FundBar />
					<Button type="rupee-sign" size="lg" className="fund-button" />
				</div>
				<br />
				<p>Body here</p>
			</>
		);
	}
}

export default IdeaView;
