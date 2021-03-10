import React from 'react';

export default class Content extends React.Component {
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
			<div className='content'>
				<div className='parallax'>
					<div></div>
				</div>
				{this.props.children}
			</div>
		);
	}
}
