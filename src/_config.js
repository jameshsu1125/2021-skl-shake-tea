module.exports = {
	carousel: {
		duration: 800,
		back_duration: 400,
		box: {
			offset: 1000,
			r: 0.9,
		},
		back: {
			offset: 1000,
			r: 0.2,
		},
		front: {
			offset: 1000,
			r: 1.2,
		},
		front2: {
			offset: 2000,
			r: 3,
		},
	},
	result_box: [
		{
			data: [
				{
					head: '好時光住院',
					body: '住院主約<br>日額1千元',
					color: 'red',
				},
				{
					head: '好時光實支',
					body: '實支附約<br>HS-10',
					color: 'green',
				},
			],
		},
		{
			data: [
				{
					head: '好時光住院',
					body: '住院主約<br>日額1千元',
					color: 'red',
				},
				{
					head: '好時光傷害',
					body: '傷害主約<br>保額100萬',
					color: 'red',
				},
				{
					head: '好時光實支',
					body: '實支附約<br>HS-10',
					color: 'green',
				},
				{
					head: '好時光手術',
					body: '手術附約<br>保額1千元',
					color: 'green',
				},
			],
		},
		{
			data: [
				{
					head: '好時光住院',
					body: '住院主約<br>日額1千元',
					color: 'red',
				},
				{
					head: '好時光傷害',
					body: '傷害主約<br>保額100萬',
					color: 'red',
				},
				{
					head: '好時光長照',
					body: '長照主約<br>保額2萬元',
					color: 'red',
				},
				{
					head: '好時光壽險',
					body: '壽險主約<br>保額100萬',
					color: 'red',
				},
				{
					head: '好時光實支',
					body: '實支附約<br>HS-10',
					color: 'green',
				},
				{
					head: '好時光手術',
					body: '手術附約<br>保額1千元',
					color: 'green',
				},
			],
		},
	],
	calcScore: function (data) {
		let Q1 = [50, 50, 60, 80, 70][data[0] || 0],
			Q2 = data[1].length * 20,
			Q4 = data[3] * 4;
		let s = (Q1 + Q2) * Q4,
			i = 0;

		if (s < 448) i = 0;
		else if (s >= 448 && s < 1000) i = 1;
		else i = 2;

		return {
			score: s || 0,
			index: i,
		};
	},
};
