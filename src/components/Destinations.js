import React, { Component } from 'react';
import tree_house from '../images/tree_house@2x.png';
import vintage_home from '../images/vintage_home@2x.png';
import private_room from '../images/private_room@2x.png';
import location from '../images/location@2x.svg';

export default class Benefits extends Component {

	render() {
		return (
			<div className="destinations">
				<header>
					<h1>trending destinations</h1>
					<p>Check out the best hotels in these popular places</p>
				</header>
				<main>
					<div className="homes">
						<img src={tree_house} className="house_img"/>
						<h2>The Joshua Tree House</h2>
						<img src={location} className="location" />
						<h3>Joshua Tree, CA, United States</h3>
						<p>$250</p>
					</div>
					<div className="homes">
						<img src={vintage_home} className="house_img"/>
						<h2>Industrial vintage home</h2>
						<img src={location} className="location" />
						<h3>Budapest, Hungary</h3>
						<p>$429</p>
					</div>
					<div className="homes">
						<img src={private_room} className="house_img"/>
						<h2>Private room — Center of city</h2>
						<img src={location} className="location" />
						<h3>Porto, Porto, Portugal</h3>
						<p>$125</p>
					</div>
				</main>
				<footer>
					<button>explore more</button>
				</footer>
			</div>
		)
	}
}