import React, { Component } from 'react';

import titleText from '../images/title-text.svg';
import watch from '../images/watch.svg';
import mobile from '../images/mobile.svg';
import laptop from '../images/laptop.svg';
import tablet from '../images/tablet.svg';
import desktop from '../images/desktop.svg';
import handsMoney from '../images/hands-money.png';

/*import {MobileLogo} from './MobileLogo.js';*/

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
							{/*<MobileLogo />*/}
						</div>
						<div className={`icon-container mobile ${ active === 'mobile' ? 'active' : '' }`} onClick={ () => this.handleClick('mobile') }>
							<img src={mobile} />
						</div>
						<div className={`icon-container tablet ${ active === 'tablet' ? 'active' : '' }`} onClick={ () => this.handleClick('tablet') }>
							<img src={tablet} />
						</div>
						<div className={`icon-container laptop ${ active === 'laptop' ? 'active' : '' }`} onClick={ () => this.handleClick('laptop') }>
							<img src={laptop} />
						</div>
						<div className={`icon-container desktop ${ active === 'desktop' ? 'active' : '' }`} onClick={ () => this.handleClick('desktop') }>
							<img src={desktop} />
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
