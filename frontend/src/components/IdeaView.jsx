import React, { Component } from 'react';
import Button from 'components/Button';
import FundBar from 'components/FundBar';
import './css/ideaView.css';

class IdeaView extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	async getInfo(e) {}

	async fundIdea() {
		e.preventDefault();
		const { action } = e.target;
		const res = await fetch(actio, {
			method: 'PUT',
			headers: {
				// what header?
			},
			body: JSON.stringify({
				//insert fund details here
			}),
		});
	}

	render() {
		const owner = true;

		if (isLoggedIn) {
			const fundButton = (
				<Button icon="rupee-sign" size="lg" className="quick-button-small fund-button" />
			);
		} else {
			const fundButton = (
				<Button
					icon="rupee-sign"
					size="lg"
					className="quick-button-small fund-button"
					disabled="true"
				/>
			);
		}

		return (
			<>
				<div className="idea-header">
					<h1 className="idea-title">Idea Title</h1>
					{owner == true && (
						<div className="idea-buttons">
							<Button icon="edit" size="lg" className="quick-button-small" />
							<Button icon="trash-alt" size="lg" className="quick-button-small" />
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
					<form
						action="/api/idea/id/fund"
						method="put"
						name="fund"
						onSubmit={(event) => this.fundIdea(event)}
						id="fund-input"
					>
						<div>
							<span>Fund</span>
							<input type="number" id="fund-amount" min="10" />
						</div>
						<Button
							type="submit"
							icon="rupee-sign"
							size="lg"
							className="quick-button-small fund-button"
						/>
					</form>
				</div>
				<br />
				<hr />
				<br />
				<p>Body here</p>
			</>
		);
	}
}

export default IdeaView;
