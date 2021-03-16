import React from 'react';
import './main.less';

export default class Video extends React.Component {
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
			<div className='school-video'>
				<div className='frame'>
					<div className='tag'>
						{`${this.props.tag} #`}
						<span>{this.props.index}</span>
					</div>
					<div className='title'>{this.props.title}</div>
				</div>
			</div>
		);
	}
}
