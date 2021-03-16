import React from 'react';
import './main.less';

export default class Sign extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		//script
	}

	render() {
		return (
			<div id='Sign' style={{ ...this.props.style }}>
				<div>
					<div></div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
