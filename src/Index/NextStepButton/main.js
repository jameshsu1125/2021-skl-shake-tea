import React from 'react';
import './main.less';
import $ from 'jquery';
require('jquery-easing');

export default class NextStepButton extends React.Component {
	constructor(props) {
		super(props);

		const root = this;
		this.tr = {
			init() {
				this.canvas.deg = (360 / 4) * (root.props.index - 1);
				this.canvas.init();
			},
			canvas: {
				width: 95,
				deg: 0,
				time: 800,
				o: 0,
				init() {
					this.c = root.refs.canvas;
					this.dom = $(this.c);
					this.tran();
					this.ctx = this.c.getContext('2d');
					this.draw();
					this.in();
				},
				in() {
					$(this)
						.delay(200)
						.animate(
							{ o: 1 },
							{
								duration: 800,
								step: () => this.tran(),
								complete: () => this.tran(),
								easing: 'easeOutQuart',
							}
						);
				},
				tran() {
					this.dom.css({
						opacity: this.o,
					});
				},
				tweenTo(i, cb = () => {}) {
					$(this).animate(
						{ deg: (360 / 4) * i },
						{
							duration: this.time,
							step: () => this.draw(),
							complete: () => {
								this.draw();
								setTimeout(() => {
									cb();
								}, 300);
							},
							easing: 'easeInOutQuart',
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
					this.ctx.arc(
						this.c.width / 2,
						this.c.height / 2,
						this.width / 2,
						0,
						2 * Math.PI,
						false
					);
					this.ctx.fillStyle = '#d10737';
					this.ctx.fill();
				},
				text() {
					this.ctx.font = '24px PingFangSC-Regular Arial, Helvetica, sans-serif';
					this.ctx.fillStyle = '#ffffff';
					if (root.props.text.length < 4) this.ctx.fillText(root.props.text, 21, 67);
					else {
						this.ctx.fillText(root.props.text.substring(0, 2), 34, 52);
						this.ctx.fillText(root.props.text.substring(2, 4), 34, 80);
					}
				},
				stroke() {
					this.ctx.beginPath();
					this.ctx.arc(
						this.c.width / 2,
						this.c.height / 2,
						this.c.width / 2 - 3,
						0,
						2 * Math.PI,
						false
					);
					this.ctx.lineWidth = 3;
					this.ctx.strokeStyle = '#edbec7';
					this.ctx.stroke();
				},
				strokeByDeg() {
					this.ctx.beginPath();
					this.ctx.arc(
						this.c.width / 2,
						this.c.height / 2,
						this.c.width / 2 - 3,
						(Math.PI / 180) * -90,
						(Math.PI / 180) * (-90 + this.deg),
						false
					);
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

	clicked() {
		this.props.clicked();
	}

	render() {
		return (
			<canvas
				ref='canvas'
				onClick={this.clicked.bind(this)}
				id='NextStepButton'
				width='115'
				height='115'></canvas>
		);
	}
}
