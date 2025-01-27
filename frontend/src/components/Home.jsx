import React from 'react';
import './css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home(props) {
	return (
		<div>
			<h1>Home</h1>
			<br />
			<p>
				Hello! Welcome to IdeaCeption. IdeaCeption is a crowd funding website. You can post your
				ideas here and if anyone else finds it interesting and is willing to support your idea, they
				can fund it!
			</p>
			<br />
			<div id="quickButtons">
				<div className="quick-button-large">
					<a href="/ideas/create">
						<FontAwesomeIcon icon="plus-square" size="6x" />
						<span className="quick-button-text">Add</span>
					</a>
				</div>
				<div className="quick-button-large">
					<a href="/ideas">
						<FontAwesomeIcon icon="eye" size="6x" />
						<span className="quick-button-text">Browse</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
