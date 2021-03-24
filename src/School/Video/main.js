import $ from 'jquery';
import React from 'react';
import './main.less';

require('jquery-easing');

export default class Video extends React.Component {
	in() {
		$(this.refs.main).animate({ opacity: 1 }, 1000, 'easeOutQuart');
	}

	render() {
		return (
			<div ref="main" id={`video${this.props.index + 1}`} className="school-video">
				<div className="frame">
					<div className="tag">
						{`${this.props.tag} #`}
						<span>{this.props.index + 1}</span>
					</div>
					<div className="title">{this.props.title}</div>
					<div className="yt">
						<iframe
							width="665"
							height="422"
							src={`https://www.youtube.com/embed/${this.props['yt-id']}`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
				</div>
			</div>
		);
	}
}
