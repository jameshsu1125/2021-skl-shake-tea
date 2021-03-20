import $ from 'jquery';
import Landscape from 'lesca-react-landscape';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Loading from 'lesca-react-loading';
import './main.less';
require('jquery-easing');
require('jquery.waitforimages');

export default class Video extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menu: false, yt: false, loading: true };
		this['yt-id'] = 'nPqJuMDMGOs';

		const root = this;
		this.tr = {
			init() {
				this.frame.init();
			},
			in() {
				this.frame.in();
			},
			frame: {
				t: -500,
				o: 0,
				time: 700,
				init() {
					this.c = $(root.refs.frame);
					this.tran();
				},
				in() {
					$(this).animate(
						{ o: 1, t: 16 },
						{
							duration: this.time,
							step: () => this.tran(),
							complete: () => {
								this.tran();
								root.setState({ yt: true });
							},
							easing: 'easeOutBack',
						}
					);
				},
				tran() {
					this.c.css({
						top: this.t + 'px',
					});
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
		$(this.refs.main).waitForImages({
			finished: () => {
				this.tr.in();
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

	append_yt() {
		if (this.state.yt)
			return (
				<iframe
					width='677'
					height='436'
					src={`https://www.youtube.com/embed/${this['yt-id']}`}
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
			);
	}

	append_loading() {
		if (this.state.loading) return <Loading text='Loading now...' />;
	}

	render() {
		return (
			<div ref='main' id='Video'>
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
						<div className='container'>
							<div ref='frame' className='frame'>
								<div className='yt'>{this.append_yt()}</div>
							</div>
						</div>
					</div>
				</div>
				{this.append_menu()}
				{this.append_loading()}
				<Landscape dw='750' />
			</div>
		);
	}
}
