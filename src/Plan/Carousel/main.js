import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Arrow from './arrow';
import Item from './item';
import './main.less';

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
			appendDots: (dots) => (
				<div
					style={{
						bottom: '20px',
					}}>
					<ul style={{ display: 'inline-block', paddingInlineStart: '0px' }}>
						{dots}
					</ul>
				</div>
			),
		};
	}

	render() {
		return (
			<div className='plan-carousel'>
				<div className='container'>
					<Slider {...this.setting}>
						<Item
							index='1'
							headline='住院醫療 (主約)'
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
						/>
						<Item
							index='2'
							headline='實支醫療 (主約)'
							subline='自費支出，不怕負擔'
							items={[
								'每日<br>病房',
								'醫療<br>費用',
								'手術<br>費用',
								'門診<br>手術費用',
							]}
						/>
						<Item
							index='3'
							headline='傷害醫療 (主約)'
							subline='意外、明天誰先到？'
							items={[
								'意外<br>身故<br><span>（假日加倍）</span>',
								'意外<br>住院',
								'意外<br>失能',
								'意外住院<br>慰問保險',
							]}
						/>
						<Item
							index='4'
							headline='手術醫療 (副約)'
							subline='處置、醫材全納入'
							items={[
								'手術',
								'特定<br>手術',
								'處置',
								'特定住院<br>處置',
								'特定醫材<br>補助保險',
							]}
						/>
						<Item
							index='5'
							headline='長照醫療 (主約)'
							subline='年輕長照漸普及！'
							items={['長照', '完全<br>失能', '一次及分期<br>給付保障']}
						/>
						<Item
							index='6'
							headline='壽險醫療 (主約)'
							subline='留給我愛的人！'
							items={['身障', '完全失能<br>保障']}
						/>
					</Slider>
				</div>
			</div>
		);
	}
}
