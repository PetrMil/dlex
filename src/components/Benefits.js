import React, { Component } from 'react';
import fastPay from '../images/fast-pay.svg';
import priceLock from '../images/price-lock.svg';
import noRisk from '../images/no-risk.svg';

export default class Benefits extends Component {

	render() {
		return (
			<div className="benefits">
				<div className="ben-title">Benefits work with us</div>
				<div className="ben-container">
					<div className="fast-pay">
						<img  src={fastPay} />
						<p>Fast Pay</p>
						<p>Get paid fast when you trade in your cell phone or device!</p>
					</div>
					<div className="price-lock">
						<img  src={priceLock} />
						<p>30 Day Price Lock</p>
						<p>Lock the price of your phone or device for 30 days!</p>
					</div>
					<div className="no-risk">
						<img  src={noRisk} />
						<p>No Risk</p>
						<p>Selling your cell phone or device to us is risk-free.</p>
					</div>
				</div>
			</div>
		)
	}
}