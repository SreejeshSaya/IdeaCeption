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

	add_idea() {}

	render() {
		const alertStyle = {
			display: 'none',
		};
		const { loggedIn } = this.props;
		if (!loggedIn) {
			return null;
		}

		return (
			<form>
				<div className="display-4">Create Idea</div>
				<div className="title-input">
					<input type="text" name="title" className="title" placeholder="Title" required />
					<p className="alert alert-danger required-message" style={alertStyle}>
						Please enter a title
					</p>
				</div>
				<CKEditor config={CKEditorConfig} type="classic" data="<p>Hello</p>" />
				<center>
					<button
						type="submit"
						className="btn btn-secondary btn-block"
						onClick={() => this.add_idea()}
						id="add_idea_btn"
					>
						ADD IDEA
					</button>
				</center>
			</form>
		);
	}
}

export default IdeaCreate;
