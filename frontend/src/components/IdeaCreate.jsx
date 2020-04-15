import React, { Component } from 'react';
import '../css/ideaCreate.css';

class IdeaCreate extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const alertStyle = {
			display: 'none',
		};
		const boldStyle = {
			fontWeight: 'bold',
		};
		const italicStyle = {
			fontStyle: 'italic',
		};
		const underlineStyle = {
			textDecoration: 'underline',
		};
		const strikeStyle = { textDecoration: 'strikethrough' };

		return (
			<>
				<div className="col-md-10">
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
					<main id="input_area">
						<div id="utility">
							<div id="utility_bar">
								<p id="bold" style={boldStyle}>
									B
								</p>
								<p id="italics" style={italicStyle}>
									I
								</p>
								<p id="underline" style={underlineStyle}>
									U
								</p>
								<p id="strikethrough" style={strikeStyle}>
									S
								</p>
								<p id="quote">Q</p>
								<p id="code">&lsaquo;C&rsaquo;</p>
							</div>
							<textarea id="input" placeholder="Type in your idea here"></textarea>
						</div>
						{/* <div id="view"></div> */}
					</main>
					<center>
						<button className="btn btn-secondary btn-block" onClick={add_idea} id="add_idea_btn">
							ADD IDEA
						</button>
					</center>
				</div>
			</>
		);
	}
}

function login_redirect() {}
function add_idea() {}

export default IdeaCreate;
