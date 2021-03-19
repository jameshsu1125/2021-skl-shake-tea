import $ from 'jquery';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Top from './../Components/Top/main';
import Carousel from './Carousel/main';
import Header from './Header/main';
import './main.less';

import Page from './Page/main';

export default class Plan extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menu: false, content: 'carousel' };
	}

	append_menu() {
		if (this.state.menu)
			return (
				<Menu
					close={() => {
						this.setState({ menu: false });
					}}
				/>
			);
	}

	append_content() {
		switch (this.state.content) {
			default:
			case 'carousel':
				return <Carousel />;
			case 'plan-A':
				return (
					<Page
						index='A'
						data={[
							{ text: '好時光<br>住院醫療', color: '#f65e62' },
							{ text: '好時光<br>實支醫療', color: '#00b4a0' },
						]}
					/>
				);
			case 'plan-B':
				return (
					<Page
						index='B'
						data={[
							{ text: '好時光<br>住院醫療', color: '#f65e62' },
							{ text: '好時光<br>定期傷害', color: '#f65e62' },
							{ text: '好時光<br>實支醫療', color: '#00b4a0' },
							{ text: '好時光<br>手術醫療', color: '#00b4a0' },
						]}
					/>
				);
			case 'plan-C':
				return (
					<Page
						index='C'
						data={[
							{ text: '好時光<br>住院醫療', color: '#f65e62' },
							{ text: '好時光<br>定期傷害', color: '#f65e62' },
							{ text: '好時光<br>定期長照', color: '#f65e62' },
							{ text: '好時光<br>定期壽險', color: '#f65e62' },
							{ text: '好時光<br>實支醫療', color: '#00b4a0' },
							{ text: '好時光<br>手術醫療', color: '#00b4a0' },
						]}
					/>
				);
		}
	}

	scrollTo(e) {
		let top = $(e)?.offset(),
			nowTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop,
			time = Math.abs(top?.top - nowTop);
		if (!top) return;
		top.top -= window.innerWidth > 750 ? 54 : 90;

		$('html, body').animate(
			{
				scrollTop: top.top,
			},
			time > 1000 ? 1000 : time,
			'easeOutQuart'
		);
	}

	render() {
		return (
			<div id='Plan'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<Header
						clicked={(e) => {
							this.setState({ content: e }, () => {
								this.scrollTo('.content');
							});
						}}
					/>
					<div className='content'>{this.append_content()}</div>
				</div>
				<Top
					scrollto={() => {
						this.scrollTo('#Plan');
					}}
				/>
				{this.append_menu()}
			</div>
		);
	}
}
