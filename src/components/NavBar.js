import React, { Component } from 'react';
import searchIcon from '../images/search.svg';

export default class NavBar extends Component {

	render() {
		return (
			<div className="navigation-bar">
				<div className="left-pane">
					<span className="lang-select">
						<span className="label">Market:</span>
						<span className="select">English<span className="toggle"></span></span>
					</span>
					<span className="contacts">
						<span className="work-hours">24/7 Support</span>
						<span className="phone-number">1-333-444-5544</span>
					</span>
				</div>
				<div className="right-pane">
					<div className="icon-block">
						<div className="icon account"></div>
						<div className="title">Account<span className="toggle inactive"></span></div>
					</div>
					<div className="icon-block small">
						<div className="icon cart"></div>
						<div className="title">Cart (4)</div>
					</div>
					<div className="search-input">
						<img className="icon" src={searchIcon} />
						<input type="text" placeholder="Search here" />
					</div>

				</div>
			</div>
		)
	}

}