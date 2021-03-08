import React from 'react';
import './main.less';

export default class Nav extends React.Component {
	render() {
		return (
			<div id='Nav'>
				<div
					onClick={() => {
						this.props.open();
					}}
					className='han'>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
}
