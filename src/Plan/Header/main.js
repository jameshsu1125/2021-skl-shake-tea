import React from 'react';
import './main.less';
import Sign from '../../Components/Sign/main';
import $ from 'jquery';
require('jquery-easing');
require('jquery.waitforimages');
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		const root = this;

		this.tr = {
			time: 1000,
			h: 0,
			init() {
				this.c = $(root.refs.main);
				this.tran();
			},
			tran() {
				this.c.css({
					height: this.h + 'px',
				});
			},
			in() {
				$(this).animate(
					{ h: 490 },
					{
						duration: this.time,
						step: () => this.tran(),
						complete: () => this.tran(),
						easing: 'easeInOutQuart',
					}
				);
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	render() {
		return (
			<div ref='main' id='Header'>
				<div className='bg'>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className='i0'></div>
				<div className='i1'></div>
				<Sign size='small'>
					<div className='plan'></div>
				</Sign>
				<div className='btn0' onClick={() => this.props.clicked('carousel')}></div>
				<div className='btn1' onClick={() => this.props.clicked('plan-A')}></div>
				<div className='btn2' onClick={() => this.props.clicked('plan-B')}></div>
				<div className='btn3' onClick={() => this.props.clicked('plan-C')}></div>
			</div>
		);
	}
}
