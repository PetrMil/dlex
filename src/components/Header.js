import React, { Component } from 'react';

import titleText from '../images/title-text.svg';
import handsMoney from '../images/hands-money@2x.png';

import WatchLogo from '../svg/WatchLogo.js';
import MobileLogo from '../svg/MobileLogo.js';
import TabletLogo from '../svg/TabletLogo.js';
import LaptopLogo from '../svg/LaptopLogo.js';
import DesktopLogo from '../svg/DesktopLogo.js';

export default class Header extends Component {

	constructor(props) {

		super(props);
		
		this.state = {
			activeButton: 'mobile'
		}
	} 
	
	handleClick(name) {
		this.setState({
			activeButton: name
		})
	}
	
	render() {

		var active = this.state.activeButton
		
		return (

			<div className="header">
				<div className="left-side">
					<img src={titleText} className="titleText" />
					<div className="describe-text">Buy and sell your devices with best price. No up-front fees.</div>
					<div className="select-text">Select Device To Continue</div>
					<div className="select-icon">
						<div className={`icon-container watch ${ active === 'watch' ? 'active' : '' }`} onClick={ () => this.handleClick('watch') } >
							<WatchLogo />
						</div>
						<div className={`icon-container mobile ${ active === 'mobile' ? 'active' : '' }`} onClick={ () => this.handleClick('mobile') }>
							<MobileLogo />
						</div>
						<div className={`icon-container tablet ${ active === 'tablet' ? 'active' : '' }`} onClick={ () => this.handleClick('tablet') }>
							<TabletLogo />
						</div>
						<div className={`icon-container laptop ${ active === 'laptop' ? 'active' : '' }`} onClick={ () => this.handleClick('laptop') }>
							<LaptopLogo />
						</div>
						<div className={`icon-container desktop ${ active === 'desktop' ? 'active' : '' }`} onClick={ () => this.handleClick('desktop') }>
							<DesktopLogo />
						</div>
					</div>
				</div>
				<div className="right-side">
					<img src={handsMoney} className="hands-money"/>
				</div>
			</div>
		)	
	}
}
