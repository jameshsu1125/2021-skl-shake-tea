import $ from 'jquery';
import Landscape from 'lesca-react-landscape';
import Loading from 'lesca-react-loading';
import React from 'react';
import ConsultationDialog from '../Components/ConsultationDialog/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { school as Data } from '../_config';
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
				Data.map((e, i) => {
					this.refs['v' + i].in();
				});

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
			nowTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
			time = Math.abs(top?.top - nowTop),
			gap = window.innerWidth > 1000 ? 20 : 25;
		if (!top) return;
		top.top -= window.innerWidth > 1000 ? 54 : 90;

		$('html, body').animate(
			{
				scrollTop: top.top == 0 ? 0 : top.top - gap,
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
						{Data.map((e, i) => (
							<Video key={i} ref={`v${i}`} index={i} tag={e.tag} title={e.title} yt-id={e['yt-id']} />
						))}
					</Content>
				</div>
				<Top
					scrollto={() => {
						this.scrollTo('#School');
					}}
				/>
				{this.append_menu()}
				<ConsultationDialog align />
				{this.append_loading()}
				<Landscape dw='750' />
			</div>
		);
	}
}
