import React from 'react';
import './css/about.css';
import BigButton from 'components/BigButton';

function Home(props) {
	return (
		<div>
			<h2>Home</h2>
			<br />
			<p>
				Hello! Welcome to IdeaCeption. IdeaCeption is a crowd funding website. Let your ideas flow.
			</p>
			<br />
			<div id="quickButtons">
				<BigButton type="add" link="/ideas/add" />
				<BigButton type="browse" link="/ideas/browse" />
			</div>
		</div>
	);
}

export default Home;
