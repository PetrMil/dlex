import React, { Component } from 'react';

import { Index } from './Index';

export class Data extends Component {

   constructor(props) {
        super(props);
        this.state = {
            
            data: [
               	{
                    type: "facebook"
                },
                {
                    type: "insta"
                },
                {
                    type: "twit"
                },
                {
                    type: "pint"
                }
            ]
        };
    }
    
    render() {
        return (
                <Index data={this.state.data} />
        )
    }
}