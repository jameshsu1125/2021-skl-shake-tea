import React from 'react';
import './main.less';
import $ from 'jquery';
require('jquery-easing');
require('jquery.waitforimages');

export default class Heavy extends React.Component {
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
			<div ref='main' id='Heavy'>
				<div className='keyv'>
					<div className='title'></div>
					<div className='item'></div>
					<div ref='pop' className='pop'></div>
				</div>
				<div className='border'></div>
				<div className='cups'></div>
				<div className='headline mt-5'></div>
				<div className='border mt-2'></div>
				<div className='checkbox0 mt-5'>
					<div>{`$${this.props.score}`}</div>
				</div>
				<div className='checkbox1 mt-5'></div>
				<div className='button mt-5'></div>
				<div className='products mt-3'></div>
				<div className='calc mt-5'>
					<div className='age'>
						<input type='number' defaultValue='30' maxLength='2' />
					</div>
					<div className='gender'>
						<select defaultValue='男性'>
							<option value='男性'>男性</option>
							<option value='女性'>女性</option>
						</select>
					</div>
					<div className='payment'>$14,800</div>
					<div className='monthly_payment'>$1,480</div>
				</div>
				<div className='desc mt-5'>*詳細保險內容及實際保險費用依條款說明為主</div>
			</div>
		);
	}
}
