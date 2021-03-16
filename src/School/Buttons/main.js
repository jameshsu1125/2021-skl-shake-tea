import React from 'react';
import './main.less';

export default class Buttons extends React.Component {
	clicked(e) {
		this.props.scrollTo(`#video${e.target.dataset.id}`);
	}

	render() {
		return (
			<div id='Buttons'>
				<div data-id='5' className='btn' onClick={this.clicked.bind(this)}>
					保險新手
					<br />
					<span>筆記#5</span>
				</div>
				<div data-id='4' className='btn' onClick={this.clicked.bind(this)}>
					保險新手
					<br />
					<span>筆記#4</span>
				</div>
				<div data-id='3' className='btn' onClick={this.clicked.bind(this)}>
					保險新手
					<br />
					<span>筆記#3</span>
				</div>
				<div data-id='2' className='btn' onClick={this.clicked.bind(this)}>
					保險新手
					<br />
					<span>筆記#2</span>
				</div>
				<div data-id='1' className='btn' onClick={this.clicked.bind(this)}>
					保險新手
					<br />
					<span>筆記#1</span>
				</div>
				<div className='shadow'></div>
			</div>
		);
	}
}
