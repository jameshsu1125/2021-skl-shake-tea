import React from 'react';
import './main.less';
import $ from 'jquery';
require('jquery-easing');
require('jquery.waitforimages');

export default class Taste extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			init() {
				this.pop.init();
			},
			in() {
				this.pop.in();
			},
			pop: {
				s: 0,
				r: 30,
				time: 1400,
				init() {
					this.c = $(root.refs.pop);
					this.tran();
				},
				in() {
					$(this)
						.delay(1000)
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
		};
	}

	componentDidMount() {
		this.tr.init();
		$(this.refs.main).waitForImages({
			finished: () => this.tr.in(),
			waitForAll: true,
		});
	}

	render() {
		return (
			<div ref='main' id='Taste' className={`taste${this.props.index}`}>
				<div className='keyv'>
					<div className='item'></div>
					<div className='title'>
						<div></div>
					</div>
					<div className='drink'></div>
					<div className='cups'></div>
					<div ref='pop' className='pop'>
						<div></div>
					</div>
				</div>
				<hr />
				<div className='headline'></div>
				<hr />
				<div className='checkboxs'>
					<div className='row'>
						<div className='checkbox'>
							<div></div>
						</div>
						<div className='txt'>看看你每月的手搖費</div>
						<div className='dollor'>
							<div>$1000</div>
						</div>
					</div>
					<div className='row'>
						<div className='checkbox'>
							<div></div>
						</div>
						<div className='txt'>最適合你的保險方案</div>
						<div className='product-btn'>
							品味好時光保險組合<div></div>
						</div>
					</div>
				</div>
				<div className='boxs'>
					<div className='boxs-c'>
						<div className='box red'>
							<div>好時光住院</div>
							<div>
								住院主約
								<br />
								日額1千元
							</div>
						</div>
						<div className='box green'>
							<div>好時光實支</div>
							<div>
								實支附約
								<br />
								HS-10
							</div>
						</div>
					</div>
				</div>
				<div className='calc'>
					<div className='row'>
						<div className='arrow'></div>
						<div className='txt'>你的保費試算：</div>
					</div>
					<div className='row'>
						<div className='age'>
							<select>
								<option>30</option>
							</select>
						</div>
						<div className='txt'>歲</div>
						<div className='gender'>
							<select>
								<option>男性</option>
								<option>女性</option>
							</select>
						</div>
					</div>
					<div className='row pd-l'>
						<div className='pay'>
							<div>$14,800</div>
						</div>
						<div className='pay_monly'>
							<div>$14,800</div>
						</div>
					</div>
					<div className='row pd-l'>
						<div className='txt'>保障更齊全</div>
					</div>
				</div>
				<div className='desc'>*詳細保險內容及實際保險費用依條款說明為主</div>
			</div>
		);
	}
}
