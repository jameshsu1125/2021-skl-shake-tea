import React from 'react';
import './main.less';
import Sign from './../Sign/main';

export default class Step1 extends React.Component {
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
			<div id='Step1'>
				<Sign />
				<div className='container'>
					<div className='row'>
						<div className='title'>你喜歡的茶品基底？</div>
					</div>
				</div>
			</div>
		);
	}
}
