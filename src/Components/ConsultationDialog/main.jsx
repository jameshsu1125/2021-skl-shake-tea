import React from 'react';
import './main.less';

const consultationDialog = ({ align }) => {
	return (
		<div
			className={`consultationDialog${align ? ' align' : ''}`}
			onClick={() => {
				window.open('https://campaign.skl.com.tw/skl-goodtime');
			}}
		/>
	);
};
export default consultationDialog;
