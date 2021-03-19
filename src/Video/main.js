import React from 'react';
import './main.less';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Top from './../Components/Top/main';
import $ from 'jquery';

export default class Video extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menu: false };
		this['yt-id'] = 'nPqJuMDMGOs';
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
			<div id='Video'>
				<Nav
					open={() => {
						this.setState({ menu: true });
					}}
				/>
				<div className='ctx'>
					<div className='content'>
						<div className='pattern'>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className='frame'>
							<div className='yt'>
								<iframe
									width='677'
									height='436'
									src={`https://www.youtube.com/embed/${this['yt-id']}`}
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen></iframe>
							</div>
						</div>
					</div>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
