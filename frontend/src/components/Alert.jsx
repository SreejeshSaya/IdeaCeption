import React from 'react';

function Alert(props) {
	if (!props.children) {
		return null;
	}
	return <div className={`alert alert-${props.messageClass}`}>{props.children}</div>;
}

export default Alert;
