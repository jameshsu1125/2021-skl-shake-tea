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
			},
			in() {
				this.store.in();
			},
			store: {
				b: -1200,
				time: 5000,
				delay: 500,
				init() {
					this.c = $(root.refs.main);
					this.tran();
				},
				in() {
					$(this)
						.delay(this.delay)
						.animate(
							{ b: 0 },
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
					});
				},
			},
		};
	}

	componentDidMount() {}

	componentDidUpdate() {
		//script
	}

	componentWillUnmount() {
		//script
	}

	render() {
		return (
			<>
				<div ref='main' className='store'>
					<div className='chair'>
						<div></div>
						<div></div>
					</div>
					<div className='plant'></div>
					<div className='drink-2'></div>
					<div className='drink-3'></div>
					<div className='dialog'></div>
					<div className='txt'>
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
						<div className='btn'>
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
