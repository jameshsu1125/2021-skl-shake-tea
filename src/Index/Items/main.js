import React from 'react';
import { Data } from './data';
import Item from './item';
import './main.less';

export default class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: Data['step' + this.props.step] || [] };
	}

	offset(index, v) {
		this.refs[`item${index + 1}`].offset(v);
	}

	back(index) {
		this.refs[`item${index + 1}`].back();
	}

	in(index, direct) {
		for (let i in this.refs) {
			let t = this.refs[i];
			t.reset();
		}
		this.refs[`item${index + 1}`].in(direct);
	}

	updateState(type, data) {
		let max = Object.keys(this.refs).length - 2;
		if (type == 'radio') {
			let currentIndex = data + 1,
				otherIndex;
			if (data == 0) otherIndex = max + 1;
			else if (data == max - 1) otherIndex = 0;
			for (let i = 0; i < Object.keys(this.refs).length; i++) {
				if (i == currentIndex || i == otherIndex) {
					this.refs[`item${i}`].on();
				} else this.refs[`item${i}`].off();
			}
		} else {
			let dat = [...new Array(max + 2).keys()].map((e) => {
				return { fn: 'off' };
			});
			for (let i = 0; i < data.length; i++) {
				dat[data[i] + 1].fn = 'on';
				if (data[i] == 0) dat[max + 1].fn = 'on';
				else if (data[i] == max - 1) dat[0].fn = 'on';
			}
			for (let i = 0; i < dat.length; i++) {
				this.refs[`item${i}`][dat[i].fn]();
			}
		}
	}

	append_slicks() {
		const Data = [
			this.state.data[this.state.data.length - 1],
			...this.state.data,
			this.state.data[0],
		];

		return Data.map((e, i) => (
			<Item
				clicked={this.props.clicked}
				step={this.props.step}
				ref={`item${i}`}
				key={i}
				{...e}
			/>
		));
	}

	render() {
		return <>{this.append_slicks()}</>;
	}
}
