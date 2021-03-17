import React from 'react';
import './main.less';
import Sign from '../../Components/Sign/main';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		//script∏
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
			<div id='Header'>
				<div className='bg'>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className='i0'></div>
				<div className='i1'></div>
				<Sign size='small'>
					<div className='plan'></div>
				</Sign>
				<div className='btn0'></div>
				<div className='btn1'></div>
				<div className='btn2'></div>
				<div className='btn3'></div>
			</div>
		);
	}
}
