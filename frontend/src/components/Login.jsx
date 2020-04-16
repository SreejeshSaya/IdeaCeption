import React, { Component } from 'react';
import './css/login.css';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const textStyle = {
			fontSize: '16px',
		};
		const alertStyle = {
			display: 'none',
		};
		return (
			<div id="loginDiv">
				<div id="login_details">
					<form id="login_form" action="">
						<div className="alert alert-danger login-error" style={alertStyle} />
						<label htmlFor="username" style={textStyle}>
							Username
						</label>
						<input type="text" className="email" name="userMail" />
						<br />
						<br />
						<label htmlFor="password" style={textStyle}>
							Password
						</label>
						{/* <br /> */}
						<input type="password" className="password" name="userPass" />
						<br />
						<button className="btn btn-secondary btn-block" name="login_submit" value="1">
							LOGIN
						</button>
						<br />
					</form>
				</div>
				<div id="login_footer">
					<div className="block">
						<h5>New User?</h5>
						<a href="../signup" className="btn btn-primary">
							Sign up
						</a>
					</div>
					<div className="block">
						<span id="forgot">
							<a href="#">Forgot password ?</a>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;

//1. remove action attribute.
//2. styling in own or bootstrap. javascript object
// htmlFor instaed of for.
//
