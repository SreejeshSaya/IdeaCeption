import React, { Component } from 'react';
import './css/ideaCreate.css';
import CKEditor from 'ckeditor4-react';
import CKEditorConfig from '../../config/ckEditorConfig';

class IdeaCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alertSet: false,
			loginPopup: false,
			body: ''
		};
	}

	componentDidMount() {
		const { loggedIn, setAlert } = this.props;
		if (!loggedIn) {
			setAlert({
				message: 'You need to log in to create an idea',
				messageClass: 'info',
			});
			this.setState({
				alertSet: true,
			});
		}
	}

	componentDidUpdate() {
		const { loggedIn, setAlert, toggleLogin } = this.props;
		if (loggedIn && this.state.alertSet) {
			setAlert({
				message: '',
				messageClass: '',
			});
			this.setState({
				alertSet: false,
			});
		} else if (!this.state.loginPopup) {
			toggleLogin();
			this.setState({
				loginPopup: true,
			});
		}
	}

	async add_idea(e) {
		e.preventDefault();
		const res = await fetch('/api/ideas/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: e.target.title.value,
				body: this.state.body,
				fund_target: e.target.fund.value
			}),
		});

		const json = await res.json();

		localStorage.setItem('message', json.message);
		localStorage.setItem('messageClass', json.messageClass);
		location.href = '/';
	}

	logbody(e) {
		this.setState({
			body: e.editor.getData()
		})
	}

	render() {
		const alertStyle = {
			display: 'none',
		};
		const { loggedIn } = this.props;
		if (!loggedIn) {
			return null;
		}

		return (
			<form onSubmit={(e) => this.add_idea(e)}>
				<div className="display-4">Create Idea</div>
				<div className="title-input">
					<input type="text" name="title" className="title" placeholder="Title" required />
					<p className="alert alert-danger required-message" style={alertStyle}>
						Please enter a title
					</p>
				</div>
				<CKEditor
					config={CKEditorConfig}
					type="classic"
					name="body"
					// data={'<p>Hello</p>'}
					onChange={(e) => this.logbody(e)}
				/>
				<div className="fund-input">
					{' '}
					<label>Funding Goal</label> <input type="number" name="fund" min="10" placeholder="100" />{' '}
				</div>{' '}
				<br />
				<center>
					<button type="submit" className="btn btn-secondary btn-block" id="add_idea_btn">
						Create Idea
					</button>
				</center>
			</form>
		);
	}
}

export default IdeaCreate;
