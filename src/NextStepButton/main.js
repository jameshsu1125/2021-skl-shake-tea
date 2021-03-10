import React from 'react';
import './main.less';
import $ from 'jquery';
require('jquery-easing');

export default class NextStepButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { step: 1 };
		const root = this;
		//script
		this.tr = {
			init() {
				this.canvas.init();
			},
			canvas: {
				width: 95,
				deg: 0,
				init() {
					this.c = root.refs.canvas;
					this.ctx = this.c.getContext('2d');
					this.draw();
				},
				tweenTo(i) {
					$(this).animate(
						{ deg: 45 * i },
						{
							duration: this.time,
							step: () => this.draw(),
							complete: () => this.draw(),
							easing: 'easeOutQuart',
						}
					);
				},
				draw() {
					this.ctx.clearRect(0, 0, this.c.width, this.c.height);
					this.circle();
					this.text();
					this.stroke();
					this.strokeByDeg();
				},
				circle() {
					this.ctx.beginPath();
					this.ctx.arc(this.c.width / 2, this.c.height / 2, this.width / 2, 0, 2 * Math.PI, false);
					this.ctx.fillStyle = '#d10737';
					this.ctx.fill();
				},
				text() {
					this.ctx.font = '24px PingFangSC-Regular Arial, Helvetica, sans-serif';
					this.ctx.fillStyle = '#ffffff';
					this.ctx.fillText('下一步', 21, 67);
				},
				stroke() {
					this.ctx.beginPath();
					this.ctx.arc(this.c.width / 2, this.c.height / 2, this.c.width / 2 - 3, 0, 2 * Math.PI, false);
					this.ctx.lineWidth = 3;
					this.ctx.strokeStyle = '#edbec7';
					this.ctx.stroke();
				},
				strokeByDeg() {
					this.ctx.beginPath();
					this.ctx.arc(this.c.width / 2, this.c.height / 2, this.c.width / 2 - 3, (Math.PI / 180) * -90, (Math.PI / 180) * (-90 + this.deg), false);
					this.ctx.lineWidth = 3;
					this.ctx.strokeStyle = '#d10737';
					this.ctx.stroke();
				},
			},
		};
	}

	componentDidMount() {
		this.tr.init();
	}

	componentDidUpdate() {
		//script
	}

	componentWillUnmount() {
		//script
	}

	render() {
		return <canvas ref='canvas' id='NextStepButton' width='115' height='115' className={`nextButtonStep${this.state.step}`}></canvas>;
	}
}
