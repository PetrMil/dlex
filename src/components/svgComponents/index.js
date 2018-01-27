import React, { Component } from 'react';
import {data, names} from './data';


export class SvgComponent extends Component {

   constructor(props) {
        super(props);
        this.state = {
        	activeButton: null
        };
    }

    handleClick(name) {
        this.setState({
            activeButton: name
        })
    }

    render() {

        var active= this.state.activeButton
   		
        return (
			<div className="select-icon">
                {
                    names.map((name, index) => {
                        var Logo = data[name];
                        return (
                            <div className={ `icon-container ${name} ${ active === name ? 'active' : '' }` } onClick={ () => this.handleClick(name) } >
                                <Logo key={index} />
                            </div>
                        )
                    })                    
                }
            </div>
        )
    }
}

  