import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/button.css';

class Button extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<>
				<button className={this.props.className}>
					<FontAwesomeIcon icon={this.props.type} size={this.props.size} />
				</button>
			</>
		);
	}
}

export default Button;
