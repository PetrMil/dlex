import React, { Component } from 'react';


export class Index extends Component {

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
        console.log(this.props.data.type)
    }
    
    render() {

        var active= this.state.activeButton
   		
		return (
			<div className="social-container">
				{
	                this.props.data.map((b, index) => {
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
