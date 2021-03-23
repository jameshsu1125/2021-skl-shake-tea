import $ from 'jquery';
import React from 'react';
import EmptyStepButton from '../NextStepButton/emptyStep';
import NextStepButton from '../NextStepButton/main';
import { Data } from './data';
import './main.less';

require('jquery-easing');

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
		const root = this;

		this.data = Data['step' + this.props.index];
		this.num = this.data.length;
		this.state = { ...this.data[0], btn: false };
		this.selectIndex = 0;

		this.tr = {
			init() {
				this.slider.init();
			},
			slider: {
				is: true,
				btnx: 0,
				max: 465,
				init() {
					this.c = $(root.refs.btn);
					this.dialog = $(root.refs.dialog);

					this.clicked = () => {
						Click.preventDefault = true;
						this.add_evt();
					};
					root.refs.btn.addEventListener('touchstart', (e) => this.clicked(e));
					root.refs.btn.addEventListener('mousedown', (e) => this.clicked(e));
				},
				add_evt() {
					let px = 0,
						dx = 0;
					Click.ex_down = (e) => {
						if (e.target.className != 'btn') return;
						px = e.pageX || e.changedTouches[0].clientX;
						dx = 0;
					};
					Click.ex_up = (e) => {
						Click.ex_down = () => {};
						Click.ex_move = () => {};
						Click.ex_up = () => {};
						Click.preventDefault = false;
						this.btnx = parseInt(this.c.css('left'));
					};
					Click.ex_move = (e) => {
						if (!this.is) return;
						if (Click.is_press && px != 0) {
							let p = e.pageX || e.changedTouches[0].clientX;
							dx = px - p;
							this.offset(dx);
						}
					};
				},
				offset(v) {
					let l = this.btnx - v;
					if (l > this.max) l = this.max;
					else if (l < 0) l = 0;
					this.c.css('left', l + 'px');
					this.syncText(l);
				},
				syncText(v) {
					let lev = Math.round(v / this.max / (1 / (root.num - 1)));
					root.selectIndex = lev;
					root.setState({ ...root.data[lev] });
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	getData() {
		return this.selectIndex;
	}

	append_suger() {
		if (this.props.index == '3')
			return (
				<div className='sugers'>
					<div></div>
					<div></div>
					<div></div>
				</div>
			);
	}

	next_btn_clicked() {
		this.refs.nextButton.tr.canvas.tweenTo(this.props.index, () => {
			this.props.scrollTo(`.step${parseInt(this.props.index) + 1}`);
			setTimeout(() => {
				this.setState({ btn: false });
			}, 1000);
		});
	}

	append_submit_button() {
		if (this.state.btn)
			return (
				<NextStepButton
					ref='nextButton'
					index={this.props.index}
					clicked={this.next_btn_clicked.bind(this)}
					text={this.props.index === '4' ? '送出點餐' : '下一步'}
				/>
			);
		else return <EmptyStepButton />;
	}

	render() {
		return (
			<div id='Slider' className={`step${this.props.index}`}>
				<div className='container'>
					<div className={`question t${this.props.index}`}>
						{this.props.question}
					</div>
					<div className='answer'>
						<div className='slider'>
							{this.append_suger()}
							<div className='components'>
								<div className='dot left'></div>
								<div className='dot right'></div>
								<div className='num l'>0</div>
								<div className='num r'>{this.props.index == 3 ? '100' : '15'}</div>
								<div ref='btn' className='btn'>
									<div>
										<div ref='dialog' className='dialog'>
											{this.state.text}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{this.append_submit_button()}
				</div>
			</div>
		);
	}
}
