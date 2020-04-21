import React, { Component } from 'react';
import './css/fundBar.css';

class FundBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const prog = "width:" + this.props.
		const { amount } = this.props;
		const { goal } = this.props;

		return (
			<div id="goal">
				<div id="progress" style={{ width: `${(amount / goal) * 100}%` }}>
					${amount} / ${goal}
				</div>
			</div>
		);
	}
}

export default FundBar;
