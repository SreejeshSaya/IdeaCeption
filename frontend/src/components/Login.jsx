import React, { Component } from 'react';
import './css/login.css';

function RegisterForm(props) {
	const { visible, toggle } = props;
	return (
		<div
			className="container register-div"
			style={{
				transform: visible ? 'translateX(0)' : 'translateX(100vw)',
				opacity: visible ? '1' : '0',
			}}
		>
			<div className="text-center">
				<div className="header-title">
					<h1 className="display-4">Sign Up</h1>
					<h5 className="text-secondary">
						Create an account today and start sharing your ideas to the world!
					</h5>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-md-8 mx-auto">
					<div className="form">
						<form action="/api/users/register" method="post" name="register">
							<div className="form-group">
								<input
									type="text"
									name="name"
									className="form-control my-input"
									id="name"
									placeholder="Name"
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									name="email"
									className="form-control"
									id="email-signup"
									placeholder="Email"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="username"
									className="form-control"
									id="username"
									placeholder="Username"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									min="0"
									name="password"
									id="password-signup"
									className="form-control"
									placeholder="Password"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									min="0"
									name="password-confirm"
									id="password-confirm"
									className="form-control"
									placeholder="Password (confirm)"
								/>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-dark">
									Sign Up
								</button>
							</div>
							<p className="small mt-4 text-center">
								Existing user?{' '}
								<a role="button" onClick={toggle}>
									Log in
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

function LoginForm(props) {
	const { visible, toggle } = props;
	return (
		<div
			className="container login-div"
			style={{
				transform: visible ? 'translateX(0)' : 'translateX(-100vw)',
				opacity: visible ? '1' : '0',
			}}
		>
			<div className="text-center">
				<div className="header-title">
					<h1 className="display-4">Log In</h1>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-md-8 mx-auto">
					<div className="form">
						<form action="/api/users/login" method="post" name="login">
							<div className="form-group">
								<input
									type="email"
									name="email"
									className="form-control"
									id="email-login"
									placeholder="Email"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									min="0"
									name="password"
									id="password-login"
									className="form-control"
									placeholder="Password"
								/>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-dark">
									Log In
								</button>
							</div>
							<p className="small mt-4 text-center">
								New user?{' '}
								<a role="button" onClick={toggle}>
									Sign up
								</a>{' '}
								today!
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginVisible: true,
		};
	}

	toggleLogin() {
		const { loginVisible } = this.state;
		this.setState({
			loginVisible: !loginVisible,
		});
	}

	submitRegister() {
		event.preventDefault();
	}

	render() {
		const { display, dismiss } = this.props;
		const { loginVisible } = this.state;
		if (display === false) {
			return null;
		}
		return (
			<div role="modal-dismiss" className="modal-login" onClick={dismiss} onKeyDown={dismiss}>
				<button type="button" role="modal-dismiss" className="modal-close" onClick={dismiss}>
					X
				</button>
				<LoginForm visible={loginVisible} toggle={() => this.toggleLogin()} />
				<RegisterForm visible={!loginVisible} toggle={() => this.toggleLogin()} />
			</div>
		);
	}
}

export default Login;
