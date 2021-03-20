import $ from 'jquery';
import React from 'react';
import Sign from '../../Components/Sign/main';
import './main.less';
require('jquery-easing');
require('jquery.waitforimages');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.tr = {
			h: 0,
			time: 1000,
			init() {
				this.c = $(root.refs.main);
				this.tran();
			},
			tran() {
				this.c.css({ height: this.h + 'px' });
			},
			in() {
				$(this).animate(
					{ h: 450 },
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
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<Sign>
					<div className='school'></div>
				</Sign>
				{this.props.children}
			</div>
		);
	}
}
