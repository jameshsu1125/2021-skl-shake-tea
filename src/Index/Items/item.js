import React from 'react';
import './item.less';
import Checkbox from './itemCheckbox';
import Radio from './itemRadio';

export default class item extends React.Component {
	reset() {
		this.refs.item?.reset();
	}

	in(direct) {
		this.refs.item?.in(direct);
	}

	back() {
		this.refs.item?.back();
	}

	offset(v) {
		this.refs.item?.offset(v);
	}

	on() {
		this.refs.checkbox.classList.add('selected');
		this.refs.box.classList.add('box-selected');
		this.refs.title.classList.add('title-selected');
	}

	off() {
		this.refs.checkbox.classList.remove('selected');
		this.refs.box.classList.remove('box-selected');
		this.refs.title.classList.remove('title-selected');
	}

	append_item() {
		if (this.props.step == '1') return <Radio ref='item' />;
		else return <Checkbox ref='item' />;
	}

	render() {
		return (
			<div className='slider-items'>
				<div ref='box' className='box'></div>
				<div className={`template ${this.props.className}`}>
					{this.append_item()}
				</div>
				<div ref='title' className='title'>
					{this.props.title}
				</div>
				<div
					ref='checkbox'
					className='checkbox'
					onClick={() => {
						this.props.clicked();
					}}>
					<div></div>
				</div>
			</div>
		);
	}
}
