import Parameters from 'lesca-url-parameters';
import React from 'react';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import './main.less';
import Taste from './Taste/main';
import Satisfy from './Satisfy/main';
import Heavy from './Heavy/main';

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
		this.state = { menu: false, content: score.index, score: score.score };
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
			default:
				return <Taste score={this.state.score} />;
			case 1:
				return <Satisfy score={this.state.score} />;
			case 2:
				return <Heavy score={this.state.score} />;
		}
	}

	render() {
		return (
			<div id='Result'>
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
							<div className='frame'>
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
							<div className='btn'>產品DM</div>
							<div className='btn'>看廣告片</div>
						</div>
					</div>
				</div>
				{this.append_menu()}
			</div>
		);
	}
}
