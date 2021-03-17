import $ from 'jquery';
import Click from 'lesca-click';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Sign from '../Components/Sign/main';
import Carousel from './Carousel/main';
import Content from './content';
import Footer from './Footer/main';
import Home from './Header/main';
import './main.less';
import Slider from './Slider/main';

require('jquery-easing');

export default class index extends React.Component {
	constructor(props) {
		super(props);

		Click.init();
		Click.preventDefault = false;

		this.state = { menu: false, step: 0, content: false };
		this.carousel = { ...this.state.carousel };
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

	check_data() {
		let result = '';
		for (var i = 1; i < 5; i++) {
			let v = this.refs[`step${i}`].getData();
			result += `第${i}題:選${v == 'string' ? v : v.toString()}\n`;
		}
		alert(result);
	}

	scrollTo(e) {
		let step = this.state.step;
		if (step == 4) this.check_data();
		else {
			this.setState({ step: step + 1 }, () => {
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
					'easeOutQuart',
					() => {
						this.refs['step' + this.state.step].setState({ btn: true });
					}
				);
			});
		}
	}

	append_step1() {
		if (this.state.step >= 1)
			return (
				<Carousel
					ref='step1'
					index='1'
					question='你喜歡的茶品基底？'
					scrollTo={this.scrollTo.bind(this)}>
					<Sign style={{ position: 'absolute' }}>
						<div className='line3'>
							歡迎光臨新光人壽「好時光。手搖客製所」
							<br />
							一杯飲料也能換一個保障、一份心安，
							<br />
							趕快來客製自己的 “好時光保險特調”！
							<br />
						</div>
						<div></div>
					</Sign>
				</Carousel>
			);
	}

	append_step2() {
		if (this.state.step >= 2)
			return (
				<Carousel
					ref='step2'
					index='2'
					question='你要加什麼配料呢？(可複選)'
					scrollTo={this.scrollTo.bind(this)}
				/>
			);
	}

	append_step3() {
		if (this.state.step >= 3)
			return (
				<Slider
					ref='step3'
					index='3'
					question='你的糖分喜好？'
					scrollTo={this.scrollTo.bind(this)}
				/>
			);
	}

	append_step4() {
		if (this.state.step >= 4)
			return (
				<Slider
					ref='step4'
					index='4'
					question='你一週平均都喝幾杯手搖呢？'
					scrollTo={this.scrollTo.bind(this)}
				/>
			);
	}

	append_content() {
		if (this.state.content)
			return (
				<Content>
					{this.append_step1()}
					{this.append_step2()}
					{this.append_step3()}
					{this.append_step4()}
					<Footer />
				</Content>
			);
	}

	home_start() {
		this.setState({ content: true }, () => {
			this.scrollTo('#Sign');
		});
	}

	render() {
		return (
			<div id='index'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
					clicked={this.home_start.bind(this)}
				/>
				<div className='ctx'>
					<Home clicked={this.home_start.bind(this)} />
					{this.append_content()}
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
