import React, { Component } from 'react';
import Button from 'components/Button';
import FundBar from 'components/FundBar';
import './css/ideaView.css';

class IdeaView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const owner = true;
		let isLoggedIn;
		let buttonStatus;
		// if (isLoggedIn) {
		// 	buttonStatus = enabled;
		// } else {
		// 	buttonStatus = disabled;
		// }

		return (
			<>
				<div className="idea-header">
					<h1 className="idea-title">Idea Title</h1>
					{owner == true && (
						<div className="idea-buttons">
							<Button type="edit" size="lg" className="quick-button-small" />
							<Button type="trash-alt" size="lg" className="quick-button-small" />
						</div>
					)}
				</div>
				<hr />
				<div className="idea-footer">
					<small className="idea-author">By: Author</small>
					<small className="idea-date">Date</small>
				</div>
				<br />
				<div className="fund-section">
					<FundBar />
					<form id="fund-input">
						<div>
							<span>Fund</span>
							<input type="number" id="fund-amount" min="10" />
						</div>
						<Button type="rupee-sign" size="lg" className="quick-button-small fund-button" />
					</form>
				</div>
				<br />
				<hr />
				<p>Body here</p>
			</>
		);
	}
}

export default IdeaView;
