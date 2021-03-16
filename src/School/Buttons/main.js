import React from 'react';
import './main.less';

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		//script
	}

	componentDidMount() {
		//script
	}

	componentDidUpdate() {
		//script
	}

	componentWillUnmount() {
		//script
	}

	render() {
		return (
			<div id='Buttons'>
				<div className='btn'>
					保險新手
					<br />
					<span>筆記#5</span>
				</div>
				<div className='btn'>
					保險新手
					<br />
					<span>筆記#4</span>
				</div>
				<div className='btn'>
					保險新手
					<br />
					<span>筆記#3</span>
				</div>
				<div className='btn'>
					保險新手
					<br />
					<span>筆記#2</span>
				</div>
				<div className='btn'>
					保險新手
					<br />
					<span>筆記#1</span>
				</div>
				<div className='shadow'></div>
			</div>
		);
	}
}
