import $ from 'jquery';
import Landscape from 'lesca-react-landscape';
import Loading from 'lesca-react-loading';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Top from './../Components/Top/main';
import Buttons from './Buttons/main';
import Content from './Content/main';
import Header from './Header/main';
import './main.less';
import Video from './Video/main';
require('jquery-easing');
require('jquery.waitforimages');

export default class School extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menu: false, loading: true };
	}

	componentDidMount() {
		$(this.refs.main).waitForImages({
			finished: () => {
				for (let i = 1; i < 6; i++) {
					this.refs['v' + i].in();
				}
				this.setState({ loading: false });
				this.refs.header.tr.in();
			},
			each: (e) => {},
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
				scrollTop: top.top == 0 ? 0 : top.top - 20,
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
			<div ref='main' id='School'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<Header ref='header'>
						<Buttons scrollTo={this.scrollTo.bind(this)} />
					</Header>
					<Content>
						<Video
							ref='v1'
							index='1'
							tag='保險新手筆記'
							title='別把保險當存錢!最適合新鮮社畜的保險規劃'
							yt-id='vXe2tUs5r88'
						/>
						<Video
							ref='v2'
							index='2'
							tag='保險新手筆記'
							title='別再沈溺蜜月期！新婚小夫妻如何細水長流？'
							yt-id='bmZXyzAZuIU'
						/>
						<Video
							ref='v3'
							index='3'
							tag='保險新手筆記'
							title='別再靠北過日子！三明治族該怎麼規劃投保？'
							yt-id='vXe2tUs5r88'
						/>
						<Video
							ref='v4'
							index='4'
							tag='保險新手筆記'
							title='別再靠北過日子！三明治族該怎麼規劃投保？'
							yt-id='vXe2tUs5r88'
						/>
						<Video
							ref='v5'
							index='5'
							tag='保險新手筆記'
							title='別保了什麼都不知道！3招快速了解你的所有保單'
							yt-id='vXe2tUs5r88'
						/>
					</Content>
				</div>
				<Top
					scrollto={() => {
						this.scrollTo('#School');
					}}
				/>
				{this.append_menu()}
				{this.append_loading()}
				<Landscape dw='750' />
			</div>
		);
	}
}
