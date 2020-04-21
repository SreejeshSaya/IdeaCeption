import React, { Component } from 'react';
import Button from 'components/Button';
import FundBar from 'components/FundBar';
import './css/ideaView.css';

class IdeaView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: parseInt(location.href.split('/').slice(-1)[0], 10),
			title: '',
			body: '',
			author: '',
			owner: '',
			target: '',
			amount: '',
			valid: true,
		};
	}

	componentDidMount() {
		const { id } = this.state;
		const { setAlert } = this.props;
		fetch(`/api/ideas/${id}`)
			.then((res) => {
				if (res.status >= 500) {
					setAlert({
						message: 'There was an error on server. Please try after some time',
						messageClass: 'danger',
					});
					return;
				}
				return res.json();
			})
			.then((json) => {
				if (json.status === 1) {
					this.setState({
						id: json.message.id,
						title: json.message.title,
						body: json.message.body,
						author: json.message.author,
						owner: json.message.owner,
						target: json.message.fund_target,
						amount: json.message.fund_amt,
					});
				} else {
					setAlert({
						message: 'Idea with this id does not exist',
						messageClass: 'danger',
					});
					this.setState({
						valid: false,
					});
				}
			});
	}

	async editIdea(e) {
		//
	}

	async deleteIdea(e) {
		e.preventDefault();
		const { id } = this.state;
		const res = await fetch(`/api/ideas/${id}`, {
			method: 'DELETE',
		});

		if (res.status >= 500) {
			setAlert({
				message: 'There was an error on server. Please try after some time',
				messageClass: 'danger',
			});
			return;
		}

		const json = await res.json();

		localStorage.setItem('message', json.message);
		localStorage.setItem('messageClass', json.messageClass);
		location.href = '/';
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
		const { id, title, body, author, owner, target, amount, valid } = this.state;

		if (!valid) {
			return null;
		}
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
								// onClick={this.editIdea(event)}
							/>
							<Button
								icon="trash-alt"
								size="lg"
								className="quick-button-small"
								onClick={(event) => this.deleteIdea(event)}
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
						// onSubmit={(event) => this.fundIdea(event)}
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
