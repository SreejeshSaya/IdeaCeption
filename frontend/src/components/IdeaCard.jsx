import React, { Component } from 'react';

class IdeaCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div class="idea-card">
					<a href="">
						<img class="idea-image" src="assets/icons/idea-card.png" alt="IdeaPic" />
					</a>
					<div class="idea-text">
						<a href="">
							<h5 class="idea-title">Idea Name</h5>
						</a>
						<p class="idea-abstract">Idea abstract</p>
					</div>
				</div>
			</>
		);
	}
}

export default IdeaCard;
