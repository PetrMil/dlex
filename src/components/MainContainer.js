import React, { Component } from 'react';

export default class MainContainer extends Component {

	render() {
		return (
			<div className={`wrapper ${this.props.className}`} >
				<div className="main-container">{this.props.children}</div>
			</div>
		)
	}

}