import React from 'react';

function Alert(props) {
	if (!props.children) {
		return null;
	}
	return (
		<div className={`alert alert-${props.messageClass} alert-dismissible fade show`}>
			{props.children}
			<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>
		</div>
	);
}

export default Alert;
