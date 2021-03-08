import React from 'react';
import './main.less';

import Home from './../Home/main';
import Nav from './../Nav/main';
import Menu from './../Menu/main';
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
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
