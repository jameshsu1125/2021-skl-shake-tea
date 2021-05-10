import $ from 'jquery';
import Atobtoa from 'lesca-atobtoa';
import Click from 'lesca-click';
import Landscape from 'lesca-react-landscape';
import Loading from 'lesca-react-loading';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Sign from '../Components/Sign/main';
import Carousel from './Carousel/main';
import Content from './content';
import Footer from './Footer/main';
import Home from './Header/main';
import './main.less';
import Profile from './Profile/main';
import Slider from './Slider/main';
import ConsultationDialog from '../Components/ConsultationDialog/main';

require('jquery-easing');
require('jquery.waitforimages');

export default class index extends React.Component {
	constructor(props) {
		super(props);

		Click.init();
		Click.preventDefault = false;

		this.state = {
			menu: false,
			step: 0,
			content: false,
			loading: true,
			profile: false,
		};
		this.carousel = { ...this.state.carousel };
		this.pageData = [0, [0], 0, 0];
	}

	componentDidMount() {
		$(this.refs.main).waitForImages({
			finished: () => {
				this.setState({ loading: false });
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

	check_data() {
		let op = [];
		for (var i = 1; i < 5; i++) {
			let v = this.refs[`step${i}`].getData();
			op.push(v);
		}
		return op;
	}

	getProfile() {
		this.pageData = this.check_data();
		this.setState({ profile: true });
		this.scrollToBy('#index', () => {
			this.setState({ content: false });
		});
	}

	scrollToBy(e, cb) {
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
			'easeOutQuart',
			() => {
				if (cb) cb();
				else this.refs['step' + this.state.step].setState({ btn: true });
			}
		);
	}

	scrollTo(e) {
		let step = this.state.step;
		if (step == 4) this.getProfile();
		else {
			this.setState({ step: step + 1 }, () => {
				this.scrollToBy(e);
			});
		}
	}

	append_step1() {
		if (this.state.step >= 1)
			return (
				<Carousel ref='step1' index='1' question='你喜歡的茶品基底？' scrollTo={this.scrollTo.bind(this)}>
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
			return <Carousel ref='step2' index='2' question='你要加什麼配料呢？(可複選)' scrollTo={this.scrollTo.bind(this)} />;
	}

	append_step3() {
		if (this.state.step >= 3)
			return <Slider ref='step3' index='3' question='你的糖分喜好？' scrollTo={this.scrollTo.bind(this)} />;
	}

	append_step4() {
		if (this.state.step >= 4)
			return <Slider ref='step4' index='4' question='你一週平均都喝幾杯手搖呢？' scrollTo={this.scrollTo.bind(this)} />;
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

	append_loading() {
		if (this.state.loading) return <Loading text='Loading now...' />;
	}

	profile_end(name, gender, age) {
		let data = [...this.pageData, name, gender, age];
		window.location.href = `./result.html?data=${Atobtoa.toBase64(data)}`;
	}

	append_profile() {
		if (this.state.profile) return <Profile end={this.profile_end.bind(this)} />;
	}

	render() {
		return (
			<div ref='main' id='index'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
					clicked={this.home_start.bind(this)}
				/>
				<div className='ctx'>
					<Home clicked={this.home_start.bind(this)} />
					{this.append_content()}
					{this.append_profile()}
				</div>
				{this.append_menu()}
				<ConsultationDialog />;{this.append_loading()}
				<Landscape dw='750' />
			</div>
		);
	}
}
