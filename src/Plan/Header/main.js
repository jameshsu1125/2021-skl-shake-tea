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
				<div className='btn0' onClick={() => this.props.clicked('carousel')}></div>
				<div className='btn1' onClick={() => this.props.clicked('plan-A')}></div>
				<div className='btn2' onClick={() => this.props.clicked('plan-B')}></div>
				<div className='btn3' onClick={() => this.props.clicked('plan-C')}></div>
			</div>
		);
	}
}
