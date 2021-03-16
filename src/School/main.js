import React from 'react';
import './main.less';

import Nav from '../Components/Nav/main';
import Menu from '../Components/Menu/main';
import Header from './Header/main';
import Buttons from './Buttons/main';
import Content from './Content/main';
import Video from './Video/main';

export default class School extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		this.state = { menu: false };
		//script
	}

	componentDidMount() {
		//script
	}

	componentDidUpdate() {
		//script
	}

	componentWillUnmount() {
		//script
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
			<div id='School'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<Header>
						<Buttons />
					</Header>
					<Content>
						<Video
							index='1'
							tag='保險新手筆記'
							title='別把保險當存錢!最適合新鮮社畜的保險規劃'
						/>
						<Video
							index='2'
							tag='保險新手筆記'
							title='別再沈溺蜜月期！新婚小夫妻如何細水長流？'
						/>
						<Video
							index='3'
							tag='保險新手筆記'
							title='別再靠北過日子！三明治族該怎麼規劃投保？'
						/>
						<Video
							index='4'
							tag='保險新手筆記'
							title='別再靠北過日子！三明治族該怎麼規劃投保？'
						/>
						<Video
							index='5'
							tag='保險新手筆記'
							title='別保了什麼都不知道！3招快速了解你的所有保單'
						/>
					</Content>
				</div>
				<div className='top'>
					<div></div>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
