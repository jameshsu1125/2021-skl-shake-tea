import $ from 'jquery';
import { Dollar } from 'lesca-number';
import React from 'react';
import ReactParser from 'react-html-parser';
import db from './../db';
import './main.less';
require('jquery-easing');
require('jquery.waitforimages');

export default class Taste extends React.Component {
	constructor(props) {
		super(props);

		this.state = { cost: 0, cost_m: 0 };

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
		this.select_change();
	}

	append_box() {
		let data = require('./../../_config').result_box[this.props.index].data;
		return data.map((e, i) => (
			<div key={i} className={`box ${e.color}`}>
				<div>{e.head}</div>
				<div>{ReactParser(e.body)}</div>
			</div>
		));
	}

	append_age() {
		return [...new Array(31).keys()].map((e) => (
			<option key={e} value={e + 15}>
				{e + 15}
			</option>
		));
	}

	select_change() {
		const age = this.refs.age.value || '30',
			gen = this.refs.gender.value || 'male';
		const cost = db[gen].filter((e) => e.age == age)[0].data[this.props.index];
		this.setState({ cost: cost, cost_m: Math.ceil(cost / 12) });
	}

	append_btn_label() {
		return ['??????', '??????', '??????'][this.props.index] + '?????????????????????';
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
						<div className='txt'>??????????????????????????????</div>
						<div className='dollor'>
							<div>{`$${Dollar(this.props.score)}`}</div>
						</div>
					</div>
					<div className='row'>
						<div className='checkbox'>
							<div></div>
						</div>
						<div className='txt'>???????????????????????????</div>
						<div
							onClick={() => {
								let hash = ['plan-A', 'plan-B', 'plan-C'];
								window.location.href = `./plan.html#${hash[this.props.index] || ''}`;
							}}
							className='product-btn'>
							{this.append_btn_label()}
							<div></div>
						</div>
					</div>
				</div>
				<div className='boxs'>
					<div className='boxs-c'>{this.append_box()}</div>
				</div>
				<div className='calc'>
					<div className='row'>
						<div className='arrow'></div>
						<div className='txt'>{`${this.props.name || '???'}??????????????????`}</div>
					</div>
					<div className='row'>
						<div className='age'>
							<select ref='age' defaultValue={this.props.age} onChange={this.select_change.bind(this)}>
								{this.append_age()}
							</select>
						</div>
						<div className='txt'>???</div>
						<div className='gender'>
							<select ref='gender' defaultValue={this.props.gender} onChange={this.select_change.bind(this)}>
								<option value='male'>??????</option>
								<option value='female'>??????</option>
							</select>
						</div>
					</div>
					<div className='row pd-l'>
						<div className='pay'>
							<div ref='cost'>{`$${Dollar(this.state.cost)}`}</div>
						</div>
						<div className='pay_monly'>
							<div ref='cost_m'>{`$${Dollar(this.state.cost_m)}`}</div>
						</div>
					</div>
					<div className='row pd-l'>
						<div className='txt'>?????????????????????!</div>
					</div>
				</div>
				<div className='desc'>*??????????????????????????????????????????????????????????????????</div>
			</div>
		);
	}
}
