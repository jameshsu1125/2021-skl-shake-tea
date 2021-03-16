import React from 'react';
import './main.less';
import Sign from '../../Components/Sign/main';

export default class Header extends React.Component {
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
			<div id='Header'>
				<div className='bg'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<Sign>
					<div className='school'></div>
				</Sign>
				{this.props.children}
			</div>
		);
	}
}
