import React from 'react';
import './main.less';

import NextStepButton from './../NextStepButton/main';
import Items from './../Items/main';
import Arrow from './arrow';
import Dots from './dots';

import $ from 'jquery';
require('jquery-easing');
import { Data } from './../Items/data';

export default class carousel extends React.Component {
	constructor(props) {
		super(props);

		this.num = Data['step' + this.props.index]?.length || 0;

		const root = this;
		this.tr = {
			init() {
				this.slick.init();
			},
			slick: {
				gap: 200,
				is: true,
				l: 0,
				index: 0,
				max: 2,
				time: 500,
				init() {
					this.c = $(root.refs.slick);
					this.clicked = () => {
						this.add_evt();
					};
					root.refs.touch.addEventListener('touchstart', (e) => this.clicked(e));
					root.refs.touch.addEventListener('mousedown', (e) => this.clicked(e));
				},
				add_evt() {
					let px = 0,
						dx = 0;

					Click.ex_down = (e) => {
						if (e.target.className != 'touch') return;
						px = e.pageX || e.changedTouches[0].clientX;
						dx = 0;
					};

					Click.ex_up = (e) => {
						if (dx != 0 && px != 0) this.panBack();
						Click.ex_down = () => {};
						Click.ex_move = () => {};
						Click.ex_up = () => {};
					};

					Click.ex_move = (e) => {
						if (!this.is) return;
						if (Click.is_press && px != 0) {
							let p = e.pageX || e.changedTouches[0].clientX;
							dx = px - p;
							this.offset(dx);
							if (dx > this.gap) {
								this.next();
								px = 0;
							} else if (dx < this.gap * -1) {
								this.prev();
								px = 0;
							}
						}
					};
				},
				offset(dx) {
					this.l = 0 - (this.index + dx / 750) * 100;
					this.tran();
				},
				set() {
					if (this.index >= root.num) {
						this.index = 0;
						this.l = 0 - this.index * 100;
						this.tran();
					} else if (this.index == -1) {
						this.index = root.num - 1;
						this.l = 0 - this.index * 100;
						this.tran();
					}
					root.refs.dots.setState({ index: this.index });
				},
				next() {
					if (!this.is) return;
					this.index++;
					if (this.index >= root.nun + 1) this.index = 0;
					this.panto('next');
				},
				prev() {
					if (!this.is) return;
					this.index--;
					if (this.index < -1) this.index = root.nun - 1;
					this.panto('prev');
				},
				panto(direct) {
					this.is = false;

					$(this).animate(
						{ l: 0 - this.index * 100 },
						{
							duration: this.time,
							step: () => this.tran(),
							complete: () => {
								this.is = true;
								this.tran();
								this.set();
							},
							easing: 'easeOutQuart',
						}
					);
				},
				panBack() {
					this.is = false;
					$(this).animate(
						{ l: 0 - this.index * 100 },
						{
							duration: 400,
							step: () => this.tran(),
							complete: () => {
								this.is = true;
								this.tran();
							},
							easing: 'easeOutBack',
						}
					);
				},
				tran() {
					this.c.css({
						left: this.l + '%',
					});
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	append_submit_button() {
		if (this.props.index == this.props.steps) return <NextStepButton />;
	}

	render() {
		return (
			<div id='carousel'>
				<div className='container'>
					<div className={`question t${this.props.index}`}>
						{this.props.question}
					</div>
					<div className='answer'>
						<div className='res'>
							<div className='slider-ctx'>
								<div ref='slick' className='slick'>
									<Items ref='items' step={this.props.index} />
								</div>
								<div
									ref='touch'
									id={`touch${this.props.index}`}
									className='touch'></div>
								<Arrow
									direct='prev'
									onClick={() => {
										this.tr.slick.prev();
									}}
								/>
								<Arrow
									direct='next'
									onClick={() => {
										this.tr.slick.next();
									}}
								/>
								<Dots ref='dots' num={this.num} />
							</div>
						</div>
					</div>
					{this.append_submit_button()}
				</div>
			</div>
		);
	}
}
