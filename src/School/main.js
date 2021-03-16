import React from 'react';
import './main.less';

import Nav from '../Components/Nav/main';
import Menu from '../Components/Menu/main';
import Header from './Header/main';
import Buttons from './Buttons/main';
import Content from './Content/main';
import Video from './Video/main';
import $ from 'jquery';

export default class School extends React.Component {
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
			<div id='School'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<Header>
						<Buttons scrollTo={this.scrollTo.bind(this)} />
					</Header>
					<Content>
						<Video
							index='1'
							tag='保險新手筆記'
							title='別把保險當存錢!最適合新鮮社畜的保險規劃'
							yt-id='vXe2tUs5r88'
						/>
						<Video
							index='2'
							tag='保險新手筆記'
							title='別再沈溺蜜月期！新婚小夫妻如何細水長流？'
							yt-id='bmZXyzAZuIU'
						/>
						<Video
							index='3'
							tag='保險新手筆記'
							title='別再靠北過日子！三明治族該怎麼規劃投保？'
							yt-id='vXe2tUs5r88'
						/>
						<Video
							index='4'
							tag='保險新手筆記'
							title='別再靠北過日子！三明治族該怎麼規劃投保？'
							yt-id='vXe2tUs5r88'
						/>
						<Video
							index='5'
							tag='保險新手筆記'
							title='別保了什麼都不知道！3招快速了解你的所有保單'
							yt-id='vXe2tUs5r88'
						/>
					</Content>
				</div>
				<div
					className='top'
					onClick={() => {
						this.scrollTo('#School');
					}}>
					<div></div>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
