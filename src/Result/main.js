import $ from 'jquery';
import Landscape from 'lesca-react-landscape';
import Parameters from 'lesca-url-parameters';
import Loading from 'lesca-react-loading';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import Heavy from './Heavy/main';
import './main.less';
import Satisfy from './Satisfy/main';
import Taste from './Taste/main';
require('jquery-easing');
require('jquery.waitforimages');

export default class Result extends React.Component {
	constructor(props) {
		super(props);
		let score;
		try {
			score = require('./../_config').calcScore(
				JSON.parse(atob(Parameters.get('data')))
			);
		} catch {
			alert('資料有錯,請重新在試');
			window.location.href = Parameters.root();
		}
		this.state = {
			menu: false,
			content: score.index,
			score: score.score,
			loading: true,
		};

		const root = this;
		this.tr = {
			init() {
				this.frame.init();
			},
			in() {
				this.frame.in();
			},
			frame: {
				t: window.innerHeight,
				time: 1000,
				init() {
					this.c = $(root.refs.frame);
					this.tran();
				},
				in() {
					$(this).animate(
						{ t: 82 },
						{
							duration: this.time,
							step: () => this.tran(),
							complete: () => this.tran(),
							easing: 'easeOutQuart',
						}
					);
				},
				tran() {
					this.c.css({
						'margin-top': this.t + 'px',
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

	append_content() {
		switch (this.state.content) {
			case 0:
			case 1:
			default:
			case 2:
				return <Taste score={this.state.score} index={this.state.content} />;
			//return <Satisfy score={this.state.score} />;
			//return <Heavy score={this.state.score} />;
		}
	}

	append_loading() {
		if (this.state.loading) return <Loading text='Loading now...' />;
	}

	render() {
		return (
			<div ref='main' id='Result'>
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
						</div>
						<div className='lights'>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div className='row'>
							<div ref='frame' className='frame'>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div>{this.append_content()}</div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div className='row'>
							<div className='btn'>諮詢專人</div>
							<div
								onClick={() => {
									window.location.href = './plan.html';
								}}
								className='btn'>
								產品DM
							</div>
							<div
								onClick={() => {
									window.location.href = './video.html';
								}}
								className='btn'>
								看廣告片
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
