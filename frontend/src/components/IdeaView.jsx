import React, { Component } from 'react';
import Button from 'components/Button';
import FundBar from 'components/FundBar';
import './css/ideaView.css';

class IdeaView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.key,
			title: '',
			body: '',
			author: '',
			owner: '',
			target: '',
			amount: '',
		};
	}

	componentDidMount() {
		this.getInfo(e);
	}

	async getInfo(e) {
		e.preventDefault();
		const res = await fetch('/api/ideas/', {
			// method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: this.props.idea_id, //insert id here
			}),
		});
		if (res.status >= 500) {
			setAlert({
				// element: 'login',
				message: 'Idea is not present',
				messageClass: 'danger',
			});
			return;
		} else {
			this.setState({
				id: res.id,
				title: res.title,
				body: res.body,
				author: res.author,
				owner: res.owner,
				target: res.fund_target,
				amount: res.fund_amt,
			});
		}
	}

	//handle 404 not found

	async editIdea(e) {
		//
	}

	async deleteIdea(e) {
		e.preventDefault();
		const res = await fetch('/api/ideas/id', {
			method: 'DELETE',
		});
	}

	async fundIdea(e) {
		e.preventDefault();
		const { action } = e.target;
		const res = await fetch(action, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				amount: e.target.fund_amount.value,
			}),
		});

		if (res.status >= 500) {
			setAlert({
				element: 'login',
				message: 'There was an error an server. Please try after some time',
				messageClass: 'danger',
			});
			return;
		}

		const json = await res.json();
		if (json.status === 1) {
			setAlert({
				message: json.message,
				messageClass: json.messageClass,
			});
		} else {
			setAlert({
				message: 'Error',
				messageClass: 'danger',
			});
		}
	}

	render() {
		const { id, title, body, author, target, amount } = this.state;

		// if (this.state.loggedIn) {
		// 	const fundButton = (
		// 		<Button icon="rupee-sign" size="lg" className="quick-button-small fund-button" />
		// 	);
		// } else {
		// 	const fundButton = (
		// 		<Button
		// 			icon="rupee-sign"
		// 			size="lg"
		// 			className="quick-button-small fund-button"
		// 			disabled="true"
		// 		/>
		// 	);
		// }

		return (
			<>
				<div className="idea-header">
					<h1 className="idea-title">{title}</h1>
					{owner == true && (
						<div className="idea-buttons">
							<Button
								icon="edit"
								size="lg"
								className="quick-button-small"
								onClick={this.editIdea(event)}
							/>
							<Button
								icon="trash-alt"
								size="lg"
								className="quick-button-small"
								onClick={this.deleteIdea(event)}
							/>
						</div>
					)}
				</div>
				<hr />
				<div className="idea-footer">
					<small className="idea-author">By: {author}</small>
				</div>
				<br />
				<div className="fund-section">
					<FundBar goal={target} amount={amount} />
					<form
						action="/api/idea/id/fund"
						method="put"
						name="fund"
						onSubmit={(event) => this.fundIdea(event)}
						id="fund-input"
					>
						<div>
							<span>Fund </span>
							<input type="number" id="fund-amount" name="fund_amount" min="10" />
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
				<p>{body}</p>
			</>
		);
	}
}

export default IdeaView;
