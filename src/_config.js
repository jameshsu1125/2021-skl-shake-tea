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
	calcScore: function (data) {
		let Q1 = [50, 50, 60, 80, 70][data[0] || 0],
			Q2 = data[1].length * 20,
			Q4 = data[3] * 4;
		let s = (Q1 + Q2) * Q4,
			i = 0;

		if (s < 448) i = 0;
		else if (s >= 448 && i < 1000) i = 1;
		else i = 2;

		return {
			score: s,
			index: i,
		};
	},
};
