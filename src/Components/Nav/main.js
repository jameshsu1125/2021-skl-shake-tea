import React from 'react';
import './main.less';
import Parameter from 'lesca-url-parameters';
import $ from 'jquery';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.filename = [
			'index.html',
			'index.html#play',
			'video.html',
			'school.html',
			'plan.html',
		];
	}

	componentDidMount() {
		this.addMenuBorder = () => {
			let file = Parameter.file();
			let hash = location.hash;
			let index = 0;
			for (let i = 0; i < this.filename.length; i++) {
				if (file == this.filename[i]) {
					index = i;
					if (i == 0 && hash == '#play') {
						index = 1;
						this.props.clicked();
					}
				}
			}
			$(this.refs.menu).children('div').removeClass('on');
			$(this.refs.menu).children('div')[index].classList.add('on');
		};
		this.addMenuBorder();
		$(window).on('hashchange', () => this.addMenuBorder());
	}

	render() {
		return (
			<div id='Nav'>
				<div className='mav-container'>
					<div
						className='logo'
						onClick={() => {
							window.location.href = Parameter.root();
						}}></div>
					<div ref='menu' className='menu'>
						<div
							onClick={() => {
								window.location.href = Parameter.root();
							}}>
							首頁
						</div>
						<div
							onClick={() => {
								window.location.href = Parameter.root() + '#play';
							}}>
							開始遊戲
						</div>
						<div>廣告影片</div>
						<div
							onClick={() => {
								window.location.href = './school.html';
							}}>
							手搖族小學堂
						</div>
						<div
							onClick={() => {
								window.location.href = './plan.html';
							}}>
							好時光保險計畫
						</div>
						<div>諮詢專人</div>
					</div>
					<div className='han' onClick={this.props.open}>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		);
	}
}
