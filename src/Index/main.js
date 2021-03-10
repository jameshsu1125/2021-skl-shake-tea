import React from 'react';
import './main.less';

import Home from './../Home/main';
import Nav from './../Nav/main';
import Menu from './../Menu/main';
import Content from './content';

import Step1 from './../Step1/main';
import Step2 from './../Step2/main';
import Step3 from './../Step3/main';
import Step4 from './../Step4/main';
import NextStepButton from './../NextStepButton/main';

export default class index extends React.Component {
	constructor(props) {
		super(props);

		this.state = { menu: false };
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
						<Step1 />
						<Step2 />
						<Step3 />
						<Step4 />
						<NextStepButton />
					</Content>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
