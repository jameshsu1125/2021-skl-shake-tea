import $ from 'jquery';
import React from 'react';
import Swal from 'sweetalert2';
import { Data } from './../Items/data';
import Items from './../Items/main';
import EmptyStepButton from './../NextStepButton/emptyStep';
import NextStepButton from './../NextStepButton/main';
import Arrow from './arrow';
import Dots from './dots';
import './main.less';
require('jquery-easing');

export default class carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = { btn: false };
		this.num = Data['step' + this.props.index]?.length || 0;
		this.type = this.props.index == '1' ? 'radio' : 'checkbox';
		this.data = this.type == 'radio' ? '' : [];
		this.isClicked = false;

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
				time: require('./../../_config').carousel.duration,
				init() {
					this.c = $(root.refs.slick);
					this.c.css('width', `${root.num + 2}00vw`);
					this.clicked = () => {
						Click.preventDefault = true;
						this.add_evt();
					};
					Click.add('.touch', () => {
						root.clicked();
					});
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
						Click.preventDefault = false;
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
					root.refs.items.offset(this.index, dx);
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
					root.refs.items.in(this.index, direct);
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
					root.refs.items.back(this.index);
					$(this).animate(
						{ l: 0 - this.index * 100 },
						{
							duration: require('./../../_config').carousel.back_duration,
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

	getData() {
		return this.data;
	}

	next_btn_clicked() {
		const comfirm = () => {
			if (this.isClicked) return;
			this.isClicked = true;
			this.refs.nextButton.tr.canvas.tweenTo(this.props.index, () => {
				this.props.scrollTo(`.step${parseInt(this.props.index) + 1}`);
				setTimeout(() => {
					this.setState({ btn: false });
				}, 1000);
			});
		};

		if (this.type == 'radio') {
			if (typeof this.data !== 'number')
				Swal.fire({
					title: '請選擇一個茶品基底',
					text: '喜歡喝紅茶還是綠茶呢',
					icon: 'warning',
				});
			else comfirm();
		} else {
			if (this.data.length == 0)
				Swal.fire({
					title: '請選擇一個配料',
					text: '加個珍珠還是來個蒟蒻?',
					icon: 'warning',
				});
			else comfirm();
		}
	}

	append_submit_button() {
		if (this.state.btn)
			return (
				<NextStepButton
					ref='nextButton'
					index={this.props.index}
					clicked={this.next_btn_clicked.bind(this)}
					text={'下一步'}
				/>
			);
		else return <EmptyStepButton />;
	}

	clicked() {
		switch (this.type) {
			case 'radio':
				this.data = this.tr.slick.index;
				break;

			case 'checkbox':
				if (this.data.indexOf(this.tr.slick.index) == -1) {
					this.data.push(this.tr.slick.index);
				} else {
					this.data = this.data.filter((e) => e !== this.tr.slick.index);
				}
				break;
		}
		this.refs.items.updateState(this.type, this.data);
	}

	render() {
		return (
			<div
				id='carousel'
				className={`step${this.props.index}`}
				style={this.props.children ? { minHeight: '1000px' } : {}}>
				{this.props.children}
				<div
					className='container'
					style={
						this.props.children
							? { paddingTop: '202px', boxSizing: 'border-box' }
							: {}
					}>
					<div className={`question t${this.props.index}`}>
						{this.props.question}
					</div>
					<div className='answer'>
						<div className='res'>
							<div className='slider-ctx'>
								<div ref='slick' className='slick'>
									<Items
										ref='items'
										step={this.props.index}
										clicked={this.clicked.bind(this)}
									/>
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
