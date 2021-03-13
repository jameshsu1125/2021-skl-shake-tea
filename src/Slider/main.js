import React from 'react';
import './main.less';

export default class Slider extends React.Component {
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

	append_suger() {
		if (this.props.index == '3')
			return (
				<div className='sugers'>
					<div></div>
					<div></div>
					<div></div>
				</div>
			);
	}

	render() {
		return (
			<div id='Slider'>
				<div className='container'>
					<div className={`question t${this.props.index}`}>
						{this.props.question}
					</div>
					<div className='answer'>
						<div className='slider'>
							{this.append_suger()}

							<div className='components'>
								<div className='dot left'></div>
								<div className='dot right'></div>
								<div className='num l'>0</div>
								<div className='num r'>100</div>
								<div className='btn'>
									<div>
										<div className='dialog'>三分糖</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
