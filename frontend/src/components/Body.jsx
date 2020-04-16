import React, { Component } from 'react';

class Body extends Component {
	constructor(props) {
		super(props);

		this.classes = {
			body: 'container',
			centerCol: 'col-md-12 offset-md-1',
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
