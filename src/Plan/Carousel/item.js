import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './item.less';

export default class item extends React.Component {
	render() {
		return (
			<div className='plan-item'>
				<div className='frame'>
					<div className={`plan-contents bg${this.props.index}`}>
						<div className='headline'>{this.props.headline}</div>
						<div className='subline'>{this.props.subline}</div>
						<div className='item'>
							{this.props.items.map((e, i) => (
								<div key={i}>{ReactHtmlParser(e)}</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
