import React from 'react';
import './main.less';
import Background from './background';
import Store from './store';

export default class home extends React.Component {
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
			<div id='home'>
				<Background />
				<Store />
			</div>
		);
	}
}
