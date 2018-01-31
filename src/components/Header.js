import React, { Component } from 'react';

import titleText from '../images/title-text.svg';
import handsMoney from '../images/hands-money@2x.png';
import { SvgComponent } from './svgComponents/index';

export default class Header extends Component {

	render() {

		return (

			<div className="header">
				<div className="left-side">
					<img src={titleText} className="titleText" />
					<div className="describe-text">Buy and sell your devices with best price. No up-front fees.</div>
					<div className="select-text">Select Device To Continue</div>
					<SvgComponent />
				</div>
				<div className="right-side">
					<img src={handsMoney} className="hands-money"/>
				</div>
			</div>
		)
	}
}
