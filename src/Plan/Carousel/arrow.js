import React from 'react';
import './arrow.less';

export default class arrow extends React.Component {
	render() {
		return (
			<div
				onClick={this.props.onClick}
				className={`plan-arrow plan-${this.props.dir}`}></div>
		);
	}
}
