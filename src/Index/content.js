import React from 'react';
import './content.less';

import $ from 'jquery';
require('jquery-easing');

export default class Content extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {
				this.parallax.init();
			},
			parallax: {
				doms: [],
				init() {
					this.c = $(root.refs.para);
					this.evt();
				},
				evt() {
					const self = this;

					this.c.children('div').each(function () {
						self.doms.push(new self.onScroll(this));
					});

					this.scroll = () => {
						let nowTop =
							window.pageYOffset ||
							document.documentElement.scrollTop ||
							document.body.scrollTop;

						let start = $('.content').offset().top;
						let end = $('#index').height();
						let p = nowTop / (end - start);

						self.doms.forEach((e) => {
							e.pan(p - 0.5);
						});
					};

					$(window).scroll(this.scroll);
				},
				onScroll(div) {
					this.tar = $(div);
					this.y = parseInt(this.tar.css('background-position-y'));
					this.size = parseInt(this.tar.css('background-size'));
					this.ps = this.size / (1000 - 0);

					this.pan = (p) => {
						this.py = this.y + this.size * p * this.ps;
						this.tar.css('background-position-y', this.py + '%');
					};
					//console.log(this);
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	render() {
		return (
			<div className='content'>
				<div ref='para' className='parallax'>
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
					<div></div>
				</div>
				{this.props.children}
			</div>
		);
	}
}
