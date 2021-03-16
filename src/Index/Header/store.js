import React from 'react';
import './store.less';

import $ from 'jquery';
require('jquery-easing');
require('jquery.waitforimages');

export default class store extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {
				this.store.init();
				this.dialog.init();
				this.txt.init();
				this.drink1.init();
				this.drink2.init();
				this.btn.init();
			},
			in() {
				this.store.in();
				this.dialog.in();
				this.txt.in();
				this.drink1.in();
				this.drink2.in();
				this.btn.in();
			},
			btn: {
				o: 0,
				time: 500,
				delay: 1200,
				s: 0,
				init() {
					this.c = $(root.refs.btn);
					this.tran();
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{ o: 1, s: 1 },
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutBack',
							}
						);
				},
				tran() {
					this.c.css({
						transform: `scale(${this.s})`,
						'-webkit-transform': `scale(${this.s})`,
						'-moz-transform': `scale(${this.s})`,
						'-o-transform': `scale(${this.s})`,
						'-ms-transform': `scale(${this.s})`,
						opacity: this.o,
					});
				},
			},
			drink2: {
				b: -500,
				time: 800,
				delay: 500,
				x: -200,
				s: 1,
				r: 90,
				init() {
					this.c = $(root.refs.drink2);
					this.tran();
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{
								b: 0,
								r: 0,
								x: window.innerHeight > 900 ? 90 : 0,
								s: window.innerHeight > 900 ? 1.3 : 1,
							},
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutQuart',
							}
						);
				},
				tran() {
					this.c.css({
						bottom: this.b + 'px',
						right: this.x + 'px',
						transform: `rotate(${this.r}deg) scale(${this.s})`,
						'-webkit-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-moz-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-o-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-ms-transform': `rotate(${this.r}deg) scale(${this.s})`,
					});
				},
			},
			drink1: {
				b: -500,
				time: 800,
				delay: 400,
				l: -200,
				s: 1,
				r: -90,
				init() {
					this.c = $(root.refs.drink1);
					this.tran();
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{ b: 0, l: -50, r: 0, s: window.innerHeight > 900 ? 1.1 : 1 },
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutQuart',
							}
						);
				},
				tran() {
					this.c.css({
						bottom: this.b + 'px',
						left: this.l + 'px',
						transform: `rotate(${this.r}deg) scale(${this.s})`,
						'-webkit-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-moz-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-o-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-ms-transform': `rotate(${this.r}deg) scale(${this.s})`,
					});
				},
			},
			txt: {
				o: 0,
				delay: 1000,
				time: 1000,
				init() {
					this.c = $(root.refs.txt);
					this.tran();
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{ o: 1 },
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutQuart',
							}
						);
				},
				tran() {
					this.c.css({
						opacity: this.o,
					});
				},
			},
			dialog: {
				r: 90,
				s: 0.5,
				time: 2000,
				delay: 300,
				init() {
					this.c = $(root.refs.dialog);
					this.tran();
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{ s: 1, r: 0 },
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutElastic',
							}
						);
				},
				tran() {
					this.c.css({
						transform: `rotate(${this.r}deg) scale(${this.s})`,
						'-webkit-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-moz-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-o-transform': `rotate(${this.r}deg) scale(${this.s})`,
						'-ms-transform': `rotate(${this.r}deg) scale(${this.s})`,
					});
				},
			},
			store: {
				b: -300,
				l: 40,
				time: 1000,
				delay: 0,
				init() {
					this.c = $(root.refs.main);
					this.tran();
					this.evt();
				},
				evt() {
					this.resize();
					$(window).resize(() => this.resize());
				},
				resize() {
					let w = window.innerHeight,
						r = w / 1000;
					r = r > 1 ? 1 : r;
					this.c.css({
						transform: `scale(${r})`,
						'-webkit-transform': `scale(${r})`,
						'-moz-transform': `scale(${r})`,
						'-o-transform': `scale(${r})`,
						'-ms-transform': `scale(${r})`,
					});
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{ b: 0, l: 50 },
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutQuart',
							}
						);
				},
				tran() {
					this.c.css({
						'margin-bottom': this.b + 'px',
						left: this.l + '%',
					});
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	in() {
		this.tr.in();
	}

	render() {
		return (
			<>
				<div ref='main' className='store'>
					<div className='light1'>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className='light2'>
						<div>
							<div></div>
							<div></div>
						</div>
						<div>
							<div></div>
							<div></div>
						</div>
						<div>
							<div></div>
							<div></div>
						</div>
						<div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className='plant'></div>
					<div ref='drink1' className='drink-2'></div>
					<div ref='drink2' className='drink-3'></div>
					<div ref='dialog' className='dialog'></div>
					<div ref='txt' className='txt'>
						<p>
							今天的你一樣那麼努力
							<br />
							值得一杯好料犒賞自己！
						</p>
						<p>
							滿滿好料的 “好時光手搖客製所”
							<br />
							邀你打造自己的保險特調！
						</p>
						<div
							ref='btn'
							onClick={() => {
								this.props.clicked();
							}}
							className='btn'>
							開始
							<br />
							客製
							<div>◢</div>
							<div>◢</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
