import React, { Component } from 'react';
import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LoginForm';
import './css/login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginVisible: true,
			alert: {
				element: null,
				message: '',
				messageClass: '',
			},
		};
		this.refs;
	}

	toggleLogin() {
		const { loginVisible } = this.state;
		this.setState({
			loginVisible: !loginVisible,
		});
	}

	setAlert(alert) {
		console.log(alert);
		this.setState({
			alert,
		});
	}

	render() {
		const { display, dismiss } = this.props;
		const { loginVisible, errors } = this.state;
		if (display === false) {
			return null;
		}
		return (
			<div role="modal-dismiss" className="modal-login" onClick={dismiss} onKeyDown={dismiss}>
				<button type="button" role="modal-dismiss" className="modal-close" onClick={dismiss}>
					X
				</button>
				<LoginForm
					visible={loginVisible}
					alert={this.state.alert.element === 'login' ? this.state.alert : {}}
					setAlert={(alert) => this.setAlert(alert)}
					toggle={() => this.toggleLogin()}
					logIn={this.props.logIn}
				/>
				<RegisterForm
					visible={!loginVisible}
					alert={this.state.alert.element === 'register' ? this.state.alert : {}}
					setAlert={(alert) => this.setAlert(alert)}
					toggle={() => this.toggleLogin()}
				/>
			</div>
		);
	}
}

export default Login;
