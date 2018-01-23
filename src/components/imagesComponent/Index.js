import React, { Component } from 'react';
import { Data } from './Data.js';

export  class Index extends Component {

	constructor(props) {

		super(props);
		
		this.state = {
			activeButton: ''
		}
	} 
	
	handleClick(name) {
		this.setState({
			activeButton: name
		})
	}

	render() {

		var active= this.state.activeButton

		return(
			<div className={`button ${ active === this.props.data.type ? 'active' : '' }`} onClick={ () => this.handleClick(this.props.data.type)}><img src={this.props.data.src} /></div>
		)
	}
}