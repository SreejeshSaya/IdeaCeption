import React, { Component } from 'react';
import './css/ideaCreate.css';
import CKEditor from 'ckeditor4-react';
import CKEditorConfig from '../../config/ckEditorConfig';

class IdeaCreate extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const alertStyle = {
			display: 'none',
		};

		add_idea() {

		}

		render() {
		return (
			<form>
				<div className="display-4">Create Idea</div>
				<div className="title-input">
					<input type="text" name="title" className="title" placeholder="Title" required />
					<p className="alert alert-danger required-message" style={alertStyle}>
						Please enter a title
					</p>
				</div>
				<div className="alert alert-custom" style={alertStyle}>
					<p>Please login to add idea!</p>
					<button className="btn btn-login" onClick={login_redirect}>
						LOGIN NOW
					</button>
				</div>
				<CKEditor config={CKEditorConfig} type="classic" data="<p>Hello</p>" />
				<center>
					<button className="btn btn-secondary btn-block" onClick={add_idea} id="add_idea_btn">
						ADD IDEA
					</button>
				</center>
			</form>
		);
	}

}

function login_redirect() {}

export default IdeaCreate;
