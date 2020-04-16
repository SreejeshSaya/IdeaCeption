import React, { Component } from 'react';
import './css/ideaCreate.css';
import '../../node_modules/ckeditor4-react/dist/ckeditor';
// import { CKEditor } from '../../node_modules/ckeditor4-react/dist/ckeditor';
import CKEditor from 'ckeditor4-react';

class IdeaCreate extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const alertStyle = {
			display: 'none',
		};
		// const boldStyle = {
		// 	fontWeight: 'bold',
		// };
		// const italicStyle = {
		// 	fontStyle: 'italic',
		// };
		// const underlineStyle = {
		// 	textDecoration: 'underline',
		// };
		// const strikeStyle = { textDecoration: 'strikethrough' };
		// CKEDITOR.config.height = 400;

		return (
			<>
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
				<CKEditor config={{ height: 500 }} type="classic" data="<p>Hello</p>" />
				<center>
					<button className="btn btn-secondary btn-block" onClick={add_idea} id="add_idea_btn">
						ADD IDEA
					</button>
				</center>
			</>
		);
	}
}

function login_redirect() {}
function add_idea() {}

export default IdeaCreate;
