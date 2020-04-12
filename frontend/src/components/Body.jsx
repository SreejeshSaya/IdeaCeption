import React, { Component } from 'react';

class Body extends Component {
	constructor(props) {
		super(props);

		this.classes = {
			body: 'container',
			centerCol: 'col-md-8 offset-md-2',
		};
	}

	render() {
		const { children } = this.props;
		return (
			<div className={this.classes.body}>
				<div className={this.classes.centerCol}>{children}</div>
			</div>
		);
	}
}

export default Body;
