import React from 'react';
import './main.less';
import Item from './item';

import $ from 'jquery';
require('jquery-easing');

import { Data } from './data';

export default class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: Data['step' + this.props.step] || [] };
	}

	componentDidMount() {}

	offset(v) {
		//console.log(v);
	}

	append_slicks() {
		const Data = [
			this.state.data[this.state.data.length - 1],
			...this.state.data,
			this.state.data[0],
		];
		return Data.map((e, i) => <Item key={i} {...e} />);
	}

	render() {
		return <>{this.append_slicks()}</>;
	}
}
