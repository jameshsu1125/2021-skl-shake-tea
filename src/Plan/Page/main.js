import $ from 'jquery';
import React from 'react';
import htmlParser from 'react-html-parser';
import './main.less';
require('jquery-easing');
require('jquery.waitforimages');

export default class Page extends React.Component {
	constructor(props) {
		super(props);

		const root = this;
		this.tr = {
			o: 0,
			time: 1000,
			init() {
				this.c = $(root.refs.container);
				this.tran();
			},
			in() {
				$(this)
					.delay(200)
					.animate(
						{ o: 1 },
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
					opacity: this.o,
				});
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
			<div ref='main' className='plan-page'>
				<div ref='container' className='container'>
					<div className={`plan plan-${this.props.index}`}></div>
					<div className='items'>
						{this.props.data.map((e, i) => (
							<div key={i} style={{ backgroundColor: e.color }}>
								{htmlParser(e.text)}
							</div>
						))}
					</div>
					<div className='plan-btn'>諮詢專人</div>
				</div>
			</div>
		);
	}
}
