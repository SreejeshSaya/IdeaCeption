import React from 'react';

function LoginButton(props) {
	const { loginState, loginFunc, logoutFunc } = props;

	return (
		<button
			type="button"
			className="btn btn-info mr-3"
			onClick={loginState ? logoutFunc : loginFunc}
		>
			{loginState ? 'Logout' : 'Login'}
		</button>
	);
}

export default LoginButton;
