import $ from 'jquery';
import React from 'react';
import Config from './../../_config';
require('jquery-easing');

export default class itemRadio extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {
				this.box.init();
				this.bg.init();
				this.fg.init();
				this.fg2.init();
			},
			offset(v) {
				this.box.offset(v);
				this.bg.offset(v);
				this.fg.offset(v);
				this.fg2.offset(v);
			},
			back() {
				this.box.back();
				this.bg.back();
				this.fg.back();
				this.fg2.back();
			},
			in(direct) {
				this.box.in(direct);
				this.bg.in(direct);
				this.fg.in(direct);
				this.fg2.in(direct);
			},
			reset() {
				this.box.reset();
				this.bg.reset();
				this.fg.reset();
				this.fg2.reset();
			},
			fg2: {
				r: Config.carousel.front2.r,
				x: 0,
				panX: Config.carousel.front2.offset,
				marginX: -266,
				init() {
					this.c = $(root.refs.front2);
				},
				reset() {
					this.x = 0;
					this.tran();
				},
				in(direct) {
					this.x = direct == 'next' ? this.panX * -1 : this.panX;
					this.back(Config.carousel.duration);
				},
				offset(v) {
					this.x = v * this.r;
					this.tran();
				},
				back(t = Config.carousel.back_duration) {
					$(this).stop();
					$(this).clearQueue();
					$(this).animate(
						{ x: 0 },
						{
							duration: t,
							step: () => this.tran(),
							complete: () => this.tran(),
							easing: 'easeOutQuart',
						}
					);
				},
				tran() {
					this.c.css({
						'margin-left': this.marginX - Math.floor(this.x) + 'px',
					});
				},
			},
			fg: {
				r: Config.carousel.front.r,
				x: 0,
				panX: Config.carousel.front.offset,
				marginX: -266,
				init() {
					this.c = $(root.refs.front);
				},
				reset() {
					this.x = 0;
					this.tran();
				},
				in(direct) {
					this.x = direct == 'next' ? this.panX * -1 : this.panX;
					this.back(Config.carousel.duration);
				},
				offset(v) {
					this.x = v * this.r;
					this.tran();
				},
				back(t = Config.carousel.back_duration) {
					$(this).stop();
					$(this).clearQueue();
					$(this).animate(
						{ x: 0 },
						{
							duration: t,
							step: () => this.tran(),
							complete: () => this.tran(),
							easing: 'easeOutQuart',
						}
					);
				},
				tran() {
					this.c.css({
						'margin-left': this.marginX - Math.floor(this.x) + 'px',
					});
				},
			},
			bg: {
				r: Config.carousel.back.r,
				x: 0,
				panX: Config.carousel.back.offset,
				marginX: -266,
				init() {
					this.c = $(root.refs.back);
				},
				reset() {
					this.x = 0;
					this.tran();
				},
				in(direct) {
					this.x = direct == 'next' ? this.panX * -1 : this.panX;
					this.back(Config.carousel.duration);
				},
				offset(v) {
					this.x = v * this.r;
					this.tran();
				},
				back(t = Config.carousel.back_duration) {
					$(this).stop();
					$(this).clearQueue();
					$(this).animate(
						{ x: 0 },
						{
							duration: t,
							step: () => this.tran(),
							complete: () => this.tran(),
							easing: 'easeOutQuart',
						}
					);
				},
				tran() {
					this.c.css({
						'margin-left': this.marginX - Math.floor(this.x) + 'px',
					});
				},
			},
			box: {
				r: Config.carousel.box.r,
				x: 0,
				panX: Config.carousel.box.offset,
				marginX: -266,
				init() {
					this.c = $(root.refs.box);
				},
				reset() {
					this.x = 0;
					this.tran();
				},
				in(direct) {
					this.x = direct == 'next' ? this.panX * -1 : this.panX;
					this.back(Config.carousel.duration);
				},
				offset(v) {
					this.x = v * this.r;
					this.tran();
				},
				back(t = Config.carousel.back_duration) {
					$(this).stop();
					$(this).clearQueue();
					$(this).animate(
						{ x: 0 },
						{
							duration: t,
							step: () => this.tran(),
							complete: () => this.tran(),
							easing: 'easeOutQuart',
						}
					);
				},
				tran() {
					this.c.css({
						'margin-left': this.marginX - Math.floor(this.x) + 'px',
					});
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	reset() {
		this.tr.reset();
	}

	in(direct) {
		this.tr.in(direct);
	}

	back() {
		this.tr.back();
	}

	offset(v) {
		this.tr.offset(v);
	}

	render() {
		return (
			<div className='item_radio'>
				<div ref='back' className='back'></div>
				<div className='shadow'></div>

				<div className='cup'>
					<div className='water'></div>
					<div className='ice'></div>
					<div className='frame'></div>
				</div>
				<div ref='front' className='front'></div>
				<div ref='front2' className='front2'></div>
			</div>
		);
	}
}
