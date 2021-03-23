import React from 'react';
import './main.less';

export default class Content extends React.Component {
	render() {
		return (
			<div className='school-content'>
				<div className='para'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				{this.props.children}
			</div>
		);
	}
}
