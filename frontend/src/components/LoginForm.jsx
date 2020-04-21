import React, { Component } from 'react';
import Alert from 'components/Alert';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alert: {
				message: '',
				class: '',
			},
			values: {
				email: '',
				password: '',
			},
			validFields: {
				email: '',
				password: '',
			},
			errors: {
				email: '',
			},
			formValid: false,
		};
	}

	validateForm() {
		const { email, password } = this.state.validFields;
		const formValid = email && password;
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

	async validateField(name, value) {
		const { validFields, errors } = this.state;
		switch (name) {
			case 'email':
				validFields.email = !!value.length;
				await this.handleDuplicateEmail(value);
				errors.email = validFields.email ? '' : errors.email;
				break;
			case 'password':
				validFields.password = !!value.length;
		}
		this.setState(
			{
				errors,
				validFields,
			},
			this.validateForm()
		);
	}

	async handleDuplicateEmail(email) {
		fetch('/api/validate/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		})
			.then((res) => res.json())
			.then((valid) => {
				if (!valid) {
					const newState = this.state;
					newState.errors.email = 'No account exists for this email';
					newState.formValid = false;
					this.setState(newState, this.validateForm);
				}
			});
	}

	async handleSubmit(e) {
		e.preventDefault();
		const { action } = e.target;
		const { logIn, setAlert } = this.props;
		const res = await fetch(action, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value,
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
		console.log(json);
		if (json.status === 1) {
			logIn(json);
		} else {
			setAlert({
				element: 'login',
				message: json.message,
				messageClass: json.messageClass,
			});
		}
	}

	render() {
		const { visible, toggle, alert } = this.props;
		const { values, errors } = this.state;
		const message = alert ? alert.message : '';
		const messageClass = alert ? alert.messageClass : '';
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
						<Alert messageClass={messageClass}>{message}</Alert>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-md-8 mx-auto">
						<div className="form">
							<form
								action="/api/users/login"
								method="post"
								name="login"
								onSubmit={(event) => this.handleSubmit(event)}
							>
								<div className="form-group">
									<input
										type="email"
										name="email"
										className="form-control"
										id="email-login"
										placeholder="Email"
										value={values.email}
										onChange={(e) => this.handleUserInput(e)}
									/>
									<span className="small text-danger">{errors.email}</span>
								</div>
								<div className="form-group">
									<input
										type="password"
										min="0"
										name="password"
										id="password-login"
										className="form-control"
										placeholder="Password"
										value={values.password}
										onChange={(e) => this.handleUserInput(e)}
									/>
								</div>
								<div className="text-center">
									<button
										type="submit"
										className={`btn btn-dark${this.state.formValid ? '' : ' disabled'}`}
										disabled={!this.state.formValid}
									>
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
}

export default LoginForm;
