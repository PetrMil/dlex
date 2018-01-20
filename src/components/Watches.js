import React, { Component } from 'react';
import watch_1 from '../images/watch_1@2x.png';
import watch_2  from '../images/watch_2@2x.png';
import watch_3  from '../images/watch_3@2x.png';
import watch_4  from '../images/watch_4@2x.png';
import color  from '../images/color.svg';

export default class Wathces extends Component {

	constructor(props) {

		super(props);
		
		this.state = {
			activeButton: 'watches'
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
			<div className="watches">
				<div className="watches-nav-bar">
					<h1>popular today</h1>
					<ul>
						<li className={`button ${ active === 'shoes' ? 'active' : '' }`} onClick={ () => this.handleClick('shoes')}>Shoes</li>
						<li className={`button ${ active === 'jackets' ? 'active' : '' }`} onClick={ () => this.handleClick('jackets')}>Jackets</li>
						<li className={`button ${ active === 'watches' ? 'active' : '' }`} onClick={ () => this.handleClick('watches')}>Watches</li>
						<li className={`button ${ active === 'jeans' ? 'active' : '' }`} onClick={ () => this.handleClick('jeans')}>Jeans</li>
						<li className={`button ${ active === 'shirts' ? 'active' : '' }`} onClick={ () => this.handleClick('shirts')}>Shirts</li>
					</ul>
				</div>
				<div className="watches-container">
					<div className="watches-section">
						<img src={watch_1}/>
						<div className="watch-small-sect">
							<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
							<img src={color} className="color"/> 
							<p className="watch-color">Brown</p>
							<p className="price">$79.99</p>
							<p className="old-price">$139.99</p>
						</div>
						<p className="best-sale">Best Sale</p>
					</div>
					<div className="watches-section">
						<img src={watch_2}/>
						<div className="watch-small-sect">
							<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
							<img src={color} className="color"/> 
							<p className="watch-color">Brown</p>
							<p className="price">$79.99</p>
							<p className="old-price">$139.99</p>
						</div>
						<p className="sale">Sale</p>
					</div>
					<div className="watches-section">
						<img src={watch_3}/>
						<div className="watch-small-sect">
							<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
							<img src={color} className="color"/> 
							<p className="watch-color">Brown</p>
							<p className="price">$79.99</p>
							<p className="old-price">$139.99</p>
						</div>
						<p className="out-of-stock">Out of stock</p>			
					</div>
					<div className="watches-section">
						<img src={watch_4}/>
						<div className="watch-small-sect">
							<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
							<img src={color} className="color"/> 
							<p className="watch-color">Brown</p>
							<p className="price">$79.99</p>
							<p className="old-price">$139.99</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}