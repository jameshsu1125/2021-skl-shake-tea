import $ from 'jquery';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Arrow from './arrow';
import Item from './item';
import './main.less';
require('jquery-easing');
require('jquery.waitforimages');

export default class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.setting = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <Arrow dir={'next'} />,
			prevArrow: <Arrow dir={'prev'} />,
			draggable: true,
			initialSlide: this.props.initialSlide || 0,
			appendDots: (dots) => (
				<div
					style={{
						bottom: '60px',
					}}>
					<ul style={{ display: 'inline-block', paddingInlineStart: '0px' }}>{dots}</ul>
				</div>
			),
		};

		const root = this;
		this.tr = {
			o: 0,
			time: 1000,
			init() {
				this.c = $(root.refs.container);
				this.tran();
			},
			in() {
				$(this)
					.delay(200)
					.animate(
						{ o: 1 },
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
					opacity: this.o,
				});
			},
		};
	}

	componentDidMount() {
		this.tr.init();
		$(this.refs.main).waitForImages({
			finished: () => this.tr.in(),
			waitForAll: true,
		});
	}

	render() {
		return (
			<div ref='main' className='plan-carousel'>
				<div ref='container' className='container'>
					<Slider {...this.setting}>
						<Item
							index='1'
							headline='住院醫療 <span>(主約)</span>'
							subline='準備好，疫起不擔心'
							items={[
								'住院<br>日額',
								'長期住院<br>生活補助',
								'加護<br>病房',
								'燒燙傷<br>病房',
								'負壓隔離<br>病房',
								'住院<br>關懷',
								'住院前後<br>門診醫療',
								'無住院<br>理賠獎勵',
							]}
							url='https://www.skl.com.tw/content.html?insId=IHA'
						/>
						<Item
							index='2'
							headline='實支醫療 <span>(附約)<span>'
							subline='自費支出，不怕負擔'
							items={['實支實付<br>或日額給付<br><span>（二擇一）</span>', '門診<br>手術費用', '無住院<br>理賠獎勵']}
							url='https://www.skl.com.tw/content.html?insId=IJ'
						/>
						<Item
							index='3'
							headline='定期傷害 <span>(主約)<span>'
							subline='意外、明天誰先到？'
							items={[
								'意外<br>身故<br><span>（假日加倍）</span>',
								'意外<br>住院',
								'意外<br>失能',
								'意外住院<br>慰問',
								'無理賠<br>獎勵',
							]}
							url='https://www.skl.com.tw/content.html?insId=IK'
						/>
						<Item
							index='4'
							headline='手術醫療 <span>(附約)<span>'
							subline='處置、醫材全納入'
							items={['手術', '特定<br>手術', '住院/門診<br>處置', '特定住院<br>處置', '特定醫材<br>補助', '無理賠<br>獎勵']}
							url='https://www.skl.com.tw/content.html?insId=IIA'
						/>
						<Item
							index='5'
							headline='定期長照'
							subline='年輕長照漸普及！'
							items={[
								'長期照顧<br>一次給付',
								'長期照顧<br>分期給付',
								'完全失能<br>一次給付',
								'完全失能<br>分期給付',
								'保險費的<br>豁免',
								'健康促進<br>回饋',
							]}
							url='https://www.skl.com.tw/content.html?insId=ILA'
						/>
						<Item
							index='6'
							headline='定期壽險<span>(主約)<span>'
							subline='留給我愛的人！'
							items={['身故/喪葬<br>費用', '完全失能', '健康促進<br>回饋']}
							url='https://www.skl.com.tw/content.html?insId=8RA'
						/>
					</Slider>
				</div>
			</div>
		);
	}
}
