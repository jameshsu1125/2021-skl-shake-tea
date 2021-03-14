import React from 'react';
import './main.less';
import Background from './background';
import Store from './store';

import $ from 'jquery';
require('jquery-easing');
require('jquery.waitforimages');

export default class home extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {},
			in() {
				root.refs.store.in();
			},
		};
	}

	componentDidMount() {
		$(this.refs.main).waitForImages({
			finished: () => this.tr.in(),
			each: (e) => {},
			waitForAll: true,
		});
	}

	render() {
		return (
			<div ref='main' id='home'>
				<Background />
				<Store ref='store' clicked={this.props.clicked} />
			</div>
		);
	}
}
