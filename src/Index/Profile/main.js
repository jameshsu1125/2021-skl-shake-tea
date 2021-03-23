import $ from 'jquery';
import React from 'react';
import './main.less';
require('jquery-easing');
require('jquery.waitforimages');

export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {
				this.board.init();
				this.radio.init();
				this.pen.init();
			},
			in() {
				this.board.in();
				this.pen.in();
			},
			pen: {
				r: 20,
				t: -10,
				delay: 500,
				time: 1200,
				index: 0,
				init() {
					this.c = $(root.refs.pen);
					this.h = this.c.height();
					this.tran();
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{ r: 0, t: 0 },
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => {
									this.tran();
									this.loop();
								},
								easing: 'easeOutElastic',
							}
						);
				},
				loop() {
					$(this)
						.delay(2000)
						.queue(function () {
							this.index = 1;
							this.tran();
							$(this).dequeue();
						})
						.animate(
							{ r: 30, t: 10 },
							{
								duration: this.time / 3,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutQuart',
							}
						)
						.animate(
							{ r: 34 },
							{
								duration: 100,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutBack',
							}
						)
						.animate(
							{ r: 28 },
							{
								duration: 100,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutBack',
							}
						)
						.animate(
							{ r: 34 },
							{
								duration: 100,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutBack',
							}
						)
						.animate(
							{ r: 28 },
							{
								duration: 100,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutBack',
							}
						)
						.animate(
							{ r: 34 },
							{
								duration: 100,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutBack',
							}
						)
						.animate(
							{ r: 28 },
							{
								duration: 100,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutBack',
							}
						)
						.queue(function () {
							this.index = 0;
							this.tran();
							$(this).dequeue();
						})
						.animate(
							{ r: 0, t: 0 },
							{
								duration: this.time,
								step: () => this.tran(),
								complete: () => {
									this.tran();
									this.loop();
								},
								easing: 'easeOutElastic',
							}
						);
				},
				tran() {
					this.c.css({
						transform: `rotate(${this.r}deg)`,
						'-webkit-transform': `rotate(${this.r}deg)`,
						'-moz-transform': `rotate(${this.r}deg)`,
						'-o-transform': `rotate(${this.r}deg)`,
						'-ms-transform': `rotate(${this.r}deg)`,
						top: this.t + 'px',
						'background-position-y': 0 - this.index * this.h + 'px',
					});
				},
			},
			radio: {
				selected: 'male',
				init() {
					this.male = $(root.refs.male);
					this.female = $(root.refs.female);
					this.set();
				},
				set() {
					this[this.selected].addClass('on');
					this[this.selected == 'male' ? 'female' : 'male'].removeClass('on');
				},
				switch() {
					this.selected = this.selected == 'male' ? 'female' : 'male';
					this.set();
				},
			},
			board: {
				s: 1,
				b: -1000,
				time: 1000,
				init() {
					this.c = $(root.refs.board);
					this.evt();
				},
				in() {
					$(this).animate(
						{ b: -10 },
						{
							duration: this.time,
							step: () => this.tran(),
							complete: () => this.tran(),
							easing: 'easeOutQuart',
						}
					);
				},
				evt() {
					this.resize();
					$(window).resize(() => this.resize());
				},
				resize() {
					this.s = window.innerHeight / 1000;
					this.s = this.s >= 1 ? 1 : this.s;
					this.tran();
				},
				tran() {
					this.c.css({
						transform: `scale(${this.s})`,
						'-webkit-transform': `scale(${this.s})`,
						'-moz-transform': `scale(${this.s})`,
						'-o-transform': `scale(${this.s})`,
						'-ms-transform': `scale(${this.s})`,
						bottom: this.b + 'px',
					});
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
		$(this.refs.main).waitForImages({
			finished: () => this.tr.in(),
			waitForAll: true,
		});
	}

	check() {
		let name = this.refs.name.value;
		let gender = this.tr.radio.selected;
		let age = this.refs.age.value;
		this.props.end(name, gender, age);
	}

	append_option() {
		return [...new Array(31).keys()].map((e) => (
			<option key={e} value={e + 15}>
				{e + 15}
			</option>
		));
	}

	render() {
		return (
			<div ref='main' id='Profile'>
				<div ref='board' className='board'>
					<div className='bg'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div ref='pen'></div>
						<div></div>
					</div>
					<div className='profile-ctx'>
						<div className='title'></div>
						<div className='edit'>
							<div className='row'>
								<div className='text'>請填寫你的取餐資料</div>
							</div>
							<div className='row'>
								<div className='input'>
									<div className='head'>姓名</div>
									<div className='body'>
										<input ref='name' type='text' />
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='input'>
									<div className='head'>性別</div>
									<div className='body2'>
										<div
											ref='male'
											className='radio'
											onClick={() => {
												this.tr.radio.switch();
											}}>
											<div></div>
										</div>
										<div className='label mr'>男性</div>
										<div
											ref='female'
											className='radio'
											onClick={() => {
												this.tr.radio.switch();
											}}>
											<div></div>
										</div>
										<div className='label'>女性</div>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='input'>
									<div className='head'>年齡</div>
									<div className='body'>
										<select ref='age' defaultValue='30'>
											{this.append_option()}
										</select>
									</div>
								</div>
							</div>
						</div>
						<div
							className='btn'
							onClick={() => {
								this.check();
							}}>
							<div>
								確認
								<br />
								送出
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
