import React from 'react';
import './main.less';

import Home from './../Home/main';
import Nav from './../Nav/main';
import Menu from './../Menu/main';
import Content from './content';
import Sign from './../Sign/main';
import Carousel from '../Carousel/main';
import Slider from '../Slider/main';
import Footer from './../Footer/main';
import Click from 'lesca-click';

export default class index extends React.Component {
	constructor(props) {
		super(props);

		Click.init();
		Click.preventDefault = false;

		this.state = { menu: false };
		this.carousel = { ...this.state.carousel };
	}

	componentDidMount() {}

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

	render() {
		return (
			<div id='index'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<Home />
					<Content>
						<Sign />
						<Carousel index='1' question='你喜歡的茶品基底？' />
						<Carousel index='2' question='你要加什麼配料呢？(可複選)' />
						<Slider index='3' question='你的糖分喜好？'></Slider>
						<Slider index='4' question='你一週平均都喝幾杯手搖呢？'></Slider>
						<Footer />
					</Content>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
