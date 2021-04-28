import $ from 'jquery';
import Landscape from 'lesca-react-landscape';
import Loading from 'lesca-react-loading';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Top from './../Components/Top/main';
import Carousel from './Carousel/main';
import Header from './Header/main';
import './main.less';
import Page from './Page/main';
require('jquery-easing');
require('jquery.waitforimages');

export default class Plan extends React.Component {
	constructor(props) {
		super(props);
		let hash = window.location.hash.slice(1) || 'carousel';
		this.state = { menu: false, content: hash, loading: true };
	}

	componentDidMount() {
		$(this.refs.main).waitForImages({
			finished: () => {
				this.setState({ loading: false });
				this.refs.header.tr.in();
			},
			waitForAll: true,
		});
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
							{ text: '好時光<br>實支醫療<br><span>(附約)</span>', color: '#00b4a0' },
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
							{ text: '好時光<br>實支醫療<br><span>(附約)</span>', color: '#00b4a0' },
							{ text: '好時光<br>手術醫療<br><span>(附約)</span>', color: '#00b4a0' },
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
							{ text: '好時光<br>實支醫療<br><span>(附約)</span>', color: '#00b4a0' },
							{ text: '好時光<br>手術醫療<br><span>(附約)</span>', color: '#00b4a0' },
						]}
					/>
				);
		}
	}

	scrollTo(e) {
		let top = $(e)?.offset(),
			nowTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
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

	append_loading() {
		if (this.state.loading) return <Loading text='Loading now...' />;
	}

	render() {
		return (
			<div ref='main' id='Plan'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<Header
						ref='header'
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
				{this.append_loading()}
				<Landscape dw='750' />
			</div>
		);
	}
}
