import $ from 'jquery';
import Parameter from 'lesca-url-parameters';
import React from 'react';
import './main.less';
require('jquery-easing');
require('jquery.waitforimages');

export default class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.filename = ['index.html', 'index.html#play', 'video.html', 'school.html', 'plan.html'];

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
		this.addMenuBorder = () => {
			const file = Parameter.file();
			const hash = location.hash;
			let index = 0;
			for (let i = 0; i < this.filename.length; i++) {
				if (file == this.filename[i]) {
					index = i;
					if (i == 0 && hash == '#play') {
						index = 1;
					}
				}
			}
			const tar = $(this.refs.content).children('div');

			tar.removeClass('on');
			tar[index].classList.add('on');
		};
		this.addMenuBorder();
		$(window).on('hashchange', () => this.addMenuBorder());
	}

	close() {
		this.tr.out(this.props.close);
	}

	render() {
		return (
			<div id='Menu'>
				<div className='bg' onClick={this.close.bind(this)}></div>
				<div ref='content' className='content'>
					<div
						className='row'
						onClick={() => {
							window.location.href = Parameter.root();
						}}>
						<span>??????</span>
					</div>
					<div
						className='row'
						onClick={() => {
							window.location.href = Parameter.root() + '#play';
						}}>
						<span>????????????</span>
					</div>
					<div
						className='row'
						onClick={() => {
							window.location.href = './video.html';
						}}>
						<span>????????????</span>
					</div>
					<div
						className='row'
						onClick={() => {
							window.location.href = './school.html';
						}}>
						<span>??????????????????</span>
					</div>
					<div
						className='row'
						onClick={() => {
							window.location.href = './plan.html';
						}}>
						<span>???????????????????????????</span>
					</div>
					<div
						className='row'
						onClick={() => {
							window.open('https://campaign.skl.com.tw/skl-goodtime');
						}}>
						<span>????????????</span>
					</div>
					<div className='close' onClick={this.close.bind(this)}>
						<div />
						<div />
					</div>
				</div>
			</div>
		);
	}
}
