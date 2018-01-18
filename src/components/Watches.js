import React, { Component } from 'react';
import watch_1 from '../images/watch_1@2x.png';
import watch_2  from '../images/watch_2@2x.png';
import watch_3  from '../images/watch_3@2x.png';
import watch_4  from '../images/watch_4@2x.png';

export default class Wathces extends Component {

	render() {
		return (
			<div className="watches">
				<div className="watches-nav-bar">
					<p>popelar today</p>
					<ul>
						<li>Shoes</li>
						<li>Jackets</li>
						<li>Wathces</li>
						<li>Jeans</li>
						<li>Shirts</li>
					</ul>
				</div>
				<div className="watches-container">
					<div className="watches-section">
						<img src={watch_1}/>
						<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
						<p className="watch-color">Brown</p>
						<p className="price">$79.99</p>
						<p className="old-price">$139.99</p>
						<p className="status">Best Sale</p>
					</div>
					<div className="watches-section">
						<img src={watch_2}/>
						<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
						<p className="watch-color">Brown</p>
						<p className="price">$79.99</p>
						<p className="old-price">$139.99</p>
						<p className="status">Ыфду</p>
					</div>
					<div className="watches-section">
						<img src={watch_3}/>
						<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
						<p className="watch-color">Brown</p>
						<p className="price">$79.99</p>
						<p className="old-price">$139.99</p>
						<p className="status">Out of stock</p>			
					</div>
					<div className="watches-section">
						<img src={watch_4}/>
						<h1>Daniel Wellington Women's 0511DW Classic Bristol</h1>
						<p className="watch-color">Brown</p>
						<p className="price">$79.99</p>
						<p className="old-price">$139.99</p>
					</div>
				</div>
			</div>
		)
	}
}