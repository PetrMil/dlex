import React, { Component } from 'react';

import facebook from '../../images/facebook@2x.png';
import insta from '../../images/insta@2x.png';
import twit from '../../images/twit@2x.png';
import pint from '../../images/pint@2x.png';
import { Index } from './Index';

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
        };
    }
    
    render() {
        return (
                <Index data={this.state.data} />
        )
    }
}