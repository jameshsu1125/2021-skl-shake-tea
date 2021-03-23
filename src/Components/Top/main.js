import React from 'react';
import './main.less';

export default class Top extends React.Component {
	render() {
		return (
			<div className='component-top' onClick={this.props.scrollto}>
				<div></div>
			</div>
		);
	}
}
