import React, { Component } from 'react';
import { Index } from './Index';

import facebook from '../../images/facebook@2x.png';
import insta from '../../images/insta@2x.png';
import twit from '../../images/twit@2x.png';
import pint from '../../images/pint@2x.png';

export class Data extends Component {

   constructor(props) {
        super(props);
        this.state = {
            
            data: [
               	{
                    type: "facebook",
                    src: facebook
                },

                {
                    type: "insta",
                    src: insta
                },

                {
                    type: "twit",
                    src: twit
                },
				
                {
                    type: "pint",
                    src: pint
                },

            ]
        };
    }

    render() {

		var data = this.state.data;
		
		var pictures = data.map((b) => {
			
			return (
				<Index data={b} />
			)
		})
   		
		return (
			<div className="social-container">
				{pictures}
			</div>
		)
    }
}