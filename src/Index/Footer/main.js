import $ from 'jquery';
import UserAgent from 'lesca-user-agent';
import React from 'react';
import './main.less';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {
				this.c = $(root.refs.main);
				this.resize();
				$(window).resize(() => {
					this.resize();
				});
			},
			resize() {
				if (UserAgent.get() === 'mobile') this.c.css('height', '110px');
				else this.c.css('height', '250px');
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	render() {
		return (
			<div ref='main' id='footer'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
}
