import React from 'react';
import { school as Data } from '../../_config';
import './main.less';

export default class Buttons extends React.Component {
	clicked(e) {
		this.props.scrollTo(`#video${e.target.dataset.id}`);
	}

	apppend() {
		const { length } = Data;
		return Data.map((e, i) => {
			return (
				<div key={i} data-id={length - i} className='btn' onClick={this.clicked.bind(this)}>
					保險新手
					<br />
					<span>筆記#{length - i}</span>
				</div>
			);
		});
	}

	render() {
		return (
			<div id='Buttons'>
				{this.apppend()}
				<div className='shadow'></div>
			</div>
		);
	}
}
