import React, { Component } from 'react';
import { ImagesComponent } from './imagesComponent/index';

import logo_footer from '../images/logo_footer.svg';
import arrow_right from '../images/arrow_right@2x.svg';


export default class Footer extends Component {

	constructor(props) {

		super(props);
		
		this.state = {
			activeButton: 'insta'
		}
	} 
	
	handleClick(name) {
		this.setState({
			activeButton: name
		})
	}

	render() {

		var active= this.state.activeButton

		return (
			<div className="footer">
				<div className="up-section">
					<div className="logo-container">
						<img src={logo_footer} />
					</div>
					<div className="company">
						<h2>company</h2>
						<h3>Terms & Conditions</h3>
						<h3>Privacy Policy</h3>
						<h3>Project Protection</h3>
						<h3>FAQ</h3>
					</div>
					<div className="about">
						<h2>about</h2>
						<h3>Company Team</h3>
						<h3>Fashion Designer</h3>
						<h3>Press Kit</h3>
						<h3>Stores</h3>
					</div>
					<div className="resources">
						<h2>resources</h2>
						<h3>Blog</h3>
						<h3>Advertisement</h3>							
					</div>		
				</div>
				<div className="down-section">
					<div className="contact">
						<h2>contact us</h2>
						<h3>Work With Us</h3>
						<h3>support@dlex.com</h3>						
					</div>
					<div className="visit">
						<h2>visit us</h2>
						<h3>Brennan Riley 742 10th Turnpike</h3>
						<h3>New Orleans , TN 31742</h3>
					</div>
					<div className="social">
						<h2>visit us</h2>
						<ImagesComponent />
					</div>
					<div className="subscribe">
						<h2>Sign up to our newsletter</h2>
						<div className="input-container">
							<input type="email" placeholder="Your email address" />
							<img src={arrow_right} />
						</div>
					</div>
				</div>
				<div className="copyrights">
					<p>© 2017 Dlex.Design. All rights reserved.</p>
				</div>
			</div>
		)
	}
}