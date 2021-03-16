import React from 'react';
import './arrow.less';

export default class arrow extends React.Component {
	render() {
		return <div onClick={this.props.onClick} className={`_slick_arrow ${this.props.direct}`}></div>;
	}
}
