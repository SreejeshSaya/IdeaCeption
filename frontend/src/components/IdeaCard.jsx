import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/ideaCard.css';

function IdeaCard(props) {
	const { id, title, abstract } = props;
	return (
		<div className="idea-card">
			<div className="idea-card-lightbulb">
				<FontAwesomeIcon icon="lightbulb" size="9x" />
			</div>
			<div className="idea-text">
				<a href={`/ideas/${id}`}>
					<h5 className="idea-title">{title}</h5>
				</a>
				<hr />
				<p className="idea-abstract">{abstract}</p>
			</div>
		</div>
	);
}

export default IdeaCard;
