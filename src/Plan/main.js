import React from 'react';
import './main.less';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Header from './Header/main';

export default class Plan extends React.Component {
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
			<div id='Plan'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<Header />
					<div className='content'>
						<div className='container'>
							<div className='frame'></div>
						</div>
					</div>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
