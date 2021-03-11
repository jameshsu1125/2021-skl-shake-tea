import React from 'react';
import './main.less';

import Home from './../Home/main';
import Nav from './../Nav/main';
import Menu from './../Menu/main';
import Content from './content';

import Sign from './../Sign/main';
import Carousel from '../Carousel/main';
import Step2 from './../Step2/main';
import Step3 from './../Step3/main';
import Step4 from './../Step4/main';
import NextStepButton from './../NextStepButton/main';
import EmptyStep from './../NextStepButton/emptyStep';

export default class index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menu: false, step: 1 };
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
						<Carousel index='1' question='你喜歡的茶品基底？'>
							{this.state.step == 1 ? <NextStepButton data={this.state.step} /> : <EmptyStep />}
						</Carousel>
						<Carousel index='2' question='你要加什麼配料呢？(可複選)'>
							{this.state.step == 2 ? <NextStepButton data={this.state.step} /> : <EmptyStep />}
						</Carousel>
						<Step3>{this.state.step == 3 ? <NextStepButton data={this.state.step} /> : <EmptyStep />}</Step3>
						<Step4>{this.state.step == 4 ? <NextStepButton data={this.state.step} /> : <EmptyStep />}</Step4>
					</Content>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
