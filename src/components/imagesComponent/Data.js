import React, { Component } from 'react';

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

            ],
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
                    this.state.data.map((b, index) => {
                        var className = this.state.activeButton === index ? 'button active' : 'button';
                        return (
                            <div className={className} key={index} onClick={ () => this.handleClick(index)}>
                                <img src={b.src} />
                            </div>
                        )
                    })
                }
			</div>
        )
    }
}