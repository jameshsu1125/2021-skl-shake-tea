import React from 'react';
import './main.less';

export default class carousel extends React.Component {
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
			<div id='carousel'>
				<div className='container'>
					<div className={'question ' + `t${this.props.index}`}>{this.props.question}</div>
					<div className='anser'>
						<div className='res'>
							{/* component loop */}
							<div className='item'>
								<div className='text'>人生紅不讓紅茶</div>
							</div>

							<div className='checkbox'>
								<div></div>
							</div>
						</div>
					</div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
