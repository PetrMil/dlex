import React, { Component } from 'react';
import logoText from '../images/logo-text.svg';

export default class SelectDevice extends Component {
	
	constructor(props) {

		super(props);
		
		this.state = {
			activeButton: 'buy'
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
			<div className="container">
				<img className="logo-text" src={logoText}/>
				<div className="select-input">
					<div className="buy-sell">
						<div className={`button ${ active === 'buy' ? 'active' : '' }`} onClick={ () => this.handleClick('buy') }>buy</div>
						<div className={`button ${ active === 'sell' ? 'active' : '' }`} onClick={ () => this.handleClick('sell') }>sell</div>
						<div className={`cell ${ active === 'sell' ? 'right' : '' }`}></div>
					</div>
					<input type="text" placeholder="Select Your Device" />
					<div className="toggle"></div>	
				</div>
			</div>
		)
	}

}