import React, { Component } from 'react';
import './css/fundProgress.css';

class FundProgress extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="goal">
				<div id="progress">
					<p>Insert progress here</p>
				</div>
			</div>
		);
	}
}

export default FundProgress;
