import $ from 'jquery';
import React from 'react';
import Background from './background';
import Effect from './effect';
import './main.less';
import Store from './store';

require('jquery-easing');
require('jquery.waitforimages');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { effect: window.innerWidth <= 750 };
		const root = this;
		this.tr = {
			init() {
				$(window).resize(() => {
					root.setState({ effect: window.innerWidth <= 750 });
				});
			},
			in() {
				root.refs.store.in();
			},
		};
	}

	componentDidMount() {
		this.tr.init();
		$(this.refs.main).waitForImages({
			finished: () => this.tr.in(),
			each: (e) => {},
			waitForAll: true,
		});
	}

	append_Effect() {
		if (!this.state.effect) return <Effect />;
	}

	render() {
		return (
			<div ref='main' id='home'>
				<Background />
				{this.append_Effect()}
				<Store ref='store' clicked={this.props.clicked} />
			</div>
		);
	}
}
