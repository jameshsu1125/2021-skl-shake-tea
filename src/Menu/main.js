import React from 'react';
import './main.less';

import $ from 'jquery';
require('jquery-easing');
require('jquery.waitforimages');

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {
				this.content.init();
				return this;
			},
			in() {
				this.content.in();
			},
			out(fn) {
				this.content.out(fn);
			},
			content: {
				top: 0 - window.innerHeight,
				o: 0,
				time: 500,
				init() {
					this.c = $(root.refs.content);
					this.ot = this.top;
					this.tran();
				},
				in() {
					$(this).animate(
						{ o: 1, top: 0 },
						{
							duration: this.time,
							step: () => this.tran(),
							complete: () => this.tran(),
							easing: 'easeOutQuart',
						}
					);
				},
				out(fn) {
					$(this).animate(
						{ o: 0, top: this.ot },
						{
							duration: this.time,
							step: () => this.tran(),
							complete: () => {
								this.tran();
								fn();
							},
							easing: 'easeOutQuart',
						}
					);
				},
				tran() {
					this.c.css({
						'margin-top': this.top + 'px',
						opacity: this.o,
					});
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init().in();
	}

	close() {
		this.tr.out(this.props.close);
	}

	render() {
		return (
			<div id='Menu'>
				<div className='bg' onClick={this.close.bind(this)}></div>
				<div ref='content' className='content'>
					<div className='row'>
						<span>首頁</span>
					</div>
					<div className='row'>
						<span>開始遊戲</span>
					</div>
					<div className='row'>
						<span>廣告影片</span>
					</div>
					<div className='row'>
						<span>手搖族小學堂</span>
					</div>
					<div className='row'>
						<span>好時光保險計畫</span>
					</div>
					<div className='row'>
						<span>諮詢專人</span>
					</div>
					<div className='close' onClick={this.close.bind(this)}>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		);
	}
}
