import React from 'react';
import './main.less';

export default class Taste extends React.Component {
	render() {
		return (
			<div id='Taste'>
				<div className='keyv'>
					<div className='item'></div>
					<div className='title'></div>
					<div className='pop'></div>
				</div>
				<div className='border'></div>
				<div className='cups'></div>
				<div className='headline mt-5'></div>
				<div className='border mt-2'></div>
				<div className='checkbox0 mt-5'>
					<div>{`$${this.props.score}`}</div>
				</div>
				<div className='checkbox1 mt-5'></div>
				<div className='button mt-3'></div>
				<div className='products mt-3'></div>
				<div className='calc mt-5'>
					<div className='age'>
						<input type='number' defaultValue='30' maxLength='2' />
					</div>
					<div className='gender'>
						<select defaultValue='男性'>
							<option value='男性'>男性</option>
							<option value='女性'>女性</option>
						</select>
					</div>
					<div className='payment'>$14,800</div>
					<div className='monthly_payment'>$1,480</div>
				</div>
				<div className='desc mt-5'>*詳細保險內容及實際保險費用依條款說明為主</div>
			</div>
		);
	}
}
