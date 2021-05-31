import React from 'react';
import './main.less';

export default class Sign extends React.Component {
	render() {
		return (
			<div id='Sign' style={{ ...this.props.style }} className={this.props.size || ''}>
				<div>
					<div />
					{this.props.children}
				</div>
			</div>
		);
	}
}
