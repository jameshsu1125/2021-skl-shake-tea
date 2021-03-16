import React from 'react';
import './main.less';

export default class Video extends React.Component {
	render() {
		return (
			<div id={`video${this.props.index}`} className='school-video'>
				<div className='frame'>
					<div className='tag'>
						{`${this.props.tag} #`}
						<span>{this.props.index}</span>
					</div>
					<div className='title'>{this.props.title}</div>
					<div className='yt'>
						<iframe
							width='665'
							height='422'
							src={`https://www.youtube.com/embed/${this.props['yt-id']}`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
					</div>
				</div>
			</div>
		);
	}
}
