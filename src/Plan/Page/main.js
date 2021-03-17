import React from 'react';
import './main.less';
import htmlParser from 'react-html-parser';

export default class Page extends React.Component {
	render() {
		return (
			<div className='plan-page'>
				<div className='container'>
					<div className={`plan plan-${this.props.index}`}></div>
					<div className='items'>
						{this.props.data.map((e, i) => (
							<div key={i} style={{ backgroundColor: e.color }}>
								{htmlParser(e.text)}
							</div>
						))}
					</div>
					<div className='plan-btn'>諮詢專人</div>
				</div>
			</div>
		);
	}
}
