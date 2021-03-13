import React from 'react';
import './item.less';

export default class item extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		//script
	}

	componentDidMount() {
		//script
	}

	componentDidUpdate() {
		//script
	}

	componentWillUnmount() {
		//script
	}

	render() {
		return (
			<div className='slider-items'>
				<div className='box'></div>
				<div className={`template ${this.props.className}`}></div>
				<div className='text'>{this.props.title}</div>
				<div className='checkbox'>
					<div></div>
				</div>
			</div>
		);
	}
}
