import React from 'react';
import './dots.less';

export default class dots extends React.Component {
	constructor(props) {
		super(props);
		this.state = { index: 0 };
		console.log(this.props.num);
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

	append() {
		return [...new Array(this.props.num).keys()].map((e, i) => (
			<div key={i} className={i == this.state.index ? 'active' : ''}></div>
		));
	}

	render() {
		return <div className='dots'>{this.append()}</div>;
	}
}
