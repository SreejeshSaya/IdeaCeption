import React, { Component } from 'react';
import Alert from 'components/Alert';
import './css/login.css';

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				name: '',
				email: '',
				username: '',
				password: '',
				passConfirm: '',
			},
			errors: {
				name: '',
				email: '',
				username: '',
				password: '',
				passConfirm: '',
			},
			validFields: {
				name: false,
				email: false,
				username: false,
				password: false,
				passConfirm: false,
			},
			formValid: false,
		};
	}

	validateForm() {
		const { validFields } = this.state;
		const formValid = !Object.values(validFields).includes(false);
		this.setState({
			formValid,
		});
	}

	handleUserInput(e) {
		const { name } = e.target;
		const { value } = e.target;
		const { values } = this.state;
		values[name] = value;
		this.setState({ values }, () => {
			this.validateField(name, value);
		});
	}

	async handleDuplicateUsername(e) {
		const username = e.target.value;
		fetch('/api/validate/username', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username }),
		})
			.then((res) => res.json())
			.then((invalid) => {
				if (invalid) {
					const newState = this.state;
					newState.errors.username = 'This username has already been taken';
					newState.validFields.username = false;
					this.setState(newState, this.validateForm);
				}
			});
	}

	async handleDuplicateEmail(e) {
		const email = e.target.value;
		fetch('/api/validate/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		})
			.then((res) => res.json())
			.then((invalid) => {
				if (invalid) {
					const newState = this.state;
					newState.errors.email = 'An account with this email already exists';
					newState.validFields.email = false;
					this.setState(newState, this.validateForm);
				}
			});
	}

	validateField(field, value) {
		const { values, errors, validFields } = this.state;
		switch (field) {
			case 'name':
				validFields.name = value.length >= 1;
				errors.name = validFields.name ? '' : 'Please enter your name';
				break;
			case 'username':
				validFields.username = value.length >= 1;
				errors.username = validFields.username ? '' : 'Please enter your username';
				break;
			case 'email':
				validFields.email = !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				errors.email = validFields.email ? '' : 'Please enter a valid email id';
				break;
			case 'password':
				validFields.password = value.length >= 6;
				errors.password = validFields.password ? '' : 'Password is too short';
				break;
			case 'passConfirm':
				validFields.passConfirm = values.password === values.passConfirm;
				errors.passConfirm = validFields.passConfirm ? '' : "Passwords don't match";
				break;
			default:
				break;
		}
		this.setState({ errors, validFields }, this.validateForm);
	}

	async handleSubmit(e) {
		const { toggle } = this.props;
		e.preventDefault();
		const { action } = e.target;
		const res = await fetch(action, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: e.target.name.value,
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		});
		const json = await res.json();
		console.log(json);
		if (json.status === 1) {
			this.props.setAlert({
				element: 'login',
				message: json.message,
				messageClass: json.messageClass,
			});
			toggle();
		} else {
			this.props.setAlert({
				element: 'register',
				message: 'There was an error on server. Please try again after some time',
				messageClass: 'danger',
			});
		}
	}

	render() {
		const { visible, toggle, alert } = this.props;
		const { values, errors, formValid } = this.state;
		const message = alert ? alert.message : '';
		const messageClass = alert ? alert.messageClass : '';
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
						<Alert messageClass={messageClass}>{message}</Alert>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-md-8 mx-auto">
						<div className="form">
							<form
								action="/api/users/register"
								method="post"
								name="register"
								onSubmit={(e) => this.handleSubmit(e)}
							>
								<div className="form-group">
									<input
										type="text"
										name="name"
										className="form-control my-input"
										id="name"
										placeholder="Name"
										value={values.name}
										onChange={(event) => this.handleUserInput(event)}
									/>
									<span className="text-danger small" id="reg-name-error">
										{errors.name}
									</span>
								</div>
								<div className="form-group">
									<input
										type="email"
										name="email"
										className="form-control"
										id="email-signup"
										placeholder="Email"
										value={values.email}
										onChange={(event) => this.handleUserInput(event)}
										onBlur={(event) => this.handleDuplicateEmail(event)}
									/>
									<span className="text-danger small" id="reg-name-error">
										{errors.email}
									</span>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="username"
										className="form-control"
										id="username"
										placeholder="Username"
										value={values.username}
										onChange={(event) => this.handleUserInput(event)}
										onBlur={(event) => this.handleDuplicateUsername(event)}
									/>
									<span className="text-danger small" id="reg-name-error">
										{errors.username}
									</span>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="password"
										id="password-signup"
										className="form-control"
										placeholder="Password"
										value={values.password}
										onChange={(event) => this.handleUserInput(event)}
									/>
									<span className="text-danger small" id="reg-name-error">
										{errors.password}
									</span>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="passConfirm"
										id="passConfirm"
										className="form-control"
										placeholder="Password (confirm)"
										value={values.passConfirm}
										onChange={(event) => this.handleUserInput(event)}
									/>
									<span className="text-danger small" id="reg-name-error">
										{errors.passConfirm}
									</span>
								</div>
								<div className="text-center">
									<button
										type="submit"
										className={`btn btn-dark${!formValid ? ' disabled' : ''}`}
										disabled={!formValid}
									>
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
}

export default RegisterForm;
