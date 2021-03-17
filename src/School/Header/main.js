import React from 'react';
import './main.less';
import Sign from '../../Components/Sign/main';

export default class Header extends React.Component {
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
