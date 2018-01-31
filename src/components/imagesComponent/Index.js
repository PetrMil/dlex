import React, { Component } from 'react';
import data from './data';

export class ImagesComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeButton: null
		};
	}

	handleClick(index) {
		this.setState({
			activeButton: index
		})
	}

	render() {

		var active= this.state.activeButton

		return (
			<div className="social-container">
				{
					data.map((b, index) => {
						var className = this.state.activeButton === index ? b.type + ' active' : b.type;
						return (
							<div className={className} key={index} onClick={ () => this.handleClick(index)}>
							</div>
						)
					})
				}
			</div>
		)
	}
}

